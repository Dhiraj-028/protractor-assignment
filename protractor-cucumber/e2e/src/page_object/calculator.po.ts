import { element, by } from 'protractor';

export class CalculatorPageObject {
    applicationTypeSingle() {
        return element(by.xpath("//label[contains(text(),'Single')]"))
    }

    numberOfDependant() {
        return element(by.xpath("//div[@class='borrow__question__answer borrow__question__answer--select']//select"));
    }

    propertyType() {
        return element(by.xpath("//label[contains(text(),'Home to live in')]"));
    }

    yourIncomeBeforeTax() {
        return element(by.xpath("//div[contains(@class,'container__main borrow--homeloan')]//div[2]//div[1]//div[1]//div[1]//input[1]"));
    }

    yourOtherIncome() {
        return element(by.xpath("//div[contains(@class,'container__main borrow--homeloan')]//div[2]//div[1]//div[2]//div[1]//input[1]"));
    }

    secondApplicantsIncome() {
        return element(by.xpath("//div[contains(@class,'container__main borrow--homeloan')]//div[2]//div[1]//div[3]//div[1]//input[1]"));
    }

    secondApplicantsOtherIncome() {
        return element(by.xpath("//div[contains(@class,'container__main borrow--homeloan')]//div[2]//div[1]//div[4]//div[1]//input[1]"));
    }

    yourExpense() {
        return element(by.xpath("//input[@id='expenses']"));
    }

    currentHomeLoanRepayment() {
        return element(by.xpath("//input[@id='homeloans']"));
    }

    otherLoanRepayment() {
        return element(by.xpath("//input[@id='otherloans']"));
    }

    otherCommitments() {
        return element(by.xpath("//div[3]//div[1]//div[4]//div[1]//input[1]"));
    }

    totalCredit() {
        return element(by.xpath("//input[@id='credit']"));
    }

    buttonBorrowCalculator() {
        return element(by.xpath("//button[@id='btnBorrowCalculater']"));
    }

    borrowingEstimates() {
        return element(by.xpath("//span[@id='borrowResultTextAmount']"));
    }

    buttonStartOver() {
        return element(by.xpath("//button[contains(text(),'Start over')]"));
    }

    borrowErrorText() {
        return element(by.xpath("//span[@class='borrow__error__text']"));
    }
}

export let Calculator = new CalculatorPageObject();