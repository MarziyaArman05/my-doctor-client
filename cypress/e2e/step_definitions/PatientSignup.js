import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import WebTextBox from "../../helpers/webTextBox";
import WebSelectBox from "../../helpers/webSelectBox";
import WebElement from "../../utilities/genericHelpers";
import WebXpath from "../../helpers/webXpath";
import GenericActions from "../../utilities/genericActions";
import locators from "../../pages/patientSignupLocators.json";

const generic = new GenericActions();
const webSelectBox = new WebSelectBox();
const webTextBox = new WebTextBox();
const webElement = new WebElement();
const webXpath = new WebXpath();

When(
  "user enters value {string} in the {string} input field",
  function (inputValue, elementIdentifier) {
    webTextBox.typeText(locators[elementIdentifier], inputValue);
  }
);
Then("user selects checkbox with value {string}", function (elementIdentifier) {
  webXpath.clickByXpath("visibleText", elementIdentifier);
});
Then(
  "user selects {string} in the {string} select field",
  function (value, elementIdentifier) {
    if (elementIdentifier == "date") {
      webSelectBox.selectDropDownUsingText(locators[elementIdentifier], value);
    } else if (elementIdentifier == "month") {
      webSelectBox.selectDropDownUsingText(locators[elementIdentifier], value);
    } else {
      webSelectBox.selectDropDownUsingText(locators[elementIdentifier], value);
    }
  }
);
Then(
  "user enters value in the {string} input field",
  function (elementIdentifier) {
    if (elementIdentifier == "email") {
      var email = generic.generateEmailAddresss(locators[elementIdentifier]);
      cy.wrap(email).as("emailId");
      webTextBox.typeText(locators[elementIdentifier], email);
    } else {
      var mobileNumber = generic.generateMobileNumber(
        locators[elementIdentifier]
      );
      cy.wrap(mobileNumber).as("mobileNo");
      webTextBox.typeText(locators[elementIdentifier], mobileNumber);
    }
  }
);

Then("the form with {string} should be present", function (elementIdentifier) {
  webElement.elementIsDisplayed(locators[elementIdentifier]);
});
Then(
  "user enter value in the {string} input field",
  function (elementIdentifier) {
    if (elementIdentifier == "mobileNumber") {
      cy.get("@mobileNo").then((mobileNo) => {
        webTextBox.typeText(locators[elementIdentifier], mobileNo);
      });
    } else
      cy.get("@emailId").then((emailId) => {
        webTextBox.typeText(locators[elementIdentifier], emailId);
      });
  }
);
