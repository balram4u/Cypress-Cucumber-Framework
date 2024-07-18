const FIRST_NAME = "//input[@name='firstName']";
const RESELLER_ID = "//input[@name='customerId']";
const JURDICALE_NAME = "//input[@name='familyName']";
const MOBILE_NO = "//input[@name='msisdn']";
const EMAIL = "//input[@name='email']";
const ENTER_CONTRACT_ID = "//input[@id='combo-box-extraFields.contractId']";
const STATUS = "//input[@id='combo-box-status']";
const USER_SUB_TYPE = "//input[@name='additionalFields.sincId']";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
const PREVIOUS_BUTTON = "//span[contains(text(),'Previous')]";
const RESET_BUTTON = "//span[contains(text(),'Previous')]";
const SUBMIT_BUTTON = "//span[contains(text(),'Submit')]";
const UPDATE_BUTTON = "//span[contains(text(),'Update')]";
const FILTER = "//span[text()='Filters']";
const COLUMN_SELECT = "select[id=columns-filter-select]";
const OPERATOR_SELECT = "select[id=columns-operators-select]";
const FILTER_VALUE = "//input[@placeholder='Filter value']";
class kycPersonalDetails
{
    static typeResellerName(firstName) {
        cy.log(`Fill in Bank pos data: ${firstName}`);
        if (firstName !== " ") {
          cy.log('Bank pos selection block');
          cy.xpath(FIRST_NAME).type(firstName).should('have.value', firstName);
        }
      }
    
      static typeResellerId(resellerId) {
        cy.log(`Fill in Bank pos data: ${resellerId}`);
        if (resellerId !== " ") {
          cy.log('Reseller Id selection block');
          cy.xpath(RESELLER_ID).type(resellerId).should('have.value', resellerId);
        }
      }
    
      static typeMsisdnNumber(msisdn) {
        cy.log(`Fill in Bank pos data: ${msisdn}`);
        if (msisdn !== " ") {
          cy.log('msisdn selection block');
          cy.xpath(MOBILE_NO).type(msisdn).should('have.value', msisdn);
        }
      }

      static typeJuridicalName(juridicalName) {
        cy.log(`Fill in Bank pos data: ${juridicalName}`);
        if (juridicalName !== " ") {
          cy.log('juridicalName selection block');
          cy.xpath(JURDICALE_NAME).type(juridicalName).should('have.value', juridicalName);
        }
      }
      static typeEmail(email) {
        cy.log(`Fill in Bank pos data: ${email}`);
        if (email !== " ") {
          cy.log('email selection block');
          cy.xpath(EMAIL).type(email).should('have.value', email);
        }
      }
      static clickNextButton() {
        cy.log('click on Next Button');
        cy.xpath(NEXT_BUTTON).click();
      }
      
}
export default kycPersonalDetails;