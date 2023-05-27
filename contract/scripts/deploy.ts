import { ethers } from "hardhat";

async function main() {

  const MyNFTFactory = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFTFactory.deploy();

  await myNFT.deployed();

  console.log(
    `deployed to ${myNFT.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
