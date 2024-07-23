Feature:  Only Operator can Register Bank-PoS type of Resellers
Background: Pre conditions
Given I navigate to the login page
# And Navigate to KYC main menu
# Then Verify the Title of the page '<title>'
# And I select reseller type '<RESELLER_TYPE>'
# When I enter personal information for Bank POS '<RESELLER_NAME>' '<RESELLER_ID>' '<JURDICALE_NAME>' <MOBILE_NO> '<EMAIL>'
# And Click on Next page
# When I enter address information for Bank POS '<ADDRESS>' '<STREET>' '<CITY>' '<COUNTRY>' '<REGION>' '<SALES_AREA>' 
# And Click on Next page
# When I enter additional information for standard and click next button '<STATUS>' '<ENABLE_OTP>' '<ENABLE_PASSWORD>' '<PASSWORD>' '<SCC_STATUS>'
# And Click on Submit button
# Then I am able to validate proper message '<MESSAGE>'

# Examples:
#     | UserName | Password | title |RESELLER_TYPE|RESELLER_NAME|RESELLER_ID|JURDICALE_NAME|MOBILE_NO |EMAIL         |ADDRESS|STREET|CITY|COUNTRY|REGION          |SALES_AREA|STATUS|ENABLE_OTP|PASSWORD|SCC_STATUS|MESSAGE|
#     | Operator | 2023   |kyc      |Bank-PoS     |Bank-20      |Bank-20    |Bank-20     |467003783333|test@gmail.com|address|street|city|India|Stockholm County  |Farsta    |Active|    No     |2023|Active|Reseller created successfully|

Scenario Outline: Verify that view page has same data as it was while creating a Reseller
    When Login to the portal using UserName <USER_NAME> and Password <PASSWORD> 
    And I navigate to the Search KYC page
    And I select search key <SEARCH_KEY>
    And I enter search value <SEARCH_VALUE>
    And I click search button
    Then I verify reseller status in table <COLUMN_VALUE> <RESELLER_STATUS>
    And I click on view button
    Then I verify view page should have same data in Personal information section <RESELLER_NAME> <RESELLER_ID> <JURDICALE_NAME> <MOBILE_NO> <EMAIL>
    And I verify all Address realted information on Address section <ADDRESS> <STREET> <CITY> <COUNTRY> <REGION> <SALES_AREA>
    And I verify all Additional information on Additional info section <STATUS> <ENABLE_OTP> <ENABLE_PASSWORD> <PASSWORD> <SCC_STATUS>

  Examples:
    | USER_NAME | PASSWORD | title |RESELLER_TYPE|RESELLER_NAME|RESELLER_ID|JURDICALE_NAME|MOBILE_NO |EMAIL         |ADDRESS|STREET|CITY|COUNTRY                  |REGION                |SALES_AREA|STATUS   |ENABLE_OTP|ENABLE_PASSWORD|PASSWORD|SCC_STATUS|MESSAGE                       |SEARCH_KEY |SEARCH_VALUE|COLUMN_VALUE|RESELLER_STATUS|
    | "Operator" | "2023"   |"kyc"      |"Bank-PoS"     |"Bank-20"      |"Bank-20"    |"Bank-20"     |467003783333|"test@gmail.com"|"address"|"street"|"city"|"India"|"Stockholm County"|"Farsta"    |"Active"|    "false"     |"true"          |"2023"     |"Active"    |"Reseller created successfully"|"Customer ID"|"Bank-20"     |"Kyc Status"  |"APPROVED"       |

    
    