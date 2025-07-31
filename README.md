# ⚡ Lightning Starter App Template

A modern Salesforce Lightning app development template featuring best practices for unlocked package development, Lightning Web Components (LWC), and source-driven development workflows.

## 🎯 What This Template Provides

This repository serves as a **production-ready starting point** for building Lightning applications using:

- **🔧 Modern Salesforce DX Setup**: Pre-configured project structure with unlocked package support
- **⚡ Lightning Web Components**: Example Hello World LWC with full testing and documentation
- **🧪 Testing Framework**: Jest unit tests with 100% coverage examples
- **📦 Package-First Architecture**: Ready for unlocked package development and CI/CD
- **🎨 Best Practices**: ESLint, Prettier, and Salesforce coding standards
- **📚 Comprehensive Documentation**: READMEs, changelogs, and inline code documentation

### 🚀 Included Example Components

- **Hello World LWC** (`force-app/main/default/lwc/helloWorld/`)
  - Configurable message property
  - Lightning App Builder integration
  - Comprehensive Jest unit tests
  - Professional Lightning Card design with SLDS styling

## 🏃‍♂️ Quick Start

### Prerequisites

- [Salesforce CLI (sf)](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) v2.0+
- [Node.js](https://nodejs.org/) v18+
- [VS Code](https://code.visualstudio.com/) with [Salesforce Extensions](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)
- Access to a Salesforce Dev Hub org

### 1. Use This Template

1. Click **"Use this template"** button on GitHub
2. Create your new repository
3. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

### 2. Set Up Your Development Environment

```bash
# Install dependencies
npm install

# Authenticate with your Dev Hub
sf org login web --set-default-dev-hub

# Create a scratch org for development
sf org create scratch --definition-file config/project-scratch-def.json --alias my-app-dev --duration-days 7 --set-default

# Deploy the example components
sf project deploy start

# Open your scratch org
sf org open
```

### 3. Test the Example Component

1. Navigate to **Setup** → **Lightning App Builder**
2. Create a new **App Page**
3. Drag the **"Hello World"** component onto the page
4. Configure the **Display Message** property
5. Save and activate the page

### 4. Run Tests

```bash
# Run Jest unit tests
npm test

# Run with coverage
npm run test:unit:coverage

# Run linting
npm run lint
```

## 🛠️ Development Workflow

This template follows **source-driven development** best practices:

### Daily Development Cycle

1. **Create/Use Scratch Org**

   ```bash
   sf org create scratch --definition-file config/project-scratch-def.json --alias feature-branch --duration-days 7
   ```

2. **Develop & Test**

   ```bash
   # Deploy changes
   sf project deploy start

   # Run tests
   npm test

   # Open org for manual testing
   sf org open
   ```

3. **Package & Version**
   ```bash
   # Create package version
   sf package version create --package "Campaign Brief Builder" --installation-key-bypass --wait 10
   ```

### Key Commands

| Command                     | Purpose                |
| --------------------------- | ---------------------- |
| `npm test`                  | Run Jest unit tests    |
| `npm run lint`              | Run ESLint checks      |
| `sf project deploy start`   | Deploy to default org  |
| `sf org create scratch`     | Create new scratch org |
| `sf package version create` | Create package version |

## 📁 Project Structure

```
├── 📂 force-app/main/default/    # Salesforce metadata
│   ├── 📂 lwc/                   # Lightning Web Components
│   │   └── 📂 helloWorld/        # Example Hello World LWC
│   ├── 📂 classes/               # Apex classes
│   ├── 📂 objects/               # Custom objects
│   └── 📂 triggers/              # Apex triggers
├── 📂 config/                    # Scratch org definitions
├── 📂 scripts/                   # Utility scripts
├── 📋 sfdx-project.json          # Package configuration
├── 📋 package.json               # Node.js dependencies
├── 📋 CHANGELOG.md               # Version history
└── 📋 CONTRIBUTION.md            # Contribution guidelines
```

## 🧪 Testing Strategy

This template implements **multi-layer testing**:

1. **Unit Tests (Jest)**: Test LWC components in isolation
2. **Integration Tests**: Test component interactions in scratch orgs
3. **Package Tests**: Validate package installation and functionality

### Writing Tests

- Create Jest tests in `__tests__/` folders within each LWC
- Follow the naming convention: `componentName.test.js`
- Aim for 100% code coverage
- Mock all external dependencies

## 📦 Unlocked Package Development

This template is optimized for **unlocked package development**:

- **Source-driven**: Version control is the source of truth
- **Modular**: Organized for package decomposition
- **CI/CD Ready**: Configured for automated deployment pipelines
- **Dependency Management**: Explicit package dependencies

### Creating Your First Package Version

```bash
# Create package version
sf package version create --package "Campaign Brief Builder" --installation-key-bypass --wait 10

# Install in target org
sf package install --package 04tXXXXXXXXXXXXXXX --target-org production-org
```

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTION.md](CONTRIBUTION.md) for detailed guidelines.

### Quick Contribution Steps

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/amazing-component`
3. **Follow** the development workflow above
4. **Write** tests for your changes
5. **Update** the [CHANGELOG.md](CHANGELOG.md)
6. **Submit** a pull request

### Development Standards

- Follow the [Salesforce LWC Best Practices](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.best_practices)
- Maintain 100% Jest test coverage for new components
- Use JSDoc for all public methods and properties
- Update documentation for any new features

## 📚 Additional Resources

- **[Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)**
- **[Lightning Web Components Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)**
- **[Unlocked Packages Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_intro.htm)**
- **[Lightning Design System](https://www.lightningdesignsystem.com/)**

## 📄 License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🆘 Support

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and community support
- **Documentation**: Check the component READMEs in `force-app/main/default/lwc/`

---

**Happy Building!** ⚡🚀
