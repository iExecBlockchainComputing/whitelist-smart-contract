# Changelog

## [1.1.0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/compare/v1.0.0...v1.1.0) (2025-07-24)


### 🚀 Features

* add arbitrum network config ([#28](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/28)) ([0742af6](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/0742af6e6d0bbda21876c1ec41674d030af73fee))


### 🐞 Bug Fixes

* release-please-config to use v-tag ([f4a363e](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/f4a363ec7c19271afb333b50027f609bf5c36cbd))


### 🧰 Other

* organize network configurations and add Arbitrum network ([5d5eb1d](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/5d5eb1d667f49351225509f9262d22ba6a8034a9))
* update changelog and README for clarity and consistency ([b671345](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/b6713458de9626e9cb1459e4dd4860f0fe71fad6))
* update changelog and README for clarity and consistency ([#24](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/24)) ([dd64f57](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/dd64f57109c070cf5e9408550c9718c3f1fbda0e))
* update package.json and release-please-config for consistency ([75144dd](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/75144ddc355b85bcd025264faf0bb11c6935b278))
* update package.json and release-please-config for consistency ([#26](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/26)) ([43eabc0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/43eabc03e9652d7d3d4d124bdfc99d68903b5856))

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
