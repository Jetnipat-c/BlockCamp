import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { SCB, SCB__factory, Token, Token__factory } from "../typechain-types";
import { formatEther, parseEther, formatUnits } from "ethers/lib/utils";

describe("SCB Bank", () => {
  let account0: SignerWithAddress;
  let account1: SignerWithAddress;
  let account2: SignerWithAddress;
  let USDC: string;
  let BUSD: string;
  let contractUSDC: Token;
  let contractBUSD: Token;
  let scb: SCB;

  before(async () => {
    // Deploy Token
    const account = await hre.ethers.getSigners();

    account0 = account[0];
    account1 = account[1];
    account2 = account[2];
    const Token = (await ethers.getContractFactory("Token")) as Token__factory;
    const SCB = (await ethers.getContractFactory("SCB")) as SCB__factory;
    USDC = (await Token.deploy("USDC Coin", "USDC")).address;
    BUSD = (await Token.deploy("BUSD Coin", "BUSD")).address;
    contractUSDC = Token__factory.connect(USDC, account0) as Token;
    contractBUSD = Token__factory.connect(BUSD, account0) as Token;
    scb = await SCB.deploy();

    await contractUSDC.mint(account0.address, parseEther("3000"));
    await contractBUSD.mint(account0.address, parseEther("3500"));

    const usdcBalance = formatEther(await contractUSDC.balanceOf(account0.address));
    const busdBalance = formatEther(await contractBUSD.balanceOf(account0.address));

    expect(usdcBalance).to.equal("3000.0");
    expect(busdBalance).to.equal("3500.0");
  });

  it("1. As a user, I want to create a new bank account that I can specify the unique account name to my liking.", async function () {
    await scb.createAccount("Account1");
    await scb.createAccount("Account2");

    await scb.connect(account1).createAccount("Account3");

    const addressAccount1 = await scb.getAddressByName("Account1");
    const addressAccount2 = await scb.getAddressByName("Account2");
    const addressAccount3 = await scb.connect(account1).getAddressByName("Account3");

    expect(addressAccount1).to.equal(account0.address);
    expect(addressAccount2).to.equal(account0.address);
    expect(addressAccount3).to.equal(account1.address);
  });

  it("2. As a user, I want to recharge/deposit an ERC 20 or CW 20 token to my account by specifying the account name.", async function () {
    // * Address0 USDC = 3000.0
    await contractUSDC.approve(scb.address, ethers.constants.MaxUint256);
    await scb.deposit("Account1", USDC, parseEther("500"));
    await scb.deposit("Account2", USDC, parseEther("200"));

    const balanceUSDCOfAccount1 = formatEther(await scb.getBalance(account0.address, "Account1", USDC));
    const balanceUSDCOfAccount2 = formatEther(await scb.getBalance(account0.address, "Account2", USDC));
    const usdcBlContract_account0 = formatEther(await contractUSDC.balanceOf(account0.address));
    const totalSupply = formatEther(await scb.getTotalSupply());

    expect(balanceUSDCOfAccount1).to.equal("500.0");
    expect(balanceUSDCOfAccount2).to.equal("200.0");
    expect(usdcBlContract_account0).to.equal("2300.0");
    expect(totalSupply).to.equal("700.0");
  });

  it("3. As a user, I want to withdraw the ERC 20 token that is in the balance of my account.", async function () {
    // * Account1 USDC = 500.0
    // * Account2 USDC = 200.0
    await scb.withdraw("Account1", USDC, parseEther("500"));
    await scb.withdraw("Account2", USDC, parseEther("100"));

    const balanceUSDCOfAccount1 = formatEther(await scb.getBalance(account0.address, "Account1", USDC));
    const balanceUSDCOfAccount2 = formatEther(await scb.getBalance(account0.address, "Account2", USDC));
    const usdcBlContract_account0 = formatEther(await contractUSDC.balanceOf(account0.address));
    const totalSupply = formatEther(await scb.getTotalSupply());

    expect(balanceUSDCOfAccount1).to.equal("0.0");
    expect(balanceUSDCOfAccount2).to.equal("100.0");
    expect(usdcBlContract_account0).to.equal("2900.0");
    expect(totalSupply).to.equal("100.0");
  });

  it("4. As a user, I want to transfer the ERC 20 token that is in the balance of my account to one of the other accounts through the account name", async function () {
    // * Account1 USDC = 0.0
    // * Account2 USDC = 100.0

    // ! Internal Transfer
    await scb.transferToken(0, account0.address, USDC, "Account2", "Account1", parseEther("100"));

    const balanceUSDCOfAccount1 = formatEther(await scb.getBalance(account0.address, "Account1", USDC));
    const balanceUSDCOfAccount2 = formatEther(await scb.getBalance(account0.address, "Account2", USDC));
    const usdcBlContract_account0 = formatEther(await contractUSDC.balanceOf(account0.address));
    const totalSupply = formatEther(await scb.getTotalSupply());

    expect(balanceUSDCOfAccount1).to.equal("100.0");
    expect(balanceUSDCOfAccount2).to.equal("0.0");
    expect(usdcBlContract_account0).to.equal("2900.0");
    expect(totalSupply).to.equal("100.0");
  });

  it("5. [BONUS] When a user executes a token transfer to other accounts that is not yours, the contract must deduct 1% of the transferred amount as a platform fee.", async function () {
    // * Account1 USDC = 100.0
    // * Account2 USDC = 0.0
    // * Account3 USDC = 0.0

    await scb.transferToken(1, account1.address, USDC, "Account1", "Account3", parseEther("100"));
    const _balanceUSDCOfAccount1 = formatEther(await scb.getBalance(account0.address, "Account1", USDC));
    const balanceUSDCOfAccount3 = formatEther(await scb.connect(account1).getBalance(account1.address, "Account3", USDC));
    const totalSupply = formatEther(await scb.getTotalSupply());
    const fee = formatEther(await scb.getTotalFee(USDC));

    expect(balanceUSDCOfAccount3).to.equal("99.0");
    expect(_balanceUSDCOfAccount1).to.equal("0.0");
    expect(totalSupply).to.equal("100.0");
    expect(fee).to.equal("1.0");
  });

  it("6. [BONUS] As a user, I want to transfer the ERC 20 token that is in the balance of my account to multiple accounts at the same time through the list of account names.", async function () {
    await contractUSDC.approve(scb.address, ethers.constants.MaxUint256);
    await scb.deposit("Account1", USDC, parseEther("1000"));
    await scb.deposit("Account2", USDC, parseEther("1000"));
    // const balanceUSDCOfAccount1 = formatEther(await scb.getBalance(account0.address, "Account1", USDC));
    // const balanceUSDCOfAccount2 = formatEther(await scb.getBalance(account0.address, "Account2", USDC));
    // const balanceUSDCOfAccount3 = formatEther(await scb.connect(account1).getBalance(account1.address, "Account3", USDC));
    // * Account1 USDC = 1000.0
    // * Account2 USDC = 1000.0
    // * Account3 USDC = 99.0

    const types = [0, 1];
    const execute = [account0.address, account1.address];
    const tokens = [USDC, USDC];
    const from = ["Account2", "Account1"];
    const to = ["Account1", "Account3"];
    const amounts = [parseEther("500"), parseEther("200")];

    await scb.batchTokensTransfer(types, execute, tokens, from, to, amounts);

    const _balanceUSDCOfAccount1 = formatEther(await scb.getBalance(account0.address, "Account1", USDC));
    const _balanceUSDCOfAccount2 = formatEther(await scb.getBalance(account0.address, "Account2", USDC));
    const _balanceUSDCOfAccount3 = formatEther(await scb.connect(account1).getBalance(account1.address, "Account3", USDC));
    const fee = formatEther(await scb.getTotalFee(USDC));

    expect(_balanceUSDCOfAccount1).to.equal("1300.0");
    expect(_balanceUSDCOfAccount2).to.equal("500.0");
    expect(_balanceUSDCOfAccount3).to.equal("297.0");
    expect(fee).to.equal("3.0");
  });

  it("Withdraw fee.", async function () {
    const fee = formatEther(await scb.getTotalFee(USDC));
    await scb.withdrawFee(USDC, parseEther(fee));

    const _usdcBalance = formatEther(await contractUSDC.balanceOf(account0.address));

    const _fee = formatEther(await scb.getTotalFee(USDC));

    expect(_usdcBalance).to.equal("903.0");
    expect(_fee).to.equal("0.0");
  });
});
