# Hello World Lightning Web Component

## Overview

A simple Lightning Web Component that displays a customizable greeting message. This component demonstrates basic LWC structure and can be added to any Lightning page.

## Features

- **Configurable Message**: The greeting message can be customized through the Lightning App Builder
- **Responsive Design**: Uses Salesforce Lightning Design System (SLDS) for consistent styling
- **Lightning Card**: Wrapped in a Lightning Card with an icon for professional appearance
- **Page Flexibility**: Can be added to App Pages, Home Pages, Record Pages, and Experience Cloud sites

## Usage

### Adding to Lightning Pages

1. Open the Lightning App Builder
2. Navigate to the page where you want to add the component
3. Drag the "Hello World" component from the component palette onto the page
4. Configure the "Display Message" property in the Properties panel
5. Save and activate the page

### Configuration Properties

| Property  | Type   | Default        | Description                     |
| --------- | ------ | -------------- | ------------------------------- |
| `message` | String | "Hello World!" | The greeting message to display |

## Technical Details

### Files Structure

```
helloWorld/
├── helloWorld.html          # Template file
├── helloWorld.js            # JavaScript controller
├── helloWorld.js-meta.xml   # Metadata configuration
├── __tests__/
│   └── helloWorld.test.js   # Jest unit tests
└── README.md               # This documentation
```

### Supported Targets

- Lightning App Pages
- Lightning Home Pages
- Lightning Record Pages
- Experience Cloud Pages
- Experience Cloud Default

## Testing

Run the component tests using:

```bash
npm test -- helloWorld
```

The component includes comprehensive Jest tests covering:

- Default message rendering
- Custom message configuration
- Lightning Card properties
- CSS class application
- Property updates

## Development

The component follows Salesforce LWC best practices:

- Uses `@api` decorator for public properties
- Implements proper JSDoc documentation
- Includes comprehensive unit tests
- Uses SLDS for styling consistency

## Example Usage

```html
<!-- In Lightning App Builder, the component will render as: -->
<lightning-card title="Hello World Component" icon-name="utility:world">
  <div class="slds-p-horizontal_small">
    <p class="slds-text-heading_medium slds-p-bottom_small">Hello World!</p>
    <p class="slds-text-body_regular">
      This is a simple Lightning Web Component that can be added to any
      Lightning page.
    </p>
  </div>
</lightning-card>
```
