import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  
  networks: {
    bellecour: {
      url: "https://bellecour.iex.ec",
      accounts: ['0xPrivate_Key_Here']
    },
    
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  solidity: "0.8.19",
};

export default config;
