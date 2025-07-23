# Changelog

## [1.0.1](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/compare/v1.0.0...v1.0.1) (2025-07-23)


### 🧰 Other

* update changelog and README for clarity and consistency ([b671345](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/b6713458de9626e9cb1459e4dd4860f0fe71fad6))
* update changelog and README for clarity and consistency ([#24](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/issues/24)) ([dd64f57](https://github.com/iExecBlockchainComputing/whitelist-smart-contract/commit/dd64f57109c070cf5e9408550c9718c3f1fbda0e))

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
