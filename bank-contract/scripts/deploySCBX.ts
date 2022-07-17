import { ethers } from "hardhat";

async function main() {
  const SCBX = await ethers.getContractFactory("SCBX");
  const scbx = await SCBX.deploy();

  await scbx.deployed();

  console.log("scb deployed to:", scbx.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
