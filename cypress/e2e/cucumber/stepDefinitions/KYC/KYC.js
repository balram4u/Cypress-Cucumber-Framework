import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import kyc from "../../pages/kyc/kycHomepage";
import kycPersonalDetails from "../../pages/kyc/kycPersonalDetails";
import kycAddressPage from "../../pages/kyc/kycaAddress";
import kycAddtionalpage from "../../pages/kyc/kycAdditionalPage";
import searchKyc from "../../pages/kyc/kycSearchPage";
import viewkyc from "../../pages/kyc/kycViewPage";

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

When("I navigate to the Search KYC page", () => {
    cy.log("Click on KYC main menu and KYC search sub menu");
    searchKyc.clickOnKycSearchUsingMenu();
  });

And("I select search key {string}", (searchKey) => {
  cy.log("Select search key");
  searchKyc.selectSearchKey(searchKey);
  });
  And("I enter search value {string}", (searchValue) => {
    cy.log("Enter search value");
    searchKyc.typeSearchValue(searchValue);
    });
    And("I click search button", () => {
      cy.log("Click on Search buttoon");
      searchKyc.clickSearchBtn();
    });
Then("I verify reseller status in table {string} {string}",(searchKey,status)=>{
  searchKyc.verifyResellerStatus(searchKey,status)
} );
And("I click on view button", () => {
  cy.log("Click on view button");
  searchKyc.clickViewButton();
  });

Then("I verify view page should have same data in Personal information section {string} {string} {string} {int} {string}",
    (name, resellerId, juridicalName, msisdn,email) => {
    viewkyc.validateName(name);
    viewkyc.validateUserName(resellerId);
    viewkyc.validatMobileNumber(msisdn);
    viewkyc.validatJuridicialName(juridicalName);
    viewkyc.validateEmailId(email);
    }
  );
And("I verify all Address realted information on Address section {string} {string} {string} {string} {string} {string}",
    (adress, street, city, country,region,salesArea) => {
    viewkyc.validateAddress(adress);
    viewkyc.validateStreet(street);
    viewkyc.validateCity(city);
    viewkyc.validateCountry(country);
    // viewkyc.validateRegion(region);
    // viewkyc.validateSalesArea(salesArea);
   
    }
  );
  And("I verify all Additional information on Additional info section {string} {string} {string} {string} {string}",
    (status, enbleOTP, enablePassword, password,sccStatus,) => {
    viewkyc.validateStatus(status);
    viewkyc.validateEnbleOTP(enbleOTP);
    viewkyc.validateEnablePassword(enablePassword)
    viewkyc.validatePassword(password);
    //viewkyc.validateSCCStatus(sccStatus);
   
    }
  );