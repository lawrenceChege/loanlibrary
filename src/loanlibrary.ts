
// import required libraries
import * as moment from "moment"

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
        defaultAtEndOfTerm: String, defaultCompounded: String, defaultRate: number,
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount, this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
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
            this.BalanceOfLoanOutstanding ,this.TotalRedemptionAmount,this.capitalizeLoanOnDefault,this.defaultAtEndOfTerm ,this.defaultCompounded ,this.defaultRate);
        exT.getExitFees()


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
// calculate loan type one balance
export class LOANTYPEONE extends LOAN {
    getLoanOneBalance(){
        this.dailyOneInterest = this.balanceOfLoanOne * this.dailyRateOfLoanOne

        if (this.loanOneInterestServiced === "yes") {
            this.totalInterestCharged += this.dailyOneInterest
            this.totalInterestDue += this.dailyOneInterest
            this.totalInterestPaid += this.dailyOneInterest
            this.totalInterestOutstanding += this.dailyOneInterest
            return {" Total interest Charged": this.totalInterestCharged};
        } else if (this.loanOneInterestServiced === "no") {
            if (this.loanOneInterestComponded === "yes") {
                this.totalInterestCharged += this.dailyOneInterest
                this.totalInterestDue += this.dailyOneInterest
                this.totalInterestPaid += this.dailyOneInterest
                this.balanceOfLoanOne += this.dailyOneInterest
                return {" Loan 1 balance": this.balanceOfLoanOne};
            } else if (this.loanOneInterestComponded === "no") {
                this.totalInterestCharged += this.dailyOneInterest
                this.totalInterestNotDue += this.dailyOneInterest
                this.totalInterestOutstanding += this.dailyOneInterest
                return {" Total interest Charged": this.totalInterestCharged};

            }
        }
        return {"Daily Loan 1 interest": this.dailyOneInterest};

    }
}

// calculate loan type two balance
export class LOANTYPETWO extends LOAN{
    getLoanTwoBalance(){
        this.dailyTwoInterest = this.balanceOfLoanTwo * this.dailyRateOfLoanTwo

    if (this.loanTwoInterestServiced === "yes") {
        this.totalInterestCharged = this.totalInterestCharged + this.dailyTwoInterest
        this.totalInterestDue = this.totalInterestDue + this.dailyTwoInterest
        this.totalInterestPaid = this.totalInterestPaid + this.dailyTwoInterest
        this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyTwoInterest
        return {" Total Interest Charged":this.totalInterestCharged};
    } else if (this.loanTwoInterestServiced === "no") {
        if (this.loanTwoInterestCompounded === "yes") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyTwoInterest
            this.totalInterestDue = this.totalInterestDue + this.dailyTwoInterest
            this.totalInterestPaid = this.totalInterestPaid + this.dailyTwoInterest
            this.balanceOfLoanTwo = this.balanceOfLoanTwo + this.dailyTwoInterest
            return {" Balance of Type 2 Loan":this.balanceOfLoanTwo};
        } else if (this.loanTwoInterestCompounded === "no") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyTwoInterest
            this.totalInterestNotDue = this.totalInterestNotDue + this.dailyTwoInterest
            this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyTwoInterest
            return {" Total Interest Charged":this.totalInterestCharged};
        }
    }
    return {"Daily loan Two Interesrt": this.dailyTwoInterest};
    }
}


// calculate non utilization interest
export class NONUTIL extends LOAN {
    getNonUtilizationInterest(){
        this.dailyNonUtilizationInterest = this.undrawnBalance * this.dailyNonUtilizationRate
    if (this.nonUtilizationInterestServiced === "yes") {
        this.totalInterestCharged = this.totalInterestCharged + this.dailyNonUtilizationInterest
        this.totalInterestDue = this.totalInterestDue + this.dailyNonUtilizationInterest
        this.totalInterestPaid = this.totalInterestPaid +this. dailyNonUtilizationInterest
        this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyNonUtilizationInterest
        return {"Total interest charged":this.totalInterestCharged};
    } else if (this.nonUtilizationInterestServiced === "no") {
        if (this.nonUtilizationInterestCompounded === "yes") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyNonUtilizationInterest
            this.totalInterestDue = this.totalInterestDue + this.dailyNonUtilizationInterest
            this.totalInterestPaid = this.totalInterestPaid + this.dailyNonUtilizationInterest
            this.balanceOfLoanOne = this.balanceOfLoanOne + this.dailyNonUtilizationInterest
            return {"Loan type 1 balance":this.balanceOfLoanOne};
        } else if (this.nonUtilizationInterestCompounded === "no") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyNonUtilizationInterest
            this.totalInterestNotDue = this.totalInterestNotDue + this.dailyNonUtilizationInterest
            this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyNonUtilizationInterest
            return {"Total interest charged":this.totalInterestCharged};
        }
    }
    return {"Daily non utilization Interest":this.dailyNonUtilizationInterest};
    }
}

// check whether minimum interest is met
export class MININTEREST extends LOAN {
    getMinimumInterest(){
        if (this.totalInterestCharged !== this.minimumInterestAmount) {
            this.balancingInterestCharged = this.minimumInterestAmount - this.totalInterestCharged
            this.balancingInterestDue = this.minimumInterestAmount - this.totalInterestCharged
            this.balancingInterestOutstanding = this.minimumInterestAmount - this.totalInterestCharged
            return {" Balancing Interest Charged": this.balancingInterestCharged};
        }
    }
}

// check for exit fees
export class EXITFEES extends LOAN {
    getExitFees(){
        if (this.exitFeeAmount !== 0) {
            this.feeDue = this.feeDue + this.exitFeeAmount
            return {" Due Fees":this.feeDue};
        }
        if (this.exitFeeGDV !== 0) {
            this.exitFeeAmount = (this.exitFeeGDV / 100) * this.GDV
            this.feeDue = this.feeDue + this.exitFeeAmount
            this.feeOutstanding = this.feeOutstanding + this.exitFeeAmount
            return {" Due Fees":this.feeDue};
        }
        if (this.exitFeeLoan !== 0) {
            this.exitFeeAmount = (this.facilityAmount + this.totalInterestCharged) * (this.exitFeeLoan / 100)
            this.feeCharged = this.feeCharged + this.exitFeeAmount
            this.feeDue = this.feeDue + this.exitFeeAmount
            this.feeOutstanding = this.feeOutstanding + this.exitFeeAmount
            return {" Due Fees":this.feeDue};
        }
    
    }
}
