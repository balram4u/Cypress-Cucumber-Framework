Feature: I want to test the login page test
Background: Pre conditions
Given I navigate to the login page
@Smoke-Test
       Scenario Outline: Verify login on the Unified Portal Application using different Resellers
              
              When I enter username '<username>'
              When I click on Next button
              When I enter password <password>
              When I Click on Login button
              Then Verify that it is showing expected succeesful message '<Message>'
              Examples:
                     | username    | password | Message               |
                     | Operator    | 2023     | Welcome to Seamless!! |
                     | Dist11      | 2023     | Welcome to Seamless!! |
                     | Sub-dist2-1 | 2023     | Welcome to Seamless!! |