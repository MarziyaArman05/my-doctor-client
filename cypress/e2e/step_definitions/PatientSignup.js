import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import WebTextBox from "../../helpers/webTextBox";
import WebSelectBox from "../../helpers/webSelectBox";
import WebElement from "../../helpers/webElement";
import WebXpath from "../../helpers/webXpath";
import GenericActions from "../../utilities/genericActions";
import locators from "../../pages/loginLocators.json";

const generic = new GenericActions();
const webSelectBox = new WebSelectBox();
const webTextBox = new WebTextBox();
const webElement = new WebElement();
const webXpath = new WebXpath();

When(
  "user enters value {string} in the {string} input field",
  function (string, element) {
    webTextBox.typeText(locators[element], string);
  }
);
Then("user selects checkbox with value {string}", function (string) {
  webXpath.clickByXpath("visibleText", string);
});
Then(
  "user selects {string} in the {string} select field",
  function (string, element) {
    if (element == "date") {
      webSelectBox.selectDropDownUsingText(locators[element], string);
    } else if (element == "month") {
      webSelectBox.selectDropDownUsingText(locators[element], string);
    } else {
      webSelectBox.selectDropDownUsingText(locators[element], string);
    }
  }
);
Then(
  "user enters value Email in the {string} input field",
  function (WebElement) {
    var email = generic.generateEmailAddresss(locators[WebElement]);
    cy.wrap(email).as("emailId");
    webTextBox.typeText(locators[WebElement], email);
  }
);
Then(
  "user enters value Mobile Number in the {string} input field",
  function (WebElement) {
    var mobileNumber = generic.generateMobileNumber(locators[WebElement]);
    cy.wrap(mobileNumber).as("mobileNo");
    webTextBox.typeText(locators[WebElement], mobileNumber);
  }
);

Then("the form with {string} should be present", function (string) {
  webElement.elementIsDisplayed(locators[string]);
});
Then(
  "user enter value Email in the {string} input field",
  function (WebElement) {
    cy.get("@emailId").then((emailId) => {
      webTextBox.typeText(locators[WebElement], emailId);
    });
  }
);

Then(
  "user enter value Mobile Number in the {string} input field",
  function (WebElement) {
    cy.get("@mobileNo").then((mobileNo) => {
      webTextBox.typeText(locators[WebElement], mobileNo);
    });
  }
);
