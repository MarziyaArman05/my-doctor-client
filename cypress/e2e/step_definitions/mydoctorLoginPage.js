import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../pages/urls.json";


Then("user should navigate to the {string}", function (elementIdentifier) {
  generic.checkUrl(urls[elementIdentifier]);
});
