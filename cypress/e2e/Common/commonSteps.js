import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../cucumber/pages/LoginPage/LoginPage';
Given("I navigate to the login page",()=> {
    cy.log("Portal is loading");
    cy.visit("10.91.8.146");
  });

When("Login to the portal using UserName {string} and Password {string}",(userId,password)=>{
    login.loginWithUserPassword(userId,password);
      
    });

