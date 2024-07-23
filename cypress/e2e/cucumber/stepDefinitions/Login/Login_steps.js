import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/LoginPage/LoginPage';

When("I Click on Login button", function () {
  login.clickOnLoginButton();
});

When("I click on Next button", function () {
  login.clickOnNextButton();
  });
When("I enter username {string}", (firstName) => {
  login.enterUserName(firstName);
});

When("I enter password {int}", (password) => {
  login.enterPassword(password);
});
Then(
  "Verify that it is showing expected succeesful message {string}",
  (message) => {
    cy.xpath("//h4[contains(text(),'Welcome to Seamless!!')]").should(
      "have.text",
      message
    );
  }
);