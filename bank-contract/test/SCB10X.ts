import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { formatEther, parseEther } from "ethers/lib/utils";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { SCBX, SCBX__factory, Token, Token__factory } from "../typechain-types";

describe("SCB Bank", () => {
  let account0: SignerWithAddress;
  let account1: SignerWithAddress;
  let account2: SignerWithAddress;
  let USDC: string;
  let BUSD: string;
  let contractUSDC: Token;
  let contractBUSD: Token;
  let scb: SCBX;

  before(async () => {
    const account = await hre.ethers.getSigners();

    account0 = account[0];
    account1 = account[1];
    account2 = account[2];

    const Token = (await ethers.getContractFactory("Token")) as Token__factory;
    const SCB = (await ethers.getContractFactory("SCBX")) as SCBX__factory;

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
    await scb.createAccount("Account0_A");
    await scb.createAccount("Account0_B");

    await scb.connect(account1).createAccount("Account1_A");

    const account0_A = await scb.getAddress("Account0_A");
    const account0_B = await scb.getAddress("Account0_B");
    const account1_A = await scb.getAddress("Account1_A");

    expect(account0_A).to.equal(account0.address);
    expect(account0_B).to.equal(account0.address);
    expect(account1_A).to.equal(account1.address);
  });

  it("2. As a user, I want to recharge/deposit an ERC 20 or CW 20 token to my account by specifying the account name.", async function () {
    await contractUSDC.approve(scb.address, ethers.constants.MaxUint256);
    await scb.deposit("Account0_A", USDC, parseEther("1500"));
    await scb.deposit("Account0_B", USDC, parseEther("1000"));

    const balanceOfAccount0_A = formatEther(await scb.getBalance("Account0_A", USDC));
    const balanceOfAccount0_B = formatEther(await scb.getBalance("Account0_B", USDC));
    const balanceOfContract = formatEther(await contractUSDC.balanceOf(scb.address));

    const balanceOfAccount0 = formatEther(await contractUSDC.balanceOf(account0.address));

    expect(balanceOfAccount0_A).to.equal("1500.0");
    expect(balanceOfAccount0_B).to.equal("1000.0");
    expect(balanceOfContract).to.equal("2500.0");
    expect(balanceOfAccount0).to.equal("500.0");
  });

  it("3. As a user, I want to withdraw the ERC 20 token that is in the balance of my account.", async function () {
    await scb.withdraw("Account0_A", USDC, parseEther("500"));
    await scb.withdraw("Account0_B", USDC, parseEther("100"));

    const balanceOfAccount0_A = formatEther(await scb.getBalance("Account0_A", USDC));
    const balanceOfAccount0_B = formatEther(await scb.getBalance("Account0_B", USDC));
    const balanceOfContract = formatEther(await contractUSDC.balanceOf(scb.address));

    const balanceOfAccount0 = formatEther(await contractUSDC.balanceOf(account0.address));

    expect(balanceOfAccount0_A).to.equal("1000.0");
    expect(balanceOfAccount0_B).to.equal("900.0");
    expect(balanceOfContract).to.equal("1900.0");
    expect(balanceOfAccount0).to.equal("1100.0");
  });

  it("4. As a user, I want to transfer the ERC 20 token that is in the balance of my account to one of the other accounts through the account name", async function () {
    await scb.transfer("Account0_A", "Account0_B", USDC, parseEther("500"));

    const balanceOfAccount0_A = formatEther(await scb.getBalance("Account0_A", USDC));
    const balanceOfAccount0_B = formatEther(await scb.getBalance("Account0_B", USDC));
    const balanceOfContract = formatEther(await contractUSDC.balanceOf(scb.address));

    const balanceOfAccount0 = formatEther(await contractUSDC.balanceOf(account0.address));

    expect(balanceOfAccount0_A).to.equal("500.0");
    expect(balanceOfAccount0_B).to.equal("1400.0");
    expect(balanceOfContract).to.equal("1900.0");
    expect(balanceOfAccount0).to.equal("1100.0");
  });

  it("5. [BONUS] When a user executes a token transfer to other accounts that is not yours, the contract must deduct 1% of the transferred amount as a platform fee.", async function () {
    await scb.transfer("Account0_A", "Account1_A", USDC, parseEther("500"));

    const balanceOfAccount0_A = formatEther(await scb.getBalance("Account0_A", USDC));
    const balanceOfAccount1_A = formatEther(await scb.getBalance("Account1_A", USDC));
    const balanceOfContract = formatEther(await contractUSDC.balanceOf(scb.address));

    const balanceOfAccount0 = formatEther(await contractUSDC.balanceOf(account0.address));

    const totalFee = formatEther(await scb.getTotalFee(USDC));

    expect(balanceOfAccount0_A).to.equal("0.0");
    expect(balanceOfAccount1_A).to.equal("495.0");
    expect(balanceOfContract).to.equal("1900.0");
    expect(balanceOfAccount0).to.equal("1100.0");
    expect(totalFee).to.equal("5.0");
  });

  it("6. [BONUS] As a user, I want to transfer the ERC 20 token that is in the balance of my account to multiple accounts at the same time through the list of account names.", async function () {
    const from = ["Account0_B", "Account0_B"];
    const to = ["Account0_A", "Account1_A"];
    const token = [USDC, USDC];
    const amount = [parseEther("400"), parseEther("500")];

    await scb.batchTransfer(from, to, token, amount);

    const balanceOfAccount0_A = formatEther(await scb.getBalance("Account0_A", USDC));
    const balanceOfAccount0_B = formatEther(await scb.getBalance("Account0_B", USDC));
    const balanceOfAccount1_A = formatEther(await scb.getBalance("Account1_A", USDC));

    const totalFee = formatEther(await scb.getTotalFee(USDC));

    expect(balanceOfAccount0_A).to.equal("400.0");
    expect(balanceOfAccount0_B).to.equal("500.0");
    expect(balanceOfAccount1_A).to.equal("990.0");
    expect(totalFee).to.equal("10.0");
  });
});
