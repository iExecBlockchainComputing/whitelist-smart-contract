import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { saveSmartContractAddress } from '../utils/utils';
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log('Starting deployment...');
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log('deployer: ', deployer);
  const deploymentResult = await deploy('IExecWhitelist', {
    from: deployer,
    log: true,
  });

  if (deploymentResult.newlyDeployed) {
    console.log(
      `IExecWhitelist deployed at address: ${deploymentResult.address}`
    );
    console.log(
      `Transaction hash: ${deploymentResult.receipt?.transactionHash}`
    );
    console.log(`Gas used: ${deploymentResult.receipt?.gasUsed.toString()}`);
    const transactionHash = deploymentResult.receipt?.transactionHash;
    const receipt = await ethers.provider.getTransactionReceipt(
      transactionHash as string
    );
    if (receipt && receipt.status) {
      console.log('Deployment status: Successful');
      // save the smart contract address in `.smart-contract-address` file for next usages
      await saveSmartContractAddress(deploymentResult.address);
    } else {
      console.log('Deployment status: Failed');
    }
  } else {
    console.log(
      'IExecWhitelist already deployed at address:',
      deploymentResult.address
    );
  }
};
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
func(hre).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

export default func;
func.tags = ['IExecWhitelist'];
