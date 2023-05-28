const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying the MyNFT contract...");
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy ("ThetaMeet", "tTNT", "https://eth-rpc-api-testnet.thetatoken.org/rpc");

  await myNFT.deployed();

  console.log("MyNFT contract deployed!");
  console.log("Contract address:", myNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
