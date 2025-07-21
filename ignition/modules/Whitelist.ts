import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('WhitelistModule', (m) => {
  const whitelist = m.contract('IExecWhitelist');

  // Return the deployed contract
  return { whitelist };
});
