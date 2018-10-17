// test for loan library
/// <reference path ="../src/loanlibrary.ts" />

import {
  LENDINGFEE, LOAN, LOANTYPEONE, LOANDATA, LOANTYPETWO,
  EXITFEES, DRAWDOWN, OTHERFEES, NONUTIL, MAIN, MININTEREST
} from "../src/loanlibrary";

import * as mocha from 'mocha';
import * as chai from 'chai';
import { startDate, totalInterest, totalInterestCharged, totalInterestDue, totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue, TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount, exitFeeGDV, exitFeeLoan, drawdownAmountTwo, drawdownDate, drawdownOneAmount, lendingFeeAddedToLoan, lendingFeeInterestServiced, lendingFeePercentage, lendingFees, nonUtilizationInterestAmount, nonUtilizationInterestCompounded, nonUtilizationInterestServiced, undrawnBalance, balanceOfLoanOne, balanceOfLoanTwo, balancingInterestCharged, balancingInterestDue, balancingInterestOutstanding, BalanceOfLoanOutstanding, loanOneInterestComponded, loanInterestRate, loanOneInterestServiced, loanTwoInterestCompounded, loanTwoInterestServiced, loanType, feeCharged, feeDue, feePaid, feeOutstanding, otherFeesPayable, OtherFeesAddedToLoan, minimumInterestAmount, capitalizeLoanOnDefault, defaultAtEndOfTerm, defaultCompounded, defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate, dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo, facilityAmount, interestServiced } from "./initialTestInputs";

// test runners
const expect = chai.expect;
const assert = chai.assert



// Test for lending fees
describe('lending fee', () => {
  let startDate: String = "2-Oct-2018"
  let repaymentDate: String = "1-Dec-2018"
  let drawdownDate: String = "10-Nov-2018"

  // loan type one variables
  let dailyOneInterest: number = 0
  let dailyRateOfLoanOne: number = 0.03
  let balanceOfLoanOne: number = 0
  let loanOneInterestServiced: String = "no"
  let loanOneInterestComponded: String = "yes"

  // loan type two variables
  let dailyTwoInterest: number = 1
  let dailyRateOfLoanTwo: number = 0.03
  let balanceOfLoanTwo: number = 0
  let loanTwoInterestServiced: String = "yes"
  let loanTwoInterestCompounded: String = "no"

  // non utilization rate variables
  let nonUtilizationInterestAmount: number = 0
  let dailyNonUtilizationInterest: number = 0
  let dailyNonUtilizationRate: number = 0.07
  let nonUtilizationInterestServiced: String = ""
  let nonUtilizationInterestCompounded: String = "yes"

  // default
  let defaultRate: number = 2
  let defaultCompounded: string = "yes"
  let capitalizeLoanOnDefault: string = "yes"
  let defaultAtEndOfTerm: string = "yes"

  // interest variables
  let interestServiced: String = "no"
  let loanInterestRate: number = 1
  let minimumInterestAmount: number = 1500

  let totalInterestDue: number = 0
  let totalInterestPaid: number = 0
  let totalInterestCharged: number = 0
  let totalInterestNotDue: number = 0
  let totalInterestOutstanding: number = 0
  let totalInterest: number = 0

  let balancingInterestCharged: number = 0
  let balancingInterestDue: number = 0
  let balancingInterestOutstanding: number = 0

  // fees variables
  let lendingFees: number = 0
  let lendingFeePercentage: number = 2
  let lendingFeeAddedToLoan: String = "yes"
  let lendingFeeInterestServiced: String = "yes"

  let otherFeesPayable: number = 5000
  let OtherFeesAddedToLoan: String = "yes"

  let feeCharged: number = 0
  let feeDue: number = 0
  let feePaid: number = 0
  let feeOutstanding: number = 0

  // exit fee variables
  let exitFeeAmount: number = 0
  let exitFeeGDV: number = 2
  let exitFeeLoan: number = 0

  // general loan variables
  let facilityAmount: number = 100000
  let totalLoan: number = 0
  let loanType: number = 1
  let drawdownOneAmount: number = 50000
  let drawdownAmountTwo: any = 25000
  let undrawnBalance: number = 0
  let GDV: number = 250000
  let TotalInterestCharged: number = 0
  let TotalInterestDue: number = 0
  let TotalFeesDue: number = 0
  let BalanceOfLoanOutstanding: number = 0
  let TotalRedemptionAmount: number = 0

});
beforeEach(() => {
  let lend = new LENDINGFEE(startDate, drawdownDate, lendingFeeAddedToLoan, lendingFeePercentage,
     lendingFees, nonUtilizationInterestAmount,
    nonUtilizationInterestCompounded, nonUtilizationInterestServiced, undrawnBalance, balanceOfLoanOne,
    balanceOfLoanTwo,loanOneInterestComponded,  loanOneInterestServiced, loanType, feeCharged, feeDue, 
     OtherFeesAddedToLoan, capitalizeLoanOnDefault,
    defaultAtEndOfTerm,  defaultRate, dailyNonUtilizationInterest, dailyNonUtilizationRate,
    dailyOneInterest, dailyTwoInterest, dailyRateOfLoanOne, dailyRateOfLoanTwo,
     facilityAmount,totalInterestCharged, totalInterestDue, totalInterest, drawdownOneAmount,
     balancingInterestCharged,  lendingFeeInterestServiced,  loanTwoInterestCompounded,
    BalanceOfLoanOutstanding,  otherFeesPayable,loanInterestRate,
    loanTwoInterestServiced, minimumInterestAmount,defaultCompounded, interestServiced, 
    totalInterestNotDue, totalInterestOutstanding, totalInterestPaid, totalLoan, TotalFeesDue,
    TotalInterestCharged, TotalInterestDue, TotalRedemptionAmount, GDV, exitFeeAmount,feePaid,
    exitFeeGDV, exitFeeLoan, drawdownAmountTwo, balancingInterestDue, balancingInterestOutstanding,
    feeOutstanding,);
});

it('should be able to update the lending Amount ', () => {
  let lend = lendingFee(LOAN);
  assert.equal(lend, 2000);
});

});

// // Test for other fees
// describe('other fees', () => {

//   it('should be able to update the other fees Amount ', () => {
//     let bal = otherFees(OtherFeesAddedToLoan,feeDue, balanceOfLoanOne, feeCharged, feeOutstanding, feePaid, otherFeesPayable);
//     assert.equal(bal, 5000);
//   });

// });

// // Test for balance of loan one
// describe('loan one Balance', () => {

//   it('should be able to update the daily interest Amount ', () => {
//     let dailyInt =loanOneBalance(loanOneInterestServiced, loanOneInterestComponded,
//       balanceOfLoanOne, dailyRateOfLoanOne, totalInterestCharged,
//       totalInterestDue, totalInterestPaid, totalInterestNotDue);
//     assert.equal(dailyInt, 0);
//   });

// });

// // Test for balance of loan two
// describe('loan Two Balance', () => {

//   it('should be able to update the daily interest Amount ', () => {
//     let dailyTwoInt = loanTwoBalance(loanTwoInterestServiced, loanTwoInterestCompounded,
//       balanceOfLoanTwo, dailyRateOfLoanTwo, totalInterestCharged,
//       totalInterestDue, totalInterestPaid, totalInterestNotDue);
//     assert.equal(dailyTwoInt, 0);
//   });

// });
// // Test for balance of non utilization rate
// describe('Non utilization Interest', () => {

//   it('should be able to update the daily no utilization interest Amount ', () => {
//     let nonUtil = nonUtilizationInterest(nonUtilizationInterestServiced, nonUtilizationInterestCompounded,
//       dailyNonUtilizationRate, totalInterestCharged,
//      balanceOfLoanOne,undrawnBalance,
//      totalInterestDue, totalInterestPaid, totalInterestNotDue);
//     assert.equal(nonUtil, 0);
//   });

// });
// // Test for minimum interest
// describe('Minimum Interest', () => {

//   it('should be able to check the balancing interest Amount ', () => {
//     let balInt = minimumInterest(totalInterestCharged, minimumInterestAmount,
//       balancingInterestCharged, balancingInterestDue, balancingInterestOutstanding);
//     assert.equal(balInt, 1500);
//   });

// });
// // test for exit fees
// describe('Exit Fees', () => {

//   it('should be able to update the exit fees Amount ', () => {
//     let exit = exitFees(exitFeeAmount, feeDue,
//       feeOutstanding, exitFeeGDV,  GDV,
//       exitFeeLoan, facilityAmount, totalInterestCharged);
//     assert.equal(exit, 5000);
//   });

// });

