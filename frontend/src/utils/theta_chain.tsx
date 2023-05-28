import { Chain } from "wagmi";

export const thetaTestnet = {
  id: 365, // Update with the appropriate ID for the Theta Testnet
  name: "Theta Testnet", // Update with the name of the Theta Testnet
  network: "theta", // Update with the network name of the Theta Testnet
  nativeCurrency: {
    decimals: 18,
    name: "Theta", // Update with the native currency name of the Theta Testnet
    symbol: "TFUEL", // Update with the native currency symbol of the Theta Testnet
  },
  rpcUrls: {
    public: { http: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"] }, // Update with the RPC URL for the Theta Testnet
    default: { http: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"] }, // Update with the default RPC URL for the Theta Testnet
  },
  blockExplorers: {
    etherscan: { name: "ThetaScan", url: "https://explorer.thetatoken.org/" }, // Update with the block explorer information for the Theta Testnet
    default: { name: "ThetaScan", url: "https://explorer.thetatoken.org/" }, // Update with the default block explorer information for the Theta Testnet
  },
  contracts: {
    multicall3: {
      address: "0xabcde12345", // Update with the address of the multicall3 contract on the Theta Testnet
      blockCreated: 1_000_000, // Update with the block number when the multicall3 contract was created on the Theta Testnet
    },
  },
} as const 


const thetaChain: Chain = thetaTestnet;