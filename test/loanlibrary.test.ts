// test for loan library
/// <reference path ="../src/loanlibrary.ts" />

import {
  LENDINGFEE, LOAN, LOANTYPEONE, LOANDATA, LOANTYPETWO,
  EXITFEES, DRAWDOWN, OTHERFEES, NONUTIL, MAIN, MININTEREST
} from "../src/loanlibrary";

import * as mocha from 'mocha';
import * as chai from 'chai';
import {startDate, repaymentDate, drawdownDate, dailyOneInterest,
  dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
  loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
  balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
  nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
  nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
  loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
  totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
  totalInterest, balancingInterestCharged, balancingInterestDue,
  balancingInterestOutstanding, lendingFees, lendingFeePercentage,
  lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
  OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
  exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
  loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
  GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
  BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
  defaultAtEndOfTerm, defaultCompounded, defaultRate } from "./initialTestInputs";

// test runners
const expect = chai.expect;
const assert = chai.assert;



describe('drawdown ', () => {
  let draw = new DRAWDOWN(startDate, repaymentDate, drawdownDate, dailyOneInterest,
    dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
    loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
    balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
    nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
    nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
    loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
    totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
    totalInterest, balancingInterestCharged, balancingInterestDue,
    balancingInterestOutstanding, lendingFees, lendingFeePercentage,
    lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
    OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
    exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
    loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
    GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
    BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
    defaultAtEndOfTerm, defaultCompounded, defaultRate);
it('should be able to update the drawdown Amount ', function () {
  let output = draw.getDrawdownAmount(undrawnBalance, facilityAmount, loanType, balanceOfLoanOne);
  assert.equal(output, 50000);
});

});

// Test for lending fees
describe('lending fee', function () {
  let lend = new LENDINGFEE(startDate, repaymentDate, drawdownDate, dailyOneInterest,
    dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
    loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
    balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
    nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
    nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
    loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
    totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
    totalInterest, balancingInterestCharged, balancingInterestDue,
    balancingInterestOutstanding, lendingFees, lendingFeePercentage,
    lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
    OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
    exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
    loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
    GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
    BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
    defaultAtEndOfTerm, defaultCompounded, defaultRate);
it('should be able to update the lending Amount ', () => {
  let outlend = lend.getLendingFee()
  assert.equal(outlend, 2000);
});

});

// Test for other fees
describe('other fees', () => {

  it('should be able to update the other fees Amount ', () => {
    let bal = new OTHERFEES(startDate, repaymentDate, drawdownDate, dailyOneInterest,
      dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
      loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
      balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
      nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
      loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
      totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
      totalInterest, balancingInterestCharged, balancingInterestDue,
      balancingInterestOutstanding, lendingFees, lendingFeePercentage,
      lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
      OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
      exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
      loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
      GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
      BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultCompounded, defaultRate);

    let outbal = bal.getOtherFees()
    assert.equal(outbal, 5000);
  });

});

// Test for balance of loan one
describe('loan one Balance', () => {

  it('should be able to update the daily interest Amount ', () => {
    let dailyInt = new LOANTYPEONE(startDate, repaymentDate, drawdownDate, dailyOneInterest,
      dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
      loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
      balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
      nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
      nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
      loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
      totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
      totalInterest, balancingInterestCharged, balancingInterestDue,
      balancingInterestOutstanding, lendingFees, lendingFeePercentage,
      lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
      OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
      exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
      loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
      GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
      BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
      defaultAtEndOfTerm, defaultCompounded, defaultRate);

    let outDInt = dailyInt.getLoanOneBalance()
    assert.equal(outDInt, 0);
  });

});

// // Test for balance of loan two
// describe('loan Two Balance', () => {

//   it('should be able to update the daily interest Amount ', () => {
//     let dailyTwoInt = new LOANTYPETWO(startDate, repaymentDate, drawdownDate, dailyOneInterest,
//       dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
//       loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
//       balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
//       nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
//       nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
//       loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
//       totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
//       totalInterest, balancingInterestCharged, balancingInterestDue,
//       balancingInterestOutstanding, lendingFees, lendingFeePercentage,
//       lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
//       OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
//       exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
//       loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
//       GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
//       BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
//       defaultAtEndOfTerm, defaultCompounded, defaultRate);
//     let outDInt2 = dailyTwoInt.getLoanTwoBalance()
//     assert.equal(outDInt2["Daily loan Two Interesrt"], 0);
//   });

// });
// // Test for balance of non utilization rate
// describe('Non utilization Interest', () => {

//   it('should be able to update the daily no utilization interest Amount ', () => {
//     let nonUtil = new NONUTIL(startDate, repaymentDate, drawdownDate, dailyOneInterest,
//       dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
//       loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
//       balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
//       nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
//       nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
//       loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
//       totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
//       totalInterest, balancingInterestCharged, balancingInterestDue,
//       balancingInterestOutstanding, lendingFees, lendingFeePercentage,
//       lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
//       OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
//       exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
//       loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
//       GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
//       BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
//       defaultAtEndOfTerm, defaultCompounded, defaultRate);
//     let outnon = nonUtil.getNonUtilizationInterest()
//     assert.equal(outnon["Daily non utilization Interest"], 0);
//   });

// });
// // Test for minimum interest
// describe('Minimum Interest', () => {

//   it('should be able to check the balancing interest Amount ', () => {
//     let balInt = new MININTEREST(startDate, repaymentDate, drawdownDate, dailyOneInterest,
//       dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
//       loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
//       balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
//       nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
//       nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
//       loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
//       totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
//       totalInterest, balancingInterestCharged, balancingInterestDue,
//       balancingInterestOutstanding, lendingFees, lendingFeePercentage,
//       lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
//       OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
//       exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
//       loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
//       GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
//       BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
//       defaultAtEndOfTerm, defaultCompounded, defaultRate);

//     let outbalInt = balInt.getMinimumInterest()
//     assert.equal(outbalInt[" Balancing Interest Charged"], 1500);
//   });

// });
// // test for exit fees
// describe('Exit Fees', () => {

//   it('should be able to update the exit fees Amount ', () => {
//     let exit = new  EXITFEES(startDate, repaymentDate, drawdownDate, dailyOneInterest,
//       dailyRateOfLoanOne, balanceOfLoanOne, loanOneInterestServiced,
//       loanOneInterestComponded, dailyTwoInterest, dailyRateOfLoanTwo,
//       balanceOfLoanTwo, loanTwoInterestServiced, loanTwoInterestCompounded,
//       nonUtilizationInterestAmount, dailyNonUtilizationInterest, dailyNonUtilizationRate,
//       nonUtilizationInterestServiced, nonUtilizationInterestCompounded, interestServiced,
//       loanInterestRate, minimumInterestAmount, totalInterestDue, totalInterestPaid,
//       totalInterestCharged, totalInterestNotDue, totalInterestOutstanding,
//       totalInterest, balancingInterestCharged, balancingInterestDue,
//       balancingInterestOutstanding, lendingFees, lendingFeePercentage,
//       lendingFeeAddedToLoan, lendingFeeInterestServiced, otherFeesPayable,
//       OtherFeesAddedToLoan, feeCharged, feeDue, feePaid, feeOutstanding,
//       exitFeeAmount, exitFeeGDV, exitFeeLoan, facilityAmount,
//       loanType, drawdownOneAmount, drawdownAmountTwo, undrawnBalance,
//       GDV, TotalInterestCharged, TotalInterestDue, TotalFeesDue,
//       BalanceOfLoanOutstanding, TotalRedemptionAmount, capitalizeLoanOnDefault,
//       defaultAtEndOfTerm, defaultCompounded, defaultRate);
//     let outexit = exit.getExitFees()
//     assert.equal(outexit[" Due Fees"], 5000);
//   });

// });

