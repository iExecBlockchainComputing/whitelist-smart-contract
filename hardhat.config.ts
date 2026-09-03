import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-dependency-compiler';
import { HardhatUserConfig } from 'hardhat/config';
import { env } from './config/env';

const privateKey = env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  networks: {
    // Arbitrum Networks
    arbitrumSepolia: {
      url: env.RPC_URL || 'https://sepolia-rollup.arbitrum.io/rpc',
      accounts: privateKey ? [privateKey] : [],
      blockGasLimit: 30_000_000, // Arbitrum has higher block gas limits
      chainId: 421614,
    },
    arbitrum: {
      url: env.RPC_URL || 'https://arb1.arbitrum.io/rpc',
      accounts: privateKey ? [privateKey] : [],
      blockGasLimit: 30_000_000, // Arbitrum has higher block gas limits
      chainId: 42161,
    },
    // poco-chain native config
    'dev-native': {
      chainId: 65535,
      url: process.env.RPC_URL ?? 'http://localhost:8545',
      accounts: privateKey ? [privateKey] : [],
      gasPrice: 0,
    },
  },
  //to verify contract on Blockscout
  etherscan: {
    apiKey: env.EXPLORER_API_KEY,
  },
  dependencyCompiler: {
    paths: [
      '@openzeppelin/contracts/access/Ownable.sol',
      '@openzeppelin/contracts/utils/structs/BitMaps.sol',
    ],
    keep: true, // Keep it for slither
  },
  solidity: {
    version: '0.8.28',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
