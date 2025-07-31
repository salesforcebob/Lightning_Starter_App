import { createElement } from "lwc";
import HelloWorld from "c/helloWorld";

describe("c-hello-world", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("renders with default message", () => {
    // Create component
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });

    // Add to DOM
    document.body.appendChild(element);

    // Verify default message is rendered
    const messageElement = element.shadowRoot.querySelector(
      "p.slds-text-heading_medium"
    );
    expect(messageElement.textContent).toBe("Hello World!");
  });

  it("renders with custom message", () => {
    // Create component
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });

    // Set custom message
    element.message = "Custom Greeting!";

    // Add to DOM
    document.body.appendChild(element);

    // Verify custom message is rendered
    const messageElement = element.shadowRoot.querySelector(
      "p.slds-text-heading_medium"
    );
    expect(messageElement.textContent).toBe("Custom Greeting!");
  });

  it("renders lightning-card with correct title and icon", () => {
    // Create component
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });

    // Add to DOM
    document.body.appendChild(element);

    // Verify lightning-card properties
    const cardElement = element.shadowRoot.querySelector("lightning-card");
    expect(cardElement).not.toBeNull();
    expect(cardElement.title).toBe("Hello World Component");
    expect(cardElement.iconName).toBe("utility:world");
  });

  it("renders description text", () => {
    // Create component
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });

    // Add to DOM
    document.body.appendChild(element);

    // Verify description text is present
    const descriptionElement = element.shadowRoot.querySelector(
      "p.slds-text-body_regular"
    );
    expect(descriptionElement.textContent).toBe(
      "This is a simple Lightning Web Component that can be added to any Lightning page."
    );
  });

  it("applies correct CSS classes", () => {
    // Create component
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });

    // Add to DOM
    document.body.appendChild(element);

    // Verify CSS classes are applied correctly
    const containerDiv = element.shadowRoot.querySelector(
      "div.slds-p-horizontal_small"
    );
    expect(containerDiv).not.toBeNull();

    const messageElement = element.shadowRoot.querySelector(
      "p.slds-text-heading_medium.slds-p-bottom_small"
    );
    expect(messageElement).not.toBeNull();

    const descriptionElement = element.shadowRoot.querySelector(
      "p.slds-text-body_regular"
    );
    expect(descriptionElement).not.toBeNull();
  });

  it("updates message when api property changes", async () => {
    // Create component
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });

    // Add to DOM
    document.body.appendChild(element);

    // Change message property
    element.message = "Updated Message!";

    // Wait for any asynchronous DOM updates
    await Promise.resolve();

    // Verify message is updated
    const messageElement = element.shadowRoot.querySelector(
      "p.slds-text-heading_medium"
    );
    expect(messageElement.textContent).toBe("Updated Message!");
  });
});
