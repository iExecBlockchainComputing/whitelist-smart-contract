import { ethers } from 'hardhat';

async function main() {
  const { CONTRACT_ADDRESS, ADDRESS_TO_ADD } = process.env;
  // Fetch the signer. Here, we're using the default signer (account[0]), but you can change this.
  const [signer] = await ethers.getSigners();

  // Get a contract instance
  const IExecWhitelist = await ethers.getContractFactory('IExecWhitelist');
  const whitelist = IExecWhitelist.attach(CONTRACT_ADDRESS as string).connect(
    signer
  );

  // Call the addRessourceToWhitelist function
  const tx = await whitelist.addRessourceToWhitelist(ADDRESS_TO_ADD);

  // Wait for the transaction to be mined
  await tx.wait();

  console.log(`Address ${ADDRESS_TO_ADD} has been added to the whitelist!`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
