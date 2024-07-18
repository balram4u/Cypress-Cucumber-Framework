const PASSWORD_FIELD = "//input[@name='extraFields.motte_de_passe']";
const SUBMIT = "//span[contains(text(),'Submit')]";
const STATUS = "//input[@id='combo-box-status']";
const ENABLE_PASSWORD="//input[@id='extraFields-motte_de_passe_flag-autocomplete']";
const ENABLE_ONE_TIME_PASSWORD = "//input[@id='extraFields-one_time_password-autocomplete']";
const SCC_STATUS="//input[@id='sccStatus-autocomplete' and @value = '${scc_Status}";
const MESSAGE_ALERT = '//div[@id="notistack-snackbar"]';
class kycAddtionalpage{

    static selectStatus(status) {
        cy.log(`Fill in Bank POS data: ${status}`);
        if (status !== " ") {
          cy.log('status selection block');
          cy.xpath(STATUS).click();
        }
      }

      static selectEnablePassword(enablePassword) {
        cy.log(`Fill in Bank POS data: ${enablePassword}`);
        if (enablePassword !== " ") {
          cy.log('enablePassword selection block');
          cy.xpath(ENABLE_PASSWORD).click();
        }
      }
      static selectSccStatus(scc_Status) {
        if (scc_Status !== "") {
          cy.log('status scc status');
                    cy.xpath(SCC_STATUS).click();
        }
      }  
      static enterPassword(pwd) {
      cy.log(`Fill in Bank POS data: ${pwd}`);
        if (pwd !== "") {
          cy.xpath(PASSWORD_FIELD).type(pwd);
        }
      }
      static clikcSubmitButton() {
        cy.log('click on submit button');
        cy.xpath(SUBMIT).click();
      }
      static enableOneTimePassword(oneTimePassword) {
        cy.log(`select enable one time password: ${oneTimePassword}`);
        if (oneTimePassword !== " ") {
          cy.xpath(ENABLE_ONE_TIME_PASSWORD).type(oneTimePassword);
          cy.contains(oneTimePassword).click();
        }
      }
      static validateMessage(message) {
        // cy.log('validating message', message);
        cy.xpath(MESSAGE_ALERT).then((alert) => {
          const text = alert.text();
          expect(text).to.contains(message);
        });
}
}
export default kycAddtionalpage;