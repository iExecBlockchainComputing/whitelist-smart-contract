import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy';
import { HardhatUserConfig } from 'hardhat/config';
const { WALLET_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: 'https://bellecour.iex.ec',
      },
    },
    bellecour: {
      url: 'https://bellecour.iex.ec',
      accounts: WALLET_PRIVATE_KEY ? [WALLET_PRIVATE_KEY] : [],
      gasPrice: 0,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
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
          apiURL: 'https://blockscout-bellecour.iex.ec/api',
          browserURL: 'https://blockscout-bellecour.iex.ec',
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
