import { LightningElement, api } from "lwc";

/**
 * A simple Hello World Lightning Web Component
 * @description This component displays a customizable greeting message
 * @author Salesforce Developer
 */
export default class HelloWorld extends LightningElement {
  /**
   * The message to display in the component
   * @type {string}
   * @api
   */
  @api message = "Hello World!";

  /**
   * Lifecycle hook that runs when the component is inserted into the DOM
   */
  connectedCallback() {
    // Component is ready
    console.log("Hello World component loaded with message:", this.message);
  }
}
