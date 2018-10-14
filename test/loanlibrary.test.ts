// import DummyClass from '../src/loanlibrary'

/**
 * Dummy test
 */
// describe('Dummy test', () => {
//   it('works if true is truthy', () => {
//     expect(true).toBeTruthy()
//   })

//   it('DummyClass is instantiable', () => {
//     expect(new DummyClass()).toBeInstanceOf(DummyClass)
//   })
// })

import {drawdownAmount, lendingFee, otherFees, loanOneBalance, loanTwoBalance, nonUtilizationInterest,minimumInterest, exitFees} from "../src/loanlibrary";

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

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
let facilityAmount: number = 10000
let totalLoan: number = 0
let loanType: number = 1
let drawdownOneAmount: number = 50000
let drawdownAmountTwo: any = [25000, 25000]
let undrawnBalance: number = 0
let GDV: number = 250000
let TotalInterestCharged: number = 0
let TotalInterestDue: number = 0
let TotalFeesDue: number = 0
let BalanceOfLoanOutstanding: number = 0
let TotalRedemptionAmount: number = 0

describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(drawdownAmount()).to.equal(7);
  });

});

describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(lendingFee()).to.equal(7);
  });

});

describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(otherFees()).to.equal(7);
  });

});
describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(loanOneBalance()).to.equal(7);
  });

});

describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(loanTwoBalance()).to.equal(7);
  });

});

describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(nonUtilizationInterest()).to.equal(7);
  });

});
describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(minimumInterest()).to.equal(7);
  });

});
describe('loanlibrary', () => {

  it('should be able to ', () => {
    expect(exitFees()).to.equal(7);
  });

});


