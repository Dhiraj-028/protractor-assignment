import {browser, ExpectedConditions} from 'protractor';
import {Given, When, Then} from 'cucumber';
import {setDefaultTimeout} from 'cucumber';
import {Calculator} from '../page_object/calculator.po';
setDefaultTimeout(60 * 1000);

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given('User go on {string}', function(url: string) {
  browser.driver.manage().deleteAllCookies();
  return browser.get(url);
});

Then('user clicks application Type Single', function(){
  Calculator.applicationTypeSingle().click();
});

Then('user enters number of dependant {string}', function(number: string){
  Calculator.applicationTypeSingle().sendKeys(number);
});

Then('user selects buying a home live in', function(){
  Calculator.propertyType().click();
});

Then('user enters his imcome before tax {string}', function(number: string){
  Calculator.yourIncomeBeforeTax().sendKeys(number);
});

Then('user enters his other imcome {string}', function(number: string){
  Calculator.yourOtherIncome().sendKeys(number);
});

Then('user enters second applicants imcome {string}', function(number: string){
  Calculator.secondApplicantsIncome().sendKeys(number);
});

Then('user enters second applicants other imcome {string}', function(number: string){
  Calculator.secondApplicantsOtherIncome().sendKeys(number);
});

Then('user enters his expense {string}', function(number: string){
  Calculator.yourExpense().sendKeys(number);
});

Then('user enters current home loan repayment {string}', function(number: string){
  Calculator.currentHomeLoanRepayment().sendKeys(number);
});

Then('user enters other loan repayment {string}', function(number: string){
  Calculator.otherLoanRepayment().sendKeys(number);
});

Then('user enters other commitments {string}', function(number: string){
  Calculator.otherCommitments().sendKeys(number);
});

Then('user enter total credit card limit {string}', function(number: string){
  Calculator.totalCredit().sendKeys(number);
});

Then('user clicks borrow calculator', function(){
  Calculator.buttonBorrowCalculator().click();
  browser.sleep(5000);
});

Then ('verify estimated expense {string}', function(number: string){
  Calculator.borrowingEstimates().getText().then(function(estimatedExpense){
    expect(estimatedExpense).to.equal('488,000')
  });
});

When ('user clicks start over button', function(){
  Calculator.buttonStartOver().click();
});  

Then ('verify your Income Before Tax', function(){
  Calculator.yourIncomeBeforeTax().getAttribute('value').then(function(estimatedExpense){
    expect(estimatedExpense).to.equal('0');
  }); 
});

Then ('verify borrow error text', function() {
  Calculator.borrowErrorText().getText().then(function(errorText){
expect(errorText).to.equal("Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500.")
  })
})