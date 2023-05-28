require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "c05274f11fefc7c7a728c80d11204a8eae78fd1fd4b42d14f880feb782349341";

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "theta ",
  networks: {
    theta_testnet: {
      url: `https://eth-rpc-api-testnet.thetatoken.org/rpc`,
      accounts: [PRIVATE_KEY],
      chainId: 365,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};