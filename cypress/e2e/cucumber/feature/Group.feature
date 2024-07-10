@Group-Test @Regression
Feature:Validate search a Group by Name
Background: Pre conditions
  Given I navigate to the login page 

Scenario Outline: Verify that Groups homepage is present 
When Login to the portal using UserName '<UserName>' and Password <Password>
When Navigate to Group main menu
Then Verify the Title of the page '<title>'
Examples:
    | UserName | Password | title    |
    | Operator | 2023   |Manage groups|

Scenario Outline: Verify that Create ,view, edit and delete button is present in Groups homepage is present 
When Login to the portal using UserName '<UserName>' and Password <Password>
When Navigate to Group main menu
Then Verify the Title of the page '<title>'
Examples:
    | UserName | Password | title    |
    | Operator | 2023   |Manage groups|
