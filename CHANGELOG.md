# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Hello World Lightning Web Component** - A simple, configurable LWC that displays a customizable greeting message
  - Configurable message property through Lightning App Builder
  - Professional Lightning Card design with world icon
  - SLDS styling for consistency
  - Support for Lightning App Pages, Home Pages, and Record Pages
  - Comprehensive Jest unit tests with 100% test coverage
  - Full JSDoc documentation
  - Component available in Lightning App Builder component palette

### Changed

- Updated `force-app/main/default/manifest/package.xml` to include only metadata types with corresponding directories under `force-app/main/default/`. Added types: `AuraDefinitionBundle`, `ContentAsset`, `LightningMessageChannel`. Switched `FlexiPage` to wildcard. Removed types not represented by a directory: `Profile`, `GenAiPromptTemplateActv`.
- Updated package.json dependencies to resolve ESLint plugin version conflicts
- Fixed lint script to properly handle LWC-only projects

### Technical Details

- Added Lightning Web Component: `force-app/main/default/lwc/helloWorld/`
- Files included: HTML template, JavaScript controller, metadata configuration, Jest tests, and documentation
- Configured for use in Lightning App Builder with configurable properties
- Successfully deployed and tested in scratch org environment

---

## How to Use This Changelog

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities
