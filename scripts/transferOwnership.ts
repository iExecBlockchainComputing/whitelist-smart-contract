import { ethers } from 'hardhat';
import { IExecWhitelist } from '../typechain-types/contracts/IExecWhitelist.js';

async function main() {
  const { CONTRACT_ADDRESS, NEW_OWNER_ADDRESS } = process.env;

  if (!CONTRACT_ADDRESS) {
    throw Error('missing env CONTRACT_ADDRESS');
  }
  if (!NEW_OWNER_ADDRESS) {
    throw Error('missing env NEW_OWNER_ADDRESS');
  }

  // Fetch the signer. Here, we're using the default signer (account[0]), but you can change this.
  const [signer] = await ethers.getSigners();

  // Get a contract instance
  const IExecWhitelistFactory = await ethers.getContractFactory(
    'IExecWhitelist',
    signer
  );
  const whitelist = IExecWhitelistFactory.attach(
    CONTRACT_ADDRESS
  ) as IExecWhitelist;

  // Call the transferOwnership function
  const tx = await whitelist.transferOwnership(NEW_OWNER_ADDRESS);

  // Wait for the transaction to be mined
  await tx.wait();

  console.log(
    `Address ${NEW_OWNER_ADDRESS} is now the new owner of this smart contract.`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
