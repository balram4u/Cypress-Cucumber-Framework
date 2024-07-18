const REGION = "//input[@id='extraFields-region-autocomplete']";
const SALES_AREA = "//input[@id='extraFields-salesArea-autocomplete']";
const STREET = "//input[@name='street']";
const ADDRESS = "//input[@name='extraFields.addressInfo']";
const CITY = "//input[@name='city']";
const COUNTRY = "//input[@name='extraFields.country']";

class kycAddressPage{
    static typeAddress(address) {
        cy.log(`Fill in Bank pos data: ${address}`);
        if (address !== " ") {
          cy.log('address selection block');
          cy.xpath(ADDRESS).type(address).should('have.value', address);
        }
        
      }
      static typeStreet(street) {
        cy.log(`Fill in Bank pos data: ${street}`);
        if (street !== " ") {
          cy.log('street selection block');
          cy.xpath(STREET).type(street).should('have.value', street);
        }
        
      }
      static typeCity(city) {
        cy.log(`Fill in Bank pos data: ${city}`);
        if (city !== " ") {
          cy.log('city selection block');
          cy.xpath(CITY).type(city).should('have.value', city);
        }
      }
      static typeCountry(country) {
        cy.log(`Fill in Bank pos data: ${country}`);
        if (country !== " ") {
          cy.log('country selection block');
          cy.xpath(COUNTRY).type(country).should('have.value', country);
        }
      }
      static selectRegion(region) {
        cy.log(`fill in Bank-POS data: ${region}`);
        if (region !== " ") {
          cy.log('region selection block');
          cy.xpath(REGION).type(region);
          cy.contains(region).click();
        }
      }
      static selectSalesArea(salesArea) {
        cy.log(`fill in Bank-POS data: ${salesArea}`);
        if (salesArea !== " ") {
          cy.log('salesArea selection block');
          cy.xpath(SALES_AREA).type(salesArea);
          cy.contains(salesArea).click();
        }
      }

}
export default kycAddressPage;