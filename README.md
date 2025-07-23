# `IExecWhitelist` Smart contract

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

deploys a `IExecWhitelist` contract on bellecour, stores the deployed address in `.smart-contract-address`

Required environment variables:

- `PRIVATE_KEY`: deployer private key
- `IS_VERIFICATION_API_V2`: Set to `false` if you are not verifying the contract on the Etherscan explorer.

```bash
npm run deploy -- --network arbitrumSepolia --deployment-id arbitrumSepolia
```

> NB: you may want to verify the deployed contract code on the block explorer
>
> ```bash
> npm run verify -- arbitrumSepolia
> ```
>
> To verify a contract before deployment, you should set the `deployment-id` as input

### transferOwnership

transfer the ownership of an `IExecWhitelist` contract deployed on bellecour to a new owner

Required environment variables:

- `CONTRACT_ADDRESS`: `IExecWhitelist` smart contract address
- `NEW_OWNER_ADDRESS`: new owner address
- `PRIVATE_KEY`: `IExecWhitelist` smart contract owner private key

```bash
npm run transferOwnership
```

### addResourceToWhitelist

add an address to an `IExecWhitelist` contract deployed on bellecour

Required environment variables:

- `CONTRACT_ADDRESS`: `IExecWhitelist` smart contract address
- `ADDRESS_TO_ADD`: address to add
- `PRIVATE_KEY`: `IExecWhitelist` smart contract owner private key

```bash
npm run addResourceToWhitelist
```

### removeResourceFromWhitelist

remove an address from an `IExecWhitelist` contract deployed on bellecour

Required environment variables:

- `CONTRACT_ADDRESS`: `IExecWhitelist` smart contract address
- `ADDRESS_TO_REMOVE`: address to remove
- `PRIVATE_KEY`: `IExecWhitelist` smart contract owner private key

```bash
npm run removeResourceFromWhitelist
```
