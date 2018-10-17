/// <reference path="../dist/types/loanlibrary.d.ts" />
// import required libraries
import * as moment from "moment"

export interface LOANDATA{
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
        BalanceOfLoanOutstanding: number, TotalRedemptionAmount: number
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount);
        amount.getDrawdownAmount()
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount);
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
                    this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount);
                amount.getDrawdownAmount()
            }

        }
        // for every other midnight
        loanOneBalance(this.loanOneInterestServiced, this.loanOneInterestComponded,
            this.balanceOfLoanOne, this.dailyRateOfLoanOne, this.totalInterestCharged,
            this.totalInterestDue, this.totalInterestPaid, this.totalInterestNotDue);
        loanTwoBalance(this.loanTwoInterestServiced, this.loanTwoInterestCompounded,
            this.balanceOfLoanTwo, this.dailyRateOfLoanTwo, this.totalInterestCharged,
            this.totalInterestDue, this.totalInterestPaid, this.totalInterestNotDue);
        nonUtilizationInterest(this.nonUtilizationInterestServiced, this.nonUtilizationInterestCompounded,
            this.dailyNonUtilizationRate, this.totalInterestCharged,
            this.balanceOfLoanOne,this.undrawnBalance,
            this.totalInterestDue, this.totalInterestPaid, this.totalInterestNotDue);

        // on repayment date
    } else if (date === this.repaymentDate) {
        minimumInterest(this.totalInterestCharged, this.minimumInterestAmount,
            this.balancingInterestCharged,this.balancingInterestDue, this.balancingInterestOutstanding);
        exitFees(this.exitFeeAmount, this.feeDue,
            this.feeOutstanding, this.exitFeeGDV,  this.GDV,
            this.exitFeeLoan, this.facilityAmount, this.totalInterestCharged);
            this.TotalInterestCharged = this.totalInterestCharged + this.balancingInterestDue
            this.TotalInterestDue = this.totalInterestDue
            this.BalanceOfLoanOutstanding = this.balanceOfLoanOne + this.balanceOfLoanTwo
            this.TotalRedemptionAmount = this.BalanceOfLoanOutstanding + this.totalInterestDue + this.TotalFeesDue

    }
    }
}


export class DRAWDOWN extends LOAN{
    getDrawdownAmount (){
    this.undrawnBalance = this.facilityAmount
    if (this.loanType === 1) {
        this.drawdownOneAmount += this.balanceOfLoanOne
        this.undrawnBalance -= this.drawdownOneAmount
        return {" Draw down 1 Amount": this.drawdownOneAmount};

    } else if (this.loanType === 2) {
        this.drawdownOneAmount += this.balanceOfLoanTwo
        this.undrawnBalance -= this.drawdownOneAmount
        return {" Draw down 1 Amount": this.drawdownOneAmount};

    }

    }
}


// calculate lending fees on first drawdown date
export class LENDINGFEE extends LOAN {
    getLendingFee (){
        if (this.lendingFeeInterestServiced === "yes") {
            this.lendingFees = this.facilityAmount * (this.lendingFeePercentage / 100)
            return {"Lending Fees": this.lendingFees};
        } else if (this.lendingFeeInterestServiced === "no") {
            this.lendingFees = (this.facilityAmount * this.loanInterestRate / 100) * (this.lendingFeePercentage / 100)
            if (this.lendingFeeAddedToLoan === "yes") {
                this.feeDue += this.lendingFees
                this.feePaid += this.lendingFees
                this.balanceOfLoanOne += this.lendingFees
                return{" Loan 1 balance": this.balanceOfLoanOne};
            } else if (this.lendingFeeAddedToLoan === "no") {
                this.feeCharged += this.lendingFees
                this.feeDue += this.lendingFees
                this.feePaid += this.lendingFees
                this.feeOutstanding += this.lendingFees
                return {" Due Fees": this.feeDue};
            }
            return {"Lending Fees": this.lendingFees};
        }
    

    }
}

// calculate other fees on first drawdown date
export class OTHERFEES extends LOAN{
    getOtherFees(){
        if (this.OtherFeesAddedToLoan === "yes") {
            this.feeDue = this.feeDue + this.otherFeesPayable
            this.feePaid += this.otherFeesPayable
            this.balanceOfLoanOne += this.otherFeesPayable
            return {" Loan 1 balance": this.balanceOfLoanOne};
        } else if (this.OtherFeesAddedToLoan === "no") {
            this.feeDue += this.otherFeesPayable
            this.feePaid += this.otherFeesPayable
            this.feeOutstanding += this.otherFeesPayable
            this.feeCharged += this.otherFeesPayable
            return {" Due Fees": this.feeDue};
    
        }

    }
}
 calculate loan type one balance
export function loanOneBalance(loanOneInterestServiced: String, loanOneInterestComponded: String,
    balanceOfLoanOne: number, dailyRateOfLoanOne: number, totalInterestCharged: number,
    totalInterestDue:number, totalInterestPaid:number, totalInterestNotDue:number  ) {

    dailyOneInterest = balanceOfLoanOne * dailyRateOfLoanOne

    if (loanOneInterestServiced === "yes") {
        totalInterestCharged +=dailyOneInterest
        totalInterestDue += dailyOneInterest
        totalInterestPaid += dailyOneInterest
        totalInterestOutstanding += dailyOneInterest
        return totalInterestCharged;
    } else if (loanOneInterestServiced === "no") {
        if (loanOneInterestComponded === "yes") {
            totalInterestCharged += dailyOneInterest
            totalInterestDue +=dailyOneInterest
            totalInterestPaid += dailyOneInterest
            balanceOfLoanOne += dailyOneInterest
            return balanceOfLoanOne;
        } else if (loanOneInterestComponded === "no") {
            totalInterestCharged += dailyOneInterest
            totalInterestNotDue += dailyOneInterest
            totalInterestOutstanding += dailyOneInterest
            return totalInterestCharged;

        }
    }
    return dailyOneInterest;
}

// calculate loan type two balance
export function loanTwoBalance(loanTwoInterestServiced: String, loanTwoInterestCompounded: String,
    balanceOfLoanTwo: number, dailyRateOfLoanTwo: number, totalInterestCharged: number,
    totalInterestDue:number, totalInterestPaid:number, totalInterestNotDue:number) {
    dailyTwoInterest = balanceOfLoanTwo * dailyRateOfLoanTwo

    if (loanTwoInterestServiced === "yes") {
        totalInterestCharged = totalInterestCharged + dailyTwoInterest
        totalInterestDue = totalInterestDue + dailyTwoInterest
        totalInterestPaid = totalInterestPaid + dailyTwoInterest
        totalInterestOutstanding = totalInterestOutstanding + dailyTwoInterest
        return totalInterestCharged;
    } else if (loanTwoInterestServiced === "no") {
        if (loanTwoInterestCompounded === "yes") {
            totalInterestCharged = totalInterestCharged + dailyTwoInterest
            totalInterestDue = totalInterestDue + dailyTwoInterest
            totalInterestPaid = totalInterestPaid + dailyTwoInterest
            balanceOfLoanTwo = balanceOfLoanTwo + dailyTwoInterest
            return balanceOfLoanTwo;
        } else if (loanTwoInterestCompounded === "no") {
            totalInterestCharged = totalInterestCharged + dailyTwoInterest
            totalInterestNotDue = totalInterestNotDue + dailyTwoInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyTwoInterest
            return totalInterestCharged;
        }
    }
    return dailyTwoInterest;
}

// calculate non utilization interest
export function nonUtilizationInterest( nonUtilizationInterestServiced: String, nonUtilizationInterestCompounded: String,
     dailyNonUtilizationRate: number, totalInterestCharged: number,
    balanceOfLoanOne: number,undrawnBalance: number,
    totalInterestDue:number, totalInterestPaid:number, totalInterestNotDue:number,) {

    dailyNonUtilizationInterest = undrawnBalance * dailyNonUtilizationRate

    if (nonUtilizationInterestServiced === "yes") {
        totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
        totalInterestDue = totalInterestDue + dailyNonUtilizationInterest
        totalInterestPaid = totalInterestPaid + dailyNonUtilizationInterest
        totalInterestOutstanding = totalInterestOutstanding + dailyNonUtilizationInterest
        return totalInterestCharged
    } else if (nonUtilizationInterestServiced === "no") {
        if (nonUtilizationInterestCompounded === "yes") {
            totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
            totalInterestDue = totalInterestDue + dailyNonUtilizationInterest
            totalInterestPaid = totalInterestPaid + dailyNonUtilizationInterest
            balanceOfLoanOne = balanceOfLoanOne + dailyNonUtilizationInterest
            return balanceOfLoanOne;
        } else if (nonUtilizationInterestCompounded === "no") {
            totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
            totalInterestNotDue = totalInterestNotDue + dailyNonUtilizationInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyNonUtilizationInterest
            return totalInterestCharged;
        }
    }
    return dailyNonUtilizationInterest;
}

// check whether minimum interest is met
export function minimumInterest(totalInterestCharged: number, minimumInterestAmount: number,
    balancingInterestCharged:number, balancingInterestDue: number, balancingInterestOutstanding:number) {
    if (totalInterestCharged !== minimumInterestAmount) {
        balancingInterestCharged = minimumInterestAmount - totalInterestCharged
        balancingInterestDue = minimumInterestAmount - totalInterestCharged
        balancingInterestOutstanding = minimumInterestAmount - totalInterestCharged
        return balancingInterestCharged;
    }

}
// check for exit fees
export function exitFees(exitFeeAmount:number, feeDue: number,
    feeOutstanding: number, exitFeeGDV: number,  GDV: number,
    exitFeeLoan: number, facilityAmount:number, totalInterestCharged: number) {
    if (exitFeeAmount !== 0) {
        feeDue = feeDue + exitFeeAmount
        return feeDue;
    }
    if (exitFeeGDV !== 0) {
        exitFeeAmount = (exitFeeGDV / 100) * GDV
        feeDue = feeDue + exitFeeAmount
        feeOutstanding = feeOutstanding + exitFeeAmount
        return feeDue;
    }
    if (exitFeeLoan !== 0) {
        exitFeeAmount = (facilityAmount + totalInterestCharged) * (exitFeeLoan / 100)
        feeCharged = feeCharged + exitFeeAmount
        feeDue = feeDue + exitFeeAmount
        feeOutstanding = feeOutstanding + exitFeeAmount
        return feeDue;
    }

}