import { ethers } from 'hardhat';

async function main() {
  const { CONTRACT_ADDRESS, NEW_OWNER_ADDRESS } = process.env;

  // Fetch the signer. Here, we're using the default signer (account[0]), but you can change this.
  const [signer] = await ethers.getSigners();

  // Get a contract instance
  const IExecWhitelist = await ethers.getContractFactory('IExecWhitelist');
  const whitelist = IExecWhitelist.attach(CONTRACT_ADDRESS as string).connect(
    signer
  );

  // Call the remRessourceToWhitelist function
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
