
// import required libraries
import * as moment from "moment"
let BigNumber = require('big-number')

import { EXITFEES } from "../src/exitfees";
import { MININTEREST } from "../src/mininterest";
import { NONUTIL } from "../src/nonutil";
import { LOANTYPEONE } from "../src/loantypeone";
import { LOANTYPETWO } from "../src/loantypetwo";
import { OTHERFEES } from "../src/otherfees";
import { LENDINGFEE } from "../src/lendingfee";
import { DRAWDOWN } from "../src/drawdown";

export interface LOANDATA {
    startDate: String
    repaymentDate: String
    drawdownDate: any
    dailyOneInterest: number
    dailyRateOfLoanOne: number
    balanceOfLoanOne: number
    loanOneInterestServiced: String
    loanOneInterestComponded: String
    dailyTwoInterest: number
    dailyRateOfLoanTwo: number
    balanceOfLoanTwo: number
    loanTwoInterestServiced: String
    loanTwoInterestCompounded: String
    nonUtilizationInterestAmount: number
    dailyNonUtilizationInterest: number
    dailyNonUtilizationRate: number
    nonUtilizationInterestServiced: String
    nonUtilizationInterestCompounded: String
    interestServiced: String
    loanInterestRate: number
    minimumInterestAmount: number
    totalInterestDue: number
    totalInterestPaid: number
    totalInterestCharged: number
    totalInterestNotDue: number
    totalInterestOutstanding: number
    totalInterest: number
    balancingInterestCharged: number
    balancingInterestDue: number
    balancingInterestOutstanding: number
    lendingFees: number
    lendingFeePercentage: number
    lendingFeeAddedToLoan: String
    lendingFeeInterestServiced: String
    otherFeesPayable: number
    OtherFeesAddedToLoan: String
    feeCharged: number
    feeDue: number
    feePaid: number
    feeOutstanding: number
    exitFeeAmount: number
    exitFeeGDV: number
    exitFeeLoan: number
    facilityAmount: number
    loanType: number
    drawdownOneAmount: number
    drawdownAmountTwo: number
    undrawnBalance: number
    GDV: number
    TotalInterestCharged: number
    TotalInterestDue: number
    TotalFeesDue: number
    BalanceOfLoanOutstanding: number
    TotalRedemptionAmount: number
    capitalizeLoanOnDefault: String
    defaultAtEndOfTerm: String
    defaultCompounded: String
    defaultRate: number

}


export class LOAN implements LOANDATA{
    startDate: String
    repaymentDate: String
    drawdownDate: any
    dailyOneInterest: number
    dailyRateOfLoanOne: number
    balanceOfLoanOne: number
    loanOneInterestServiced: String
    loanOneInterestComponded: String
    dailyTwoInterest: number
    dailyRateOfLoanTwo: number
    balanceOfLoanTwo: number
    loanTwoInterestServiced: String
    loanTwoInterestCompounded: String
    nonUtilizationInterestAmount: number
    dailyNonUtilizationInterest: number
    dailyNonUtilizationRate: number
    nonUtilizationInterestServiced: String
    nonUtilizationInterestCompounded: String
    interestServiced: String
    loanInterestRate: number
    minimumInterestAmount: number
    totalInterestDue: number
    totalInterestPaid: number
    totalInterestCharged: number
    totalInterestNotDue: number
    totalInterestOutstanding: number
    totalInterest: number
    balancingInterestCharged: number
    balancingInterestDue: number
    balancingInterestOutstanding: number
    lendingFees: number
    lendingFeePercentage: number
    lendingFeeAddedToLoan: String
    lendingFeeInterestServiced: String
    otherFeesPayable: number
    OtherFeesAddedToLoan: String
    feeCharged: number
    feeDue: number
    feePaid: number
    feeOutstanding: number
    exitFeeAmount: number
    exitFeeGDV: number
    exitFeeLoan: number
    facilityAmount: number
    loanType: number
    drawdownOneAmount: number
    drawdownAmountTwo: number
    undrawnBalance: number
    GDV: number
    TotalInterestCharged: number
    TotalInterestDue: number
    TotalFeesDue: number
    BalanceOfLoanOutstanding: number
    TotalRedemptionAmount: number
    capitalizeLoanOnDefault: String
    defaultAtEndOfTerm: String
    defaultCompounded: String
    defaultRate: number
    constructor(startDate: String, repaymentDate: String, drawdownDate: any, dailyOneInterest: number,
        dailyRateOfLoanOne: number, balanceOfLoanOne: number, loanOneInterestServiced: String,
        loanOneInterestComponded: String, dailyTwoInterest: number, dailyRateOfLoanTwo: number,
        balanceOfLoanTwo: number, loanTwoInterestServiced: String, loanTwoInterestCompounded: String,
        nonUtilizationInterestAmount: number, dailyNonUtilizationInterest: number, dailyNonUtilizationRate: number,
        nonUtilizationInterestServiced: String, nonUtilizationInterestCompounded: String, interestServiced: String,
        loanInterestRate: number, minimumInterestAmount: number, totalInterestDue: number, totalInterestPaid: number,
        totalInterestCharged: number, totalInterestNotDue: number, totalInterestOutstanding: number,
        totalInterest: number, balancingInterestCharged: number, balancingInterestDue: number,
        balancingInterestOutstanding: number, lendingFees: number, lendingFeePercentage: number,
        lendingFeeAddedToLoan: String, lendingFeeInterestServiced: String, otherFeesPayable: number,
        OtherFeesAddedToLoan: String, feeCharged: number, feeDue: number, feePaid: number, feeOutstanding: number,
        exitFeeAmount: number, exitFeeGDV: number, exitFeeLoan: number, facilityAmount: number,
        loanType: number, drawdownOneAmount: number, drawdownAmountTwo: number, undrawnBalance: number,
        GDV: number, TotalInterestCharged: number, TotalInterestDue: number, TotalFeesDue: number,
        BalanceOfLoanOutstanding: number, TotalRedemptionAmount: number, capitalizeLoanOnDefault: String,
        defaultAtEndOfTerm: String, defaultCompounded: String, defaultRate: number
    ){
    this.startDate = startDate
    this.repaymentDate = repaymentDate
    this.drawdownDate = drawdownDate
    this.dailyOneInterest = dailyOneInterest
    this.dailyRateOfLoanOne = dailyRateOfLoanOne
    this.balanceOfLoanOne = balanceOfLoanOne
    this.loanOneInterestServiced = loanOneInterestServiced
    this.loanOneInterestComponded = loanOneInterestComponded
    this.dailyTwoInterest = dailyTwoInterest
    this.dailyRateOfLoanTwo = dailyRateOfLoanTwo
    this.balanceOfLoanTwo = balanceOfLoanTwo
    this.loanTwoInterestServiced = loanTwoInterestServiced
    this.loanTwoInterestCompounded = loanTwoInterestCompounded
    this.nonUtilizationInterestAmount = nonUtilizationInterestAmount
    this.dailyNonUtilizationInterest = dailyNonUtilizationInterest
    this.dailyNonUtilizationRate = dailyNonUtilizationRate
    this.nonUtilizationInterestServiced = nonUtilizationInterestServiced
    this.nonUtilizationInterestCompounded = nonUtilizationInterestCompounded
    this.interestServiced = interestServiced
    this.loanInterestRate = loanInterestRate
    this.minimumInterestAmount = minimumInterestAmount
    this.totalInterestDue = totalInterestDue
    this.totalInterestPaid = totalInterestPaid
    this.totalInterestCharged = totalInterestCharged
    this.totalInterestNotDue = totalInterestNotDue
    this.totalInterestOutstanding = totalInterestOutstanding
    this.totalInterest = totalInterest
    this.balancingInterestCharged = balancingInterestCharged
    this.balancingInterestDue = balancingInterestDue
    this.balancingInterestOutstanding = balancingInterestOutstanding
    this.lendingFees = lendingFees
    this.lendingFeePercentage = lendingFeePercentage
    this.lendingFeeAddedToLoan = lendingFeeAddedToLoan
    this.lendingFeeInterestServiced = lendingFeeInterestServiced
    this.otherFeesPayable = otherFeesPayable
    this.OtherFeesAddedToLoan = OtherFeesAddedToLoan
    this.feeCharged = feeCharged
    this.feeDue = feeDue
    this.feePaid = feePaid
    this.feeOutstanding = feeOutstanding
    this.exitFeeAmount = exitFeeAmount
    this.exitFeeGDV = exitFeeGDV
    this.exitFeeLoan = exitFeeLoan
    this.facilityAmount = facilityAmount
    this.loanType = loanType
    this.drawdownOneAmount = drawdownOneAmount
    this.drawdownAmountTwo = drawdownAmountTwo
    this.undrawnBalance = undrawnBalance
    this.GDV = GDV
    this.TotalInterestCharged = TotalInterestCharged
    this.TotalInterestDue = TotalInterestDue
    this.TotalFeesDue = TotalFeesDue
    this.BalanceOfLoanOutstanding = BalanceOfLoanOutstanding
    this.TotalRedemptionAmount = TotalRedemptionAmount
    this.capitalizeLoanOnDefault = capitalizeLoanOnDefault
    this.defaultAtEndOfTerm = defaultAtEndOfTerm
    this.defaultCompounded = defaultCompounded
    this.defaultRate = defaultRate
    
    }
    
}


export class MAIN extends LOAN {
    calculateLoan() {
        // define date variables        
        let date = moment().format('d-MMM-YYYY');
        let midnight = moment().startOf('day').format();
        let now = moment().format();
        // On first drawdown date
    if (date === this.startDate) {
        let amount = new DRAWDOWN(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        amount.getDrawdownAmount(this.undrawnBalance, this.facilityAmount, this.loanType, this.balanceOfLoanOne)
        let fee = new LENDINGFEE(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount, this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        fee.getLendingFee()
        let other = new OTHERFEES (this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        other.getOtherFees()
        // Every day on midnight
    } else if (now === midnight) {
        // on second or third drawdown date
        for (let ddate of this.drawdownDate) {
            if (ddate === date) {
                let amount = new DRAWDOWN(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
                    this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
                    this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
                    this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
                    this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
                    this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
                    this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
                    this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
                    this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
                    this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
                    this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
                    this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
                    this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,
                    this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
                amount.getDrawdownAmount(this.undrawnBalance, this.facilityAmount, this.loanType, this.balanceOfLoanOne)
            }

        }
        // for every other midnight
        let loan1 = new LOANTYPEONE(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        loan1.getLoanOneBalance()
        let loan2 = new LOANTYPETWO(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        loan2.getLoanTwoBalance()
        let nonUtil = new NONUTIL(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        nonUtil.getNonUtilizationInterest()

        // on repayment date
    } else if (date === this.repaymentDate) {
        let minInt = new MININTEREST(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        minInt.getMinimumInterest()
        let exT = new EXITFEES(this.startDate, this.repaymentDate, this.drawdownDate,this.dailyOneInterest,
            this.dailyRateOfLoanOne,this.balanceOfLoanOne,this.loanOneInterestServiced,this.loanOneInterestComponded,
            this.dailyTwoInterest,this.dailyRateOfLoanTwo,this.balanceOfLoanTwo,this.loanTwoInterestServiced,
            this.loanTwoInterestCompounded,this.nonUtilizationInterestAmount,this.dailyNonUtilizationInterest,
            this.dailyNonUtilizationRate,this.nonUtilizationInterestServiced ,this.nonUtilizationInterestCompounded,
            this.interestServiced,this.loanInterestRate,this.minimumInterestAmount,this.totalInterestDue,this.totalInterestPaid ,
            this.totalInterestCharged,this.totalInterestNotDue ,this.totalInterestOutstanding ,this.totalInterest,
            this.balancingInterestCharged,this.balancingInterestDue,this.balancingInterestOutstanding,
            this.lendingFees,this.lendingFeePercentage,this.lendingFeeAddedToLoan,this.lendingFeeInterestServiced,
            this.otherFeesPayable,this.OtherFeesAddedToLoan ,this.feeCharged,this.feeDue,this.feePaid,this.feeOutstanding,
            this.exitFeeAmount,this.exitFeeGDV,this.exitFeeLoan,this.facilityAmount,this.loanType,this.drawdownOneAmount,this.drawdownAmountTwo,
            this.undrawnBalance,this.GDV,this.TotalInterestCharged,this.TotalInterestDue,this.TotalFeesDue ,
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,
            this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        exT.getExitFees()


            this.TotalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.balancingInterestDue)
            this.TotalInterestDue = BigNumber(this.TotalInterestDue).plus(this.totalInterestDue)
            this.BalanceOfLoanOutstanding = BigNumber(this.balanceOfLoanOne).plus(this.balanceOfLoanTwo)
            this.TotalRedemptionAmount = BigNumber(this.BalanceOfLoanOutstanding).plus(this.totalInterestDue).plus(this.TotalFeesDue)

    }
    }
}

