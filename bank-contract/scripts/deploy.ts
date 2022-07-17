import { ethers } from "hardhat";

async function main() {
  const SCB = await ethers.getContractFactory("SCB");
  const scb = await SCB.deploy();

  await scb.deployed();

  console.log("scb deployed to:", scb.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
