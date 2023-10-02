import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy';
import { HardhatUserConfig } from 'hardhat/config';
const { WALLET_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  networks: {
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
  solidity: '0.8.19',
};

export default config;
