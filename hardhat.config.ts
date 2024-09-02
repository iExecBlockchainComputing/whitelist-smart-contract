import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';
import 'dotenv/config';

const { WALLET_PRIVATE_KEY } = process.env;

const bellecourBase = {
  chainId: 134,
  gasPrice: 0,
  blockGasLimit: 6_700_000,
  hardfork: 'berlin',
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
      accounts: WALLET_PRIVATE_KEY ? [WALLET_PRIVATE_KEY] : [],
    },
    // poco-chain native config
    'dev-native': {
      chainId: 65535,
      url: process.env.RPC_URL ?? 'http://localhost:8545',
      accounts: WALLET_PRIVATE_KEY ? [WALLET_PRIVATE_KEY] : [],
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
          apiURL: 'https://blockscout-v6.bellecour.iex.ec/api',
          browserURL: 'https://blockscout-v6.bellecour.iex.ec',
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
