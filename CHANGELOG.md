# Changelog

## [1.1.1](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/compare/v1.1.0...v1.1.1) (2026-09-03)


### 🧰 Other

* remove bellecour network references ([#30](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/30)) ([b81bd64](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/b81bd645aa01b043ed8245f2c406a0643615e671))
* remove bellecour network references from deployment configuration and documentation ([813bfaf](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/813bfafe717ecdba87ceedf5745986a9e2782d1d))
* remove IS_VERIFICATION_API_V2 references from configuration and documentation ([37a843b](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/37a843b063d4463ba45f3bd35c09c28b4f75aecb))

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
