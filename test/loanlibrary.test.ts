// test for loan library
/// <reference path ="../src/loanlibrary.ts" />

import {drawdownAmount, lendingFee, otherFees, loanOneBalance, loanTwoBalance, nonUtilizationInterest,minimumInterest, exitFees} from "../src/loanlibrary";

import * as mocha from 'mocha';
import * as chai from 'chai';

// test runners
const expect = chai.expect;
const assert = chai.assert









// Test for lending fees
describe('lending fee', () => {

  it('should be able to update the lending Amount ', () => {
    let lend = lendingFee(lendingFeeInterestServiced, lendingFeeAddedToLoan, feeDue, feePaid, loanInterestRate,
      facilityAmount, lendingFees, lendingFeePercentage, balanceOfLoanOne, feeOutstanding);
    assert.equal(lend, 2000);
  });

});

// Test for other fees
describe('other fees', () => {

  it('should be able to update the other fees Amount ', () => {
    let bal = otherFees(OtherFeesAddedToLoan,feeDue, balanceOfLoanOne, feeCharged, feeOutstanding, feePaid, otherFeesPayable);
    assert.equal(bal, 5000);
  });

});

// Test for balance of loan one
describe('loan one Balance', () => {

  it('should be able to update the daily interest Amount ', () => {
    let dailyInt =loanOneBalance(loanOneInterestServiced, loanOneInterestComponded,
      balanceOfLoanOne, dailyRateOfLoanOne, totalInterestCharged,
      totalInterestDue, totalInterestPaid, totalInterestNotDue);
    assert.equal(dailyInt, 0);
  });

});

// Test for balance of loan two
describe('loan Two Balance', () => {

  it('should be able to update the daily interest Amount ', () => {
    let dailyTwoInt = loanTwoBalance(loanTwoInterestServiced, loanTwoInterestCompounded,
      balanceOfLoanTwo, dailyRateOfLoanTwo, totalInterestCharged,
      totalInterestDue, totalInterestPaid, totalInterestNotDue);
    assert.equal(dailyTwoInt, 0);
  });

});
// Test for balance of non utilization rate
describe('Non utilization Interest', () => {

  it('should be able to update the daily no utilization interest Amount ', () => {
    let nonUtil = nonUtilizationInterest(nonUtilizationInterestServiced, nonUtilizationInterestCompounded,
      dailyNonUtilizationRate, totalInterestCharged,
     balanceOfLoanOne,undrawnBalance,
     totalInterestDue, totalInterestPaid, totalInterestNotDue);
    assert.equal(nonUtil, 0);
  });

});
// Test for minimum interest
describe('Minimum Interest', () => {

  it('should be able to check the balancing interest Amount ', () => {
    let balInt = minimumInterest(totalInterestCharged, minimumInterestAmount,
      balancingInterestCharged, balancingInterestDue, balancingInterestOutstanding);
    assert.equal(balInt, 1500);
  });

});
// test for exit fees
describe('Exit Fees', () => {

  it('should be able to update the exit fees Amount ', () => {
    let exit = exitFees(exitFeeAmount, feeDue,
      feeOutstanding, exitFeeGDV,  GDV,
      exitFeeLoan, facilityAmount, totalInterestCharged);
    assert.equal(exit, 5000);
  });

});

