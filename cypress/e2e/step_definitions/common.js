import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import GenericActions from "../../utilities/genericActions";
import WebXpath from "../../helpers/webXpath";
import WebButton from "../../helpers/webButton";
import WebTextBox from "../../helpers/webTextBox";
import urls from "../../pages/urls.json";
import locators from "../../pages/loginLocators.json";
import Decryption from "../../utilities/decryption";
const webTextBox = new WebTextBox();
const generic = new GenericActions();
const webxpath = new WebXpath();
const webButton = new WebButton();

Given("user is on the homepage", function () {
  generic.visit();
});

Given("user navigates to {string} page", function (elementIdentifier) {
  cy.visit(urls[elementIdentifier]);
});

Then("user clicks on the {string} button", function (elementIdentifier) {
  webButton.click(locators[elementIdentifier]);
});
Then("user clicks on the {string} card", function (elementIdentifier) {
  generic.wait(1000);
  webButton.click(locators[elementIdentifier]);
});
Then("user can view the messages {string}", function (message) {
  let array = [];
  array = message.split(",");
  cy.log(array);
  for (let count = 0; count < array.length; count++) {
    webxpath.shouldContainTextByXpath("visibleText", array[count]);
  }
});

Then(
  "user enters the user {string} in the {string} input field",
  function (inputValue, elementIdentifier) {
    webTextBox.typeText(
      locators[elementIdentifier],
      Decryption.decoderdData(inputValue)
    );
  }
);
