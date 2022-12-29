import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../pages/loginLocators.json";
import WebTextBox from "../../helpers/webTextBox";
import Decryption from "../../utilities/decryption";
import urls from "../../pages/urls.json";
import GenericActions from "../../utilities/genericActions";

const webTextBox = new WebTextBox();
const generic = new GenericActions();

Then(
  "user enters the user {string} in the {string} input field",
  function (string, webElem) {
    webTextBox.typeText(locators[webElem], Decryption.decoderdData(string));
  }
);

Then("user should navigate to the {string}", function (string) {
  generic.checkUrl(urls[string]);
});
