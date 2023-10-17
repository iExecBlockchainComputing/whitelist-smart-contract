# iExec whitelist Smart contract

This project is a smart contract that will be deployed on bellecour blockchain to allow whitelisting next dapp versions without asking the end-user to resign an other grant access (or a dataset sell order) to the desired dapp.

## Install

```bash
npm run ci
npm run compile
```

## Test

```bash
npm run test
# with coverage
npm run coverage
```

## Scripts

### deploy

deploys a whitelist contract on bellecour

Required environment variables:

- `WALLET_PRIVATE_KEY`: deployer private key

```bash
npm run deploy
```

### transferOwnership

transfer the ownership of a whitelist contract deployed on bellecour to a new owner

Required environment variables:

- `NEW_OWNER_ADDRESS`: new owner address
- `WALLET_PRIVATE_KEY`: whitelist smart contract owner private key

```bash
npm run transferOwnership
```

### addResourceToWhitelist

add an address to a whitelist contract deployed on bellecour

Required environment variables:

- `CONTRACT_ADDRESS`: whitelist smart contract address
- `ADDRESS_TO_ADD`: address to add
- `WALLET_PRIVATE_KEY`: whitelist smart contract owner private key

```bash
npm run addResourceToWhitelist
```

### removeResourceFromWhitelist

remove an address from a whitelist contract deployed on bellecour

Required environment variables:

- `CONTRACT_ADDRESS`: whitelist smart contract address
- `ADDRESS_TO_REMOVE`: address to remove
- `WALLET_PRIVATE_KEY`: whitelist smart contract owner private key

```bash
npm run removeResourceFromWhitelist
```
