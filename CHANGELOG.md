# Changelog

## [1.1.0](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/compare/v1.0.0...v1.1.0) (2025-07-24)

### 🚀 Features

* add arbitrum network config ([#28](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/28)) ([0742af6](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/0742af6e6d0bbda21876c1ec41674d030af73fee))

## [1.0.0] - 2025-07-23

### Added

* GitHub Actions CI/CD pipeline
* Hardhat Ignition deployment script
* TypeChain support for improved type safety

### Changed

* **[BREAKING]** Migrated from OpenZeppelin contracts v4 to v5
* Updated Hardhat and related dependencies
* Improved test structure using TypeChain factories

### Removed

* Drone CI

## [0.2.1]

### Added

* Load environment variables from `.env` file

### Changed

* Upgrade dependencies

## [0.2.0]

### Changed

* **[BREAKING]** Fixed method name `addResourceToWhitelist`
* **[BREAKING]** Fixed method name `removeResourceFromWhitelist`
* Throw an error early when a script param is missing
* Fixed TypeScript typing errors

## [0.1.0] Initial release
