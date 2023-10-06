import { ethers } from 'hardhat';
import { saveSmartContractAddress } from '../utils/utils';
async function main() {
  console.log('Starting deployment...');
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);
  // pass the registry instance to the deploy method
  const IExecWhitelist = await ethers.getContractFactory('IExecWhitelist');
  const iExecWhitelist = await IExecWhitelist.deploy();
  const deploymentTransaction = iExecWhitelist.deploymentTransaction();
  const receipt = await deploymentTransaction?.wait();
  console.log('Gas used: ', receipt?.gasUsed.toString());
  // save the smart contract address in `.smart-contract-address` file for next usages
  await saveSmartContractAddress(await iExecWhitelist.getAddress());
  console.log(
    'IExecWhitelist contract deployed to address:',
    await iExecWhitelist.getAddress()
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
