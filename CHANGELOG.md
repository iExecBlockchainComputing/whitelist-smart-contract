# Changelog

## [1.1.0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/compare/whitelist-smart-contract-v1.0.0...whitelist-smart-contract-v1.1.0) (2025-07-24)


### 🚀 Features

* add deployment ci ([1b0df46](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/1b0df46c839f1410948286589050259fc78265b1))
* add hardhat-dependency-compiler and update configuration ([fa50308](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/fa50308fe8f9ea12df6295211c50d3b821fd3730))
* add hardhat-dependency-compiler and update Solidity version to 0.8.28 ([f5591a5](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/f5591a5b86a47eab32fc4837f77bb556e445125d))
* add support for Verification API V2 and update deployment workflow ([f63b2d7](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/f63b2d704d0369d6a7ca7df53e26855b18609336))
* add WHITELIST_OWNER environment variable and update contract deployment logic ([3f7318a](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/3f7318a97f895ef8a32c1c0014d2e8aa224fd8e9))
* migrate to github action workflows (prepare repo for `deploy.yml` ci ) ([53a39aa](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/53a39aab7f33dfe5928d1e6dce75ec93719c641e))
* Update contracts with the OZ contracts ([e4ac5e4](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/e4ac5e49700b0dc633c57b10b293946f63da6985))
* update deploy workflow to include optional whitelist owner input and enhance deployment command logic ([56d5c92](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/56d5c92f44a042fa933043cbdc3cb514fd3f4521))


### 🐞 Bug Fixes

* error is occurring because of a version conflict between ES modules and CommonJS. The micro-eth-signer package is now an ES module, but Hardhat is trying to use it with require() instead of import(). ([731201f](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/731201f8e9033ac95cfcbd2064cc38355e041ed6))
* mark package-lock.json as generated for linguist ([92fd545](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/92fd5454873fa99b526312d35dad321675706170))
* package-lock.json ([31189b5](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/31189b5f510bd4bc1e93b67b13617cda4bb65076))
* specify solc-version in slither action for consistency ([61e5e57](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/61e5e57c868222c9079b183a776820237d9447e8))
* streamline deployment and verification steps in GitHub Actions workflow ([6cea93d](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/6cea93df7df6d90f80cabef02f06c7e4291882fd))
* update Codecov action version to v5 ([2761cf5](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/2761cf53104ac9c035029dfdbc6a60951146bcfa))
* update file pattern for saving deployment artifacts in GitHub Actions ([49a0115](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/49a011524b64dcc07a2487dabc6a7203445cf15f))
* update slither action configuration and adjust Solidity version to 0.8.28 ([6cfa63c](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/6cfa63c35ca5ab9179cb62d1082050704fdfe40e))
* update slither action to target contracts directory and adjust hardhat configuration ([f2d688a](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/f2d688a2a8d1fdcd371fc61a3cce3cbe762a77be))
* update slither action version and remove deprecated solc version from configuration ([2af9e86](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/2af9e86338d9dd4ceaed630f98c1e4ea08d69d36))
* update slither configuration to use current directory and add config file option ([fd452c0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/fd452c021a90ee26324ff13306ace866e287998f))


### ✨ Polish

* clean dead files ([9c4c666](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/9c4c66674842e5fa705c288e46e91235b6d46749))
* format deployment code for better readability ([603a481](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/603a48116ca7aef6f71e3e567daf27fce9f20dd4))
* rename API_KEY to EXPLORER_API_KEY and update verification API V2 handling ([69b3be3](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/69b3be3a1b912842bd1c1c384998535329782df7))
* simplify solidity configuration by removing unnecessary compilers array ([4252bda](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/4252bdab890d88e3b8acda44721c2a6cec4e43a3))
* standardize API key naming and add bellecour network option in deployment workflow ([a0ec8aa](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/a0ec8aa90f7dc3401a1f4d5c93b201ee845ffe70))


### 🧰 Other

* add compile step for smart contracts in CI workflow ([b4f3438](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/b4f3438a88c6357f5a6624c456cf809a172edbf5))
* add coverage step to CI workflow for smart contracts ([009a48b](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/009a48ba1cc7875fa4d6a0e666c7e47218b69bb9))
* add initial Slither configuration for static analysis ([a7aa0e3](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/a7aa0e3cbf77c88931f3a8cf13d78254591139e9))
* downgrade Node.js version from 22 to 20 in workflow and .nvmrc ([d077878](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/d077878c98f2373545ab089458feb0dd42852bb0))
* include config/**/*.ts in ESLint overrides for TypeScript files ([c94ef4b](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/c94ef4bd0aa12280f10ba988f9b738c355efec0f))
* **main:** release 1.0.0 ([ce54919](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/ce54919c4f9a677d82374986bf714036c5ea039c))
* **main:** release 1.0.0 ([ab840b0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/ab840b078e04f7f08a0c356210edc3e14be826bf))
* remove coverage step from CI workflow and adjust slither target and arguments ([c6def3d](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/c6def3dc4e90458d572ef278ce8f12400648ebe8))
* remove deploy workflow for contract deployment ([1be2472](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/1be2472565f5a69f4f9d9f482e290781ca9cd16c))
* remove test step for smart contracts from CI workflow ([85561a5](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/85561a5bda8c29ee7596534a740f15c7340b1c2d))
* remove unused network options from deploy workflow ([b02a374](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/b02a374937529eb73d32383250f4f6fe4f1a4142))
* rename WALLET_PRIVATE_KEY to PRIVATE_KEY in environment files and documentation ([fc0a788](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/fc0a7885cbe7073c441dbc1a7b0a97acff45c1b6))
* reorganize dependencies in package.json and package-lock.json ([4ab1c86](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/4ab1c86ee94cc9749d1c0faa41088647c9fa48fc))
* save deployment artifacts for arbitrumSepolia (16446228260) ([a960f02](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/a960f029fc176a12947461bb0fe86559ba25cbd4))
* simplify network-specific script commands in package.json ([dc81a00](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/dc81a009c31067c1c34e24896e0939059fc14d31))
* update .gitattributes and hardhat.config.ts for improved configuration ([fee574c](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/fee574c221b7ece22eb74b3408d6e17b6b17d165))
* update changelog and README for clarity and consistency ([b671345](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/b6713458de9626e9cb1459e4dd4860f0fe71fad6))
* update changelog and README for clarity and consistency ([#24](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/24)) ([dd64f57](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/dd64f57109c070cf5e9408550c9718c3f1fbda0e))
* update changelog for version 1.0.0 release, including breaking changes and new features ([d49d1ec](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/d49d1ecd0996e434776d3a18b380799acc35804e))
* update changelog to remove breaking label from Hardhat dependency update ([8c0f395](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/8c0f395ac92c06f54e61f0d4bcb92f5360206de5))
* update copyright year in IExecWhitelist.sol and format import statements ([527a1b3](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/527a1b38b19fd69e4af6f08a5c420756fc5acf2c))
* update dependencies in CI workflow and add .solhintignore file ([c7682a9](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/c7682a9b49cd5cd09b7a997d9a112a81c6149b23))
* update dependencies in package.json ([d8f2499](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/d8f2499b40f603eaf7fde0eb63c1b90748926c2d))
* update environment configuration and deployment scripts; add ARBISCAN_API_KEY and modify deploy command ([334e63e](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/334e63ecf55ccc9402d5a717b094911004034cb4))
* update environment variable names and remove unused files ([e157e7d](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/e157e7d85966830b02482709cd5a78b7bc56ba15))
* update ESLint overrides to include config files and adjust package.json dependencies ([2dc7a13](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/2dc7a13e94a95c059f5966e151ab412afd4119f0))
* update hardhat version and swap zod with openzeppelin contracts in dependencies ([ee52837](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/ee52837edcbe70318f9f3d72948394cfb82af0d1))
* update package-lock.json to add missing dev dependencies and adjust existing ones ([cf3dc9f](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/cf3dc9ff1c4e1447e581a50f2e2d2e9d251fc365))
* update package.json and release-please-config for consistency ([75144dd](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/75144ddc355b85bcd025264faf0bb11c6935b278))
* update package.json and release-please-config for consistency ([#26](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/26)) ([43eabc0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/43eabc03e9652d7d3d4d124bdfc99d68903b5856))
* update TypeScript configuration to refine include and exclude patterns ([ea33d60](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/ea33d605d9c86a2ed4d82ed28beb88a2598ab332))


### 🧪 Tests

* add owner verification in IExecWhitelist deployment tests ([38f2b27](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/38f2b2763d1ab2428af46a6e31186db31f966b2d))

## [1.0.0] - 2025-07-23

### Added

- GitHub Actions CI/CD pipeline
- Hardhat Ignition deployment script
- TypeChain support for improved type safety

### Changed

- **[BREAKING]** Migrated from OpenZeppelin contracts v4 to v5
- Updated Hardhat and related dependencies
- Improved test structure using TypeChain factories

### Removed

- Drone CI

## [0.2.1]

### Added

- Load environment variables from `.env` file

### Changed

- Upgrade dependencies

## [0.2.0]

### Changed

- **[BREAKING]** Fixed method name `addResourceToWhitelist`
- **[BREAKING]** Fixed method name `removeResourceFromWhitelist`
- Throw an error early when a script param is missing
- Fixed TypeScript typing errors

## [0.1.0] Initial release
