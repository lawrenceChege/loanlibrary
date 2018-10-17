// test for loan library
/// <reference path ="../src/loanlibrary.ts" />

import {
  LENDINGFEE, LOAN, LOANTYPEONE, LOANDATA, LOANTYPETWO,
  EXITFEES, DRAWDOWN, OTHERFEES, NONUTIL, MAIN, MININTEREST
} from "../src/loanlibrary";

import * as mocha from 'mocha';
import * as chai from 'chai';
import {
  startDate, totalInterest, totalInterestCharged, totalInterestDue, totalInterestNotDue,
  totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue, TotalInterestCharged,
  TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, exitFeeGDV, exitFeeLoan, drawdownAmountTwo,
  drawdownDate, drawdownOneAmount, lendingFeeAddedToLoan, lendingFeeInterestServiced, lendingFeePercentage,
  lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
  undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, balancingInterestCharged, balancingInterestDue,
  balancingInterestOutstanding, BalanceOfLoanOutstanding, loanOneInterestComponded, loanInterestRate,
  loanOneInterestServiced, loanTwoInterestCompounded, loanTwoInterestServiced, loanType, feeCharged,
  feeDue, feePaid, feeOutstanding, otherFeesPayable, OtherFeesAddedToLoan, minimumInterestAmount,
  capitalizeLoanOnDefault, defaultAtEndOfTerm, defaultCompounded, defaultRate, dailyNonUtilizationInterest,
  dailyNonUtilizationRate, dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo,
  facilityAmount, interestServiced } from "./initialTestInputs";

// test runners
const expect = chai.expect;
const assert = chai.assert

describe('drawdown ', () => {
  let draw = new DRAWDOWN(
    startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
    lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
    undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
    loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
    defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
    dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
    facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
    BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
    totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
    TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
    exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
    feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
it('should be able to update the drawdown Amount ', () => {
  
  assert.equal(draw.getDrawdownAmount(), 2000);
});

});

// Test for lending fees
describe('lending fee', () => {
  let lend = new LENDINGFEE(
    startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
    lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
    undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
    loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
    defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
    dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
    facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
    BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
    totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
    TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
    exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
    feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
it('should be able to update the lending Amount ', () => {
  
  assert.equal(lend.getLendingFee(), 2000);
});

});

// Test for other fees
describe('other fees', () => {

  it('should be able to update the other fees Amount ', () => {
    let bal = new OTHERFEES(
      startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
      lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
      undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
      loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
      facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
      BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
      totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
      TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
      exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
      feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
    assert.equal(bal.getOtherFees(), 5000);
  });

});

// Test for balance of loan one
describe('loan one Balance', () => {

  it('should be able to update the daily interest Amount ', () => {
    let dailyInt = new LOANTYPEONE(
      startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
      lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
      undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
      loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
      facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
      BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
      totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
      TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
      exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
      feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate)
    assert.equal(dailyInt.getLoanOneBalance(), 0);
  });

});

// Test for balance of loan two
describe('loan Two Balance', () => {

  it('should be able to update the daily interest Amount ', () => {
    let dailyTwoInt = new LOANTYPETWO(
      startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
      lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
      undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
      loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
      facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
      BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
      totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
      TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
      exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
      feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
    assert.equal(dailyTwoInt.getLoanTwoBalance(), 0);
  });

});
// Test for balance of non utilization rate
describe('Non utilization Interest', () => {

  it('should be able to update the daily no utilization interest Amount ', () => {
    let nonUtil = new NONUTIL(
      startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
      lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
      undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
      loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
      facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
      BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
      totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
      TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
      exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
      feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
    assert.equal(nonUtil.getNonUtilizationInterest(), 0);
  });

});
// Test for minimum interest
describe('Minimum Interest', () => {

  it('should be able to check the balancing interest Amount ', () => {
    let balInt = new MININTEREST(
      startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
      lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
      undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
      loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
      facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
      BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
      totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
      TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
      exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
      feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
    assert.equal(balInt.getMinimumInterest(), 1500);
  });

});
// test for exit fees
describe('Exit Fees', () => {

  it('should be able to update the exit fees Amount ', () => {
    let exit = new  EXITFEES(
      startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
      lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced,
      undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, loanOneInterestComponded, loanOneInterestServiced,
      loanType, feeCharged, feeDue, OtherFeesAddedToLoan, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, otherFeesPayable,
      facilityAmount, totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount, lendingFeeInterestServiced, loanTwoInterestCompounded,
      BalanceOfLoanOutstanding, loanTwoInterestServiced, minimumInterestAmount,
      totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
      TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, feePaid,
      exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
      feeOutstanding, defaultCompounded, interestServiced,balancingInterestCharged, loanInterestRate);
    assert.equal(exit.getExitFees(), 5000);
  });

});

