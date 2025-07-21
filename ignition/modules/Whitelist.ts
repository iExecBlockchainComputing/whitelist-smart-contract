import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';
import { env } from '../../config/env';

export default buildModule('WhitelistModule', (m) => {
  // Get Whitelist contract owner or use default deployer
  const whitelistOwner = env.WHITELIST_OWNER || m.getAccount(0);

  // Define the contract to be deployed
  const whitelist = m.contract('IExecWhitelist', [whitelistOwner]);

  // Return the deployed contract
  return { whitelist };
});
