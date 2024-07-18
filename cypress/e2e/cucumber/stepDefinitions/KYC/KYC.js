import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import kyc from "../../pages/kyc/kycHomepage";
import kycPersonalDetails from "../../pages/kyc/kycPersonalDetails";
import kycAddressPage from "../../pages/kyc/kycaAddress";
import kycAddtionalpage from "../../pages/kyc/kycAdditionalPage";

When("Navigate to KYC main menu", () => {
  cy.log("Click on KYC main menu");
  kyc.clickOnKycMainMenu();
  kyc.clickOnRegisterSubMenu();
});

Then("Verify the Title of the page {string}", (title) => {
  kyc.verifyKycTitle(title);
});
And("I select reseller type {string}", (resellerType) => {
  kyc.selectTypeOfReseller(resellerType);
});
When(
  "I enter personal information for Bank POS {string} {string} {string} {int} {string}",
  (firstName, resellerId, juridicalName, msisdn,email) => {
    kycPersonalDetails.typeResellerName(firstName);
    kycPersonalDetails.typeResellerId(resellerId);
    kycPersonalDetails.typeMsisdnNumber(msisdn);
    kycPersonalDetails.typeEmail(email);
    kycPersonalDetails.typeJuridicalName(juridicalName);
  }
);
And("Click on Next page", () => {
  kycPersonalDetails.clickNextButton();
});


When(
  "I enter address information for Bank POS {string} {string} {string} {string} {string} {string}",
  (address,street, city, country, region,salesArea) => {
    kycAddressPage.typeAddress(address);
    kycAddressPage.typeStreet(street);
    kycAddressPage.typeCity(city);
    kycAddressPage.typeCountry(country);
    kycAddressPage.selectRegion(region);
    kycAddressPage.selectSalesArea(salesArea);
  }
);
When(
  "I enter additional information for standard and click next button {string} {string} {string} {string} {string}",
  (status,enable_Otp,enable_password, password,scc_Status) => {
//kycAddtionalpage.selectStatus(status);
 kycAddtionalpage.enterPassword(password);
// kycAddtionalpage.enableOneTimePassword(enable_Otp);
// kycAddtionalpage.selectEnablePassword(enable_password);
// kycAddtionalpage.selectSccStatus(scc_Status)
  }
);
And("Click on Submit button", () => {
   kycAddtionalpage.clikcSubmitButton();
});
     Then("I am able to validate proper message {string}", (message) => {
      kycAddtionalpage.validateMessage(message)
   });