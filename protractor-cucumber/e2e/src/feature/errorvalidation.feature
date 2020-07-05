Feature: Calculator Estimator Error

Scenario: Verify Estimated expense
    Given User go on "https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/"
    Then user clicks application Type Single
    And user enters number of dependant '0'
    And user selects buying a home live in
    And user enters his imcome before tax '0'
    And user enters his other imcome '0'
    And user enters his expense '1'
    And user enters current home loan repayment '0'
    And user enters other loan repayment '0'
    And user enters other commitments '0'
    And user enter total credit card limit '0'
    When user clicks borrow calculator
    Then verify borrow error text    