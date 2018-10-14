// test for loan library
/// <reference path ="../src/loanlibrary.ts" />

import {drawdownAmount, lendingFee, otherFees, loanOneBalance, loanTwoBalance, nonUtilizationInterest,minimumInterest, exitFees} from "../src/loanlibrary";

import * as mocha from 'mocha';
import * as chai from 'chai';

// test runners
const expect = chai.expect;
const assert = chai.assert

let startDate: String = "2-Oct-2018"
let repaymentDate: String = "1-Dec-2018"
let drawdownDate: any = ["5-Oct-2018", "8-Nov-2018", "10-Nov-2018"]

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
let x : number = 3
let y : number = 4
let z : number = 0
let w: number = 0
let q: any ={}
// function outputs
let drawdownOutput:any = {}
let lendingOutput: any = {}
let otherOutput: any = {}
let minimumOutput: any = {}
let loanOneOutput: any = {}
let loanTwoOutput: any = {}
let nonUtilOutput: any = {}
let exitOutput: any = {}





// // Test for drawdown Amount
// describe('draw down amount', () => {

//   it('should be able to update the draw down amount ', () => {
//     drawdownOutput = drawdownAmount(facilityAmount, undrawnBalance, drawdownOneAmount);
//     assert.equal(drawdownOutput.drawdownOneAmount, 50000);
//   });

// });

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
// // test for total interest charged after daily interest for loan one is added
// describe('loan one Balance', () => {

//   it('should be able to update the total interest charged Amount ', () => {
//     loanOneBalance();
//     assert.equal(totalInterestCharged, 2000);
//   });

// });

// // Test for balance of loan one after daily interest is added
// describe('loan one Balance', () => {

//   it('should be able to update the balance of loan one Amount ', () => {
//     loanOneBalance();
//     assert.equal(balanceOfLoanOne, 2000);
//   });

// });

// // Test for balance of loan two
// describe('loan Two Balance', () => {

//   it('should be able to update the daily interest Amount ', () => {
//     loanTwoBalance();
//     assert.equal(dailyTwoInterest, 2000);
//   });

// });
// // test for total interest charged after daily interest for loan two is added
// describe('loan Two Balance', () => {

//   it('should be able to update the total interest charged Amount ', () => {
//     loanTwoBalance();
//     assert.equal(totalInterestCharged, 2000);
//   });

// });

// // Test for balance of loan two after daily interest is added
// describe('loan Two Balance', () => {

//   it('should be able to update the balance of loan two Amount ', () => {
//     loanTwoBalance();
//     assert.equal(balanceOfLoanTwo, 2000);
//   });

// });

// // Test for balance of non utilization rate
// describe('Non utilization Interest', () => {

//   it('should be able to update the daily no utilization interest Amount ', () => {
//     nonUtilizationInterest();
//     assert.equal(dailyNonUtilizationInterest, 2000);
//   });

// });
// // test for total interest charged after daily non utilization interestis added
// describe('Non utilization Interest', () => {

//   it('should be able to update the total interest charged Amount ', () => {
//     nonUtilizationInterest();
//     assert.equal(totalInterestCharged, 2000);
//   });

// });

// // Test for balance of loan one after daily non utilization interest is added
// describe(' Non utilization Interest', () => {

//   it('should be able to update the balance of loan one Amount ', () => {
//     nonUtilizationInterest();
//     assert.equal(balanceOfLoanOne, 2000);
//   });

// });

// // Test for minimum interest
// describe('Minimum Interest', () => {

//   it('should be able to check the balancing interest Amount ', () => {
//     minimumInterest();
//     assert.equal(balancingInterestCharged, 2000);
//   });

// });
// // test for exit fees
// describe('Exit Fees', () => {

//   it('should be able to update the exit fees Amount ', () => {
//     exitFees();
//     assert.equal(exitFeeAmount, 2000);
//   });

// });

// // Test for balance of fee due after exit fee amount is added
// describe(' Exit Fees', () => {

//   it('should be able to update the fee due Amount ', () => {
//     exitFees();
//     assert.equal(feeDue, 2000);
//   });

// });