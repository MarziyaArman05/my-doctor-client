import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import GenericActions from "../../utilities/genericActions";
import WebXpath from "../../helpers/webXpath";
import WebButton from "../../helpers/webButton";
import urls from "../../pages/urls.json";
import locators from "../../pages/loginLocators.json";

const generic = new GenericActions();
const webxpath = new WebXpath();
const webButton = new WebButton();

Given("user is on the homepage", function () {
  generic.visit();
});

Given("user navigates to {string} page", function (string) {
  cy.visit(urls[string]);
});

Then("user clicks on the {string} button", function (webElement) {
  webButton.click(locators[webElement]);
});
Then("user clicks on the {string} card", function (webElement) {
  generic.wait(1000);
  webButton.click(locators[webElement]);
 
});
Then("user can view the messages {string}", function (message) {
  let array = [];
  array = message.split(",");
  cy.log(array);
  for (let count = 0; count < array.length; count++) {
    webxpath.shouldContainTextByXpath("visibleText", array[count]);
  }
});
