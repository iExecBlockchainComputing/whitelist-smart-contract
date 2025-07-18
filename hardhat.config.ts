import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';
import { env } from './config/env';

const privateKey = env.WALLET_PRIVATE_KEY;

const bellecourBase = {
  chainId: 134,
  gasPrice: 0,
  blockGasLimit: 6_700_000,
  hardfork: 'berlin',
};

// Avalanche Fuji specific configuration
const fujiBaseConfig = {
    blockGasLimit: 8_000_000,
    chainId: 43113,
};

// Arbitrum Sepolia specific configuration
const arbitrumSepoliaBaseConfig = {
    blockGasLimit: 30_000_000, // Arbitrum has higher block gas limits
    chainId: 421614,
};

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      ...bellecourBase,
      forking: {
        enabled: true,
        url: 'https://bellecour.iex.ec',
      },
    },
    bellecour: {
      ...bellecourBase,
      url: 'https://bellecour.iex.ec',
      accounts: privateKey ? [privateKey] : [],
    },
    // Add Fuji as a network
    avalancheFuji: {
        url: env.RPC_URL || 'https://api.avax-test.network/ext/bc/C/rpc',
        accounts: privateKey ? [privateKey] : [],
        ...fujiBaseConfig,
    },
    // Add Arbitrum Sepolia as a network
    arbitrumSepolia: {
        url: env.RPC_URL || 'https://sepolia-rollup.arbitrum.io/rpc',
        accounts: privateKey ? [privateKey] : [],
        ...arbitrumSepoliaBaseConfig,
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
    apiKey: {
      bellecour: 'abc',
    },
    customChains: [
      {
        network: 'bellecour',
        chainId: 134,
        urls: {
          apiURL: 'https://blockscout.bellecour.iex.ec/api',
          browserURL: 'https://blockscout.bellecour.iex.ec',
        },
      },
    ],
  },
  //to generate gas report
  gasReporter: {
    enabled: true,
    src: 'contracts',
  },
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
