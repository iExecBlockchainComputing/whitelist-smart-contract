import { ethers } from 'hardhat';
import { IExecWhitelist } from '../typechain-types';

async function main() {
  const { CONTRACT_ADDRESS, ADDRESS_TO_REMOVE } = process.env;

  if (!CONTRACT_ADDRESS) {
    throw Error('missing env CONTRACT_ADDRESS');
  }
  if (!ADDRESS_TO_REMOVE) {
    throw Error('missing env ADDRESS_TO_REMOVE');
  }

  // Fetch the signer. Here, we're using the default signer (account[0]), but you can change this.
  const [signer] = await ethers.getSigners();

  // Get a contract instance
  const IExecWhitelistFactory =
    await ethers.getContractFactory('IExecWhitelist');
  const whitelist = IExecWhitelistFactory.attach(CONTRACT_ADDRESS).connect(
    signer
  ) as IExecWhitelist;

  // Call the remResourceToWhitelist function
  const tx = await whitelist.remResourceToWhitelist(ADDRESS_TO_REMOVE);

  // Wait for the transaction to be mined
  await tx.wait();

  console.log(
    `Address ${ADDRESS_TO_REMOVE} has been deleted from the whitelist!`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
