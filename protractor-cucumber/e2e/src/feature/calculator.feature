Feature: Calculator Estimator 

  Scenario: Verify Estimated expense
    Given User go on "https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/"
    Then user clicks application Type Single
    And user enters number of dependant '0'
    And user selects buying a home live in
    And user enters his imcome before tax '80000'
    And user enters his other imcome '10000'
    And user enters his expense '500'
    And user enters current home loan repayment '0'
    And user enters other loan repayment '100'
    And user enters other commitments '0'
    And user enter total credit card limit '10000'
    When user clicks borrow calculator
    Then verify estimated expense '488,000'
