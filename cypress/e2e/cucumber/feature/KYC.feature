Feature:  Only Operator can Register Bank-PoS type of Resellers
Background: Pre conditions
Given I navigate to the login page
Scenario Outline: Verify that Groups feature
When Login to the portal using UserName '<UserName>' and Password <Password>
And Navigate to KYC main menu
Then Verify the Title of the page '<title>'
And I select reseller type '<RESELLER_TYPE>'
When I enter personal information for Bank POS '<RESELLER_NAME>' '<RESELLER_ID>' '<JURDICALE_NAME>' <MOBILE_NO> '<EMAIL>'
And Click on Next page
When I enter address information for Bank POS '<ADDRESS>' '<STREET>' '<CITY>' '<COUNTRY>' '<REGION>' '<SALES_AREA>' 
And Click on Next page
When I enter additional information for standard and click next button '<STATUS>' '<ENABLE_OTP>' '<ENABLE_PASSWORD>' '<PASSWORD>' '<SCC_STATUS>'
And Click on Submit button
Then I am able to validate proper message '<MESSAGE>'

Examples:
    | UserName | Password | title |RESELLER_TYPE|RESELLER_NAME|RESELLER_ID|JURDICALE_NAME|MOBILE_NO |EMAIL         |ADDRESS|STREET|CITY|COUNTRY|REGION          |SALES_AREA|STATUS|ENABLE_OTP|PASSWORD|SCC_STATUS|MESSAGE|
    | Operator | 2023   |kyc      |Bank-PoS     |Bank-20      |Bank-20    |Bank-20     |467003783333|test@gmail.com|address|street|city|India|Stockholm County  |Farsta    |Active|    No     |2023|Active|Reseller created successfully|


    
    