const VIEW_BUTTON = "//div[@role='group']/a[1]";
const EDIT_BUTTON = "//span[contains(text(),'Edit')]";
//Bank-POS:personal info
const VALIDATE_NAME =
  "//h6[text()='Name']/parent::div/following-sibling::div[1]";
const VALIDATE_USER_NAME =
  "//h6[text()='User Name']/parent::div/following-sibling::div[1]";
const VALIDATE_MOBILE_NUMBER =
  "//h6[text()='Mobile Number']/parent::div/following-sibling::div[1]";
const VALIDATE_EMAIL_ID =
  "//h6[text()='Email']/parent::div/following-sibling::div[1]";
const VALIDATE_JURIDICIAL_NAME =
  "//h6[text()='Juridicial Name']/parent::div/following-sibling::div[1]";

//Bank-POS:Address info
const VALIDATE_ADDRESS =
  "//h6[contains(text(),'Address')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_STREET =
  "//h6[contains(text(),'Street')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_CITY =
  "//h6[contains(text(),'City')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_COUNTRY =
  "//h6[contains(text(),'Country')]/parent::div/following-sibling::div[1]/h6";

  const VALIDATE_REGION =
  "//h6[contains(text(),'Region')]/parent::div/following-sibling::div[1]/h6";

  const VALIDATE_SALES_AREA =
  "//h6[contains(text(),'Sales Area')]/parent::div/following-sibling::div[1]/h6";
  const VALIDATE_LATTITUDE =
  "//h6[contains(text(),'Latitude')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_LONGITUDE =
  "//h6[contains(text(),'Longitude')]/parent::div/following-sibling::div[1]/h6";

  //Bank-POS:additional info
const VALIDATE_STATUS =
  "//h6[contains(text(),'Status')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_ENABLE_OTP=" //h6[contains(text(),'Enable One Time Password')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_ENABLE_PASSWORD="//h6[contains(text(),'Enable Password')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_PASSWORD="//h6[contains(text()='Password')]/parent::div/following-sibling::div[1]/h6";
const VALIDATE_SCC_STATUS="//h6[contains(text()='Scc Status')]/parent::div/following-sibling::div[1]/h6";

const KYC = "//div/p[text() = 'KYC']";
class viewkyc {

  // Personal information
  static validateName(name) {
    cy.log("validate First Name");
    cy.xpath(VALIDATE_NAME).should("have.text", name);
  }


  static validateUserName(username) {
    cy.log("validate username");
    cy.xpath(VALIDATE_USER_NAME).should("have.text", username);
  }
  static validatMobileNumber(mobileNumber) {
    cy.log("validate mobileNumber");
    cy.xpath(VALIDATE_MOBILE_NUMBER).should("have.text", mobileNumber);
  }

  static validatJuridicialName(juridicialName) {
    cy.log("validate mobileNumber");
    cy.xpath(VALIDATE_JURIDICIAL_NAME).should("have.text", juridicialName);
  }
  static validateEmailId(email) {
    cy.log("validate EMAIL ID");
    cy.xpath(VALIDATE_EMAIL_ID).should("have.text", email);
  }

// Address information

  static validateAddress(address) {
    cy.log("validate Address");
    cy.xpath(VALIDATE_ADDRESS).should("have.text", address);
  }

  static validateStreet(STREET) {
    cy.log("validate Street");
    cy.xpath(VALIDATE_STREET).should("have.text", STREET);
  }
  static validateCity(city) {
    cy.log("validate city");
    cy.xpath(VALIDATE_CITY).should("have.text", city);
  }
  static validateCountry(country) {
    cy.log("validate Country");
    cy.xpath(VALIDATE_COUNTRY).should("have.text", country);
  }

  static validateRegion(region) {
    cy.log("validate Region");
    cy.xpath(VALIDATE_REGION).should("have.text", region);
  }
  static validateSalesArea(salesArea) {
    cy.log("validate salesArea");
    cy.xpath(VALIDATE_SALES_AREA).should("have.text", salesArea);
  }

  static validateLatitude(LATTITUDE) {
    cy.log("validate Latitude");
    cy.xpath(VALIDATE_LATTITUDE).should("have.text", LATTITUDE);
  }

  static validateLongitude(LONGITUDE) {
    cy.log("validate Longitude");
    cy.xpath(VALIDATE_LONGITUDE).should("have.text", LONGITUDE);
  }

// Additiona information
static validateStatus(status) {
  cy.log("validate status");
  cy.xpath(VALIDATE_STATUS).should("have.text", status);
}

static validateEnbleOTP(enbleOTP) {
  cy.log("validate enbleOTP");
  cy.xpath(VALIDATE_ENABLE_OTP).should('be.false')  ;
}
static validateEnablePassword(enablePassword) {
  cy.log("validate enablePassword");
  cy.xpath(VALIDATE_PASSWORD).should('be.true');
}
static validatePassword(password) {
  cy.log("validate password");
  cy.xpath(VALIDATE_PASSWORD).should("have.text", password);
}
static validateSCCStatus(sccStatus) {
  cy.log("validate sccStatus");
  cy.xpath(VALIDATE_SCC_STATUS).should('be.true');
}

  static clickKYC() {
    cy.log("click on KYC");
    cy.xpath(KYC).click();
  }

  static verifyKycOptions(option) {
    cy.log("verify options");
    cy.xpath(`//div/p[text() = '${option}']`).should("be.visible");
  }

  static verifyKycOptionsNotVisible(option) {
    if (option !== "") {
      cy.log("verify options");
      cy.xpath(`//div/p[text() = '${option}']`).should("not.exist");
    }
  }
  static clickOnViewButton() {
    cy.log("click on view button");
    cy.xpath(VIEW_BUTTON).click();
  }
  static clickOnEditButton() {
    cy.log("click on edit button");
    cy.xpath(EDIT_BUTTON).click();
  }

}
export default viewkyc;
