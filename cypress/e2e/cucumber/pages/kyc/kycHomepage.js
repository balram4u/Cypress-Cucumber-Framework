const KYC_MENU = "//p[text()='KYC']";
const REGISTER_KYC_SUBMENU = "//p[text()='REGISTER']";
const RESELLER_TYPE = "//select[@id='reseller-type-dropdown']";
class kyc{
    static clickOnKycMainMenu() {
        cy.log('Click on KYC main menu ');
        cy.xpath(KYC_MENU).should('be.visible');
        cy.xpath(KYC_MENU).click();
        cy.wait(1000);
      }

      static clickOnRegisterSubMenu() {
        cy.log('Open KYC register page');
        cy.xpath(REGISTER_KYC_SUBMENU).click();
      }

      static verifyKycTitle(title) {
        cy.log('Verifying KYC homepage title');
        cy.log("The title is " +title)
        cy.url().should('include',title)
      }
      static selectTypeOfReseller(resellerType) {
        cy.log('Select type of reseller');
        cy.get('#reseller-type-dropdown').select(resellerType);
        
  
      }
      
      

}
export default kyc;