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
    'bellecour-bubble': {
      chainId: 65535,
      gasPrice: 0,
      blockGasLimit: 6_700_000,
      hardfork: 'berlin',
      url: 'http://chain.wp-throughput.az1.internal:8545',
      accounts: WALLET_PRIVATE_KEY ? [WALLET_PRIVATE_KEY] : [],
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
      {
        network: 'bubble-bellecour',
        chainId: 65535,
        urls: {
          apiURL: 'http://chain.wp-throughput.az1.internal:4000/api',
          browserURL: 'http://chain.wp-throughput.az1.internal:4000',
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
