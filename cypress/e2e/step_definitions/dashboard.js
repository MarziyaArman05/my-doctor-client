import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import GenericActions from "../../utilities/genericActions";
import WebElement from "../../helpers/webElement";
import WebXpath from "../../helpers/webXpath";
import locators from "../../pages/loginLocators.json";
import WebText from "../../helpers/webText";

const generic = new GenericActions();
const webElement = new WebElement();
const webxpath = new WebXpath();
const webText = new WebText();

Then(
  "corresponding page appears with the expected {string}: {string}",
  function (webElement, item) {
    let array = [];
    array = item.split(",");
    cy.log(item);
    generic.wait(1000);
    for (let count = 0; count < array.length; count++) {
      webText.verifyPartialText(locators[webElement], array[count]);
    }
  }
);

Then("user can view list of {string}", function (string) {
  generic.wait(1000);
  cy.scrollTo("bottom");
  webElement.elementIsPresent(locators[string], string);
});

Then("user is on the {string} page", function (string) {
  cy.scrollTo("bottom");
  webElement.elementIsDisplayed(locators[string], string);
});

Then("user is on {string} page", function (string) {
  cy.scrollTo("bottom");
  webxpath.shouldContainTextByXpath("visibleText", string);
});
