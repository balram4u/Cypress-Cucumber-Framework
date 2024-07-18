import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import GroupHomePage from '../../pages/GroupPage/GroupHomePage'

And("Navigate to Group main menu",()=>{
    cy.log("Click on Group main menu")
    GroupHomePage.clickOnGroupMainMenu();
    GroupHomePage.clickOnGroupsSubMenu();
});

Then("Verify the Title of the page {string}",(title)=>{
  GroupHomePage.verifyGroupTitle(title);
    
});
