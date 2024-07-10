
const USER_ID_FIELD = "//input[@id='userId']";
const PASSWORD_FIELD = "//input[@id='password']";
const LOGIN_BUTTON = "//span[contains(text(),'Login')]";
const NEXT_BUTTON = "//span[contains(text(),'Next')]";
class login {
    static loginWithUserPassword(username, password) {
      cy.xpath(USER_ID_FIELD).type(username);
      cy.xpath(NEXT_BUTTON).click();
      cy.xpath(PASSWORD_FIELD).type(password);
      cy.xpath(LOGIN_BUTTON).click();
    }
  
    static enterUserName(username) {
      cy.xpath(USER_ID_FIELD).type(username);
      cy.wait(10);
    }
  
    static clickOnNextButton() {
      cy.xpath(NEXT_BUTTON).click();
      cy.wait(10);
    }
  
    static enterPassword(password) {
      cy.xpath(PASSWORD_FIELD).type(password);
      cy.wait(10);
    }
  
    static clickOnLoginButton() {
      cy.xpath(LOGIN_BUTTON).click();
      cy.wait(10);
    }
  }
  export default login;