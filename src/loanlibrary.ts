
// import required libraries
import * as moment from "moment"


// definitions and variables

// date variables and constants
let startDate: String
let repaymentDate: String
let drawdownDate: any

// loan type one variables
let dailyOneInterest: number
let dailyRateOfLoanOne: number
let balanceOfLoanOne: number
let loanOneInterestServiced: String
let loanOneInterestComponded: String

// loan type two variables
let dailyTwoInterest: number
let dailyRateOfLoanTwo: number
let balanceOfLoanTwo: number
let loanTwoInterestServiced: String
let loanTwoInterestCompounded: String

// non utilization rate variables
let nonUtilizationInterestAmount: number
let dailyNonUtilizationInterest: number
let dailyNonUtilizationRate: number
let nonUtilizationInterestServiced: String
let nonUtilizationInterestCompounded: String

// interest variables
let interestServiced: String
let loanInterestRate: number
let minimumInterestAmount: number

let totalInterestDue: number
let totalInterestPaid: number
let totalInterestCharged: number
let totalInterestNotDue: number
let totalInterestOutstanding: number
let totalInterest: number

let balancingInterestCharged: number
let balancingInterestDue: number
let balancingInterestOutstanding: number

// fees variables
let lendingFees: number
let lendingFeePercentage: number
let lendingFeeAddedToLoan: String
let lendingFeeInterestServiced: String

let otherFeesPayable: number
let OtherFeesAddedToLoan: String

let feeCharged: number
let feeDue: number
let feePaid: number
let feeOutstanding: number

// exit fee variables
let exitFeeAmount: number
let exitFeeGDV: number
let exitFeeLoan: number

// general loan variables
let facilityAmount: number
let loanType: number
let drawdownOneAmount: number
let drawdownAmountTwo: number
let undrawnBalance: number
let GDV: number
let TotalInterestCharged: number
let TotalInterestDue: number
let TotalFeesDue: number
let BalanceOfLoanOutstanding: number
let TotalRedemptionAmount: number
let z: number
let w: number
let x: number
let y: number


export function add(x: number, y: number) {
    z = x + y;
    w = x * y;
    let q: any = {
        "z": z,
        "w": w
    }
    return q;
}

export function loan() {
    // define date variables        
    let date = moment().format('d-MMM-YYYY');
    let midnight = moment().startOf('day').format();
    let now = moment().format();
    // On first drawdown date
    if (date === startDate) {
        drawdownAmount(facilityAmount, undrawnBalance, drawdownOneAmount);
        lendingFee(lendingFeeInterestServiced, lendingFeeAddedToLoan, feeDue, feePaid, loanInterestRate,
            facilityAmount, lendingFees, lendingFeePercentage, balanceOfLoanOne, feeOutstanding);
        otherFees(OtherFeesAddedToLoan, feeDue, balanceOfLoanOne, feeCharged, feeOutstanding, feePaid, otherFeesPayable);
        // Every day on midnight
    } else if (now === midnight) {
        // on second or third drawdown date
        for (let ddate of drawdownDate) {
            if (ddate === date) {
                drawdownAmount(facilityAmount, undrawnBalance, drawdownOneAmount);
            }

        }
        // for every other midnight
        loanOneBalance();
        loanTwoBalance();
        nonUtilizationInterest();

        // on repayment date
    } else if (date === repaymentDate) {
        minimumInterest();
        exitFees();
        TotalInterestCharged = totalInterestCharged + balancingInterestDue
        TotalInterestDue = totalInterestDue
        BalanceOfLoanOutstanding = balanceOfLoanOne + balanceOfLoanTwo
        TotalRedemptionAmount = BalanceOfLoanOutstanding + totalInterestDue + TotalFeesDue

    }
}


// check on drawdown dates
export function drawdownAmount(facilityAmount: number, undrawnBalance: number, drawdownOneAmount: number) {
    undrawnBalance = facilityAmount
    let drawdownOutput = {
        "drawdownOneAmount": drawdownOneAmount,
        "undrawnBalance": undrawnBalance
    }
    if (loanType === 1) {
        drawdownOneAmount += balanceOfLoanOne
        undrawnBalance -= drawdownOneAmount
        return drawdownOneAmount;

    } else if (loanType === 2) {
        drawdownOneAmount += balanceOfLoanTwo
        undrawnBalance -= drawdownOneAmount
        return drawdownOneAmount;

    }

}
// calculate lending fees on first drawdown date
export function lendingFee(lendingFeeInterestServiced: String,
    lendingFeeAddedToLoan: String, feeDue: number, feePaid: number,
    loanInterestRate: number, facilityAmount: number, lendingFees: number,
    lendingFeePercentage: number, balanceOfLoanOne: number, feeOutstanding: number) {
    
    if (lendingFeeInterestServiced === "yes") {
        lendingFees = facilityAmount * (lendingFeePercentage / 100)
        return lendingFees;
    } else if (lendingFeeInterestServiced === "no") {
        lendingFees = (facilityAmount * loanInterestRate / 100) * (lendingFeePercentage / 100)
        if (lendingFeeAddedToLoan === "yes") {
            feeDue += lendingFees
            feePaid += lendingFees
            balanceOfLoanOne += lendingFees
            return balanceOfLoanOne;
        } else if (lendingFeeAddedToLoan === "no") {
            feeCharged += lendingFees
            feeDue += lendingFees
            feePaid += lendingFees
            feeOutstanding += lendingFees
            return feeDue;
        }
        return lendingFees;
    }

}

// calculate other fees on first drawdown date
export function otherFees( OtherFeesAddedToLoan: String,
    balanceOfLoanOne: number, feeCharged :number, feeOutstanding: number,
    feePaid: number,feeDue : number, otherFeesPayable: number) {
    if (OtherFeesAddedToLoan === "yes") {
        feeDue = feeDue + otherFeesPayable
        feePaid += otherFeesPayable
        balanceOfLoanOne += otherFeesPayable
        console.log(balanceOfLoanOne)
        return balanceOfLoanOne;
    } else if (OtherFeesAddedToLoan === "no") {
        feeDue += otherFeesPayable
        feePaid += otherFeesPayable
        feeOutstanding += otherFeesPayable
        feeCharged += otherFeesPayable
        return feeDue;

    }
}
// calculate loan type one balance
export function loanOneBalance() {

    dailyOneInterest = balanceOfLoanOne * dailyRateOfLoanOne

    if (loanOneInterestServiced === "yes") {
        totalInterestCharged = totalInterestCharged + dailyOneInterest
        totalInterestDue = totalInterestDue + dailyOneInterest
        totalInterestPaid = totalInterestPaid + dailyOneInterest
        totalInterestOutstanding = totalInterestOutstanding + dailyOneInterest
    } else if (loanOneInterestServiced === "no") {
        if (loanOneInterestComponded === "yes") {
            totalInterestCharged = totalInterestCharged + dailyOneInterest
            totalInterestDue = totalInterestDue + dailyOneInterest
            totalInterestPaid = totalInterestPaid + dailyOneInterest
            balanceOfLoanOne = balanceOfLoanOne + dailyOneInterest
        } else if (loanOneInterestComponded === "no") {
            totalInterestCharged = totalInterestCharged + dailyOneInterest
            totalInterestNotDue = totalInterestNotDue + dailyOneInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyOneInterest

        }
    }
}

// calculate loan type two balance
export function loanTwoBalance() {
    dailyTwoInterest = balanceOfLoanTwo * dailyRateOfLoanTwo

    if (loanTwoInterestServiced === "yes") {
        totalInterestCharged = totalInterestCharged + dailyTwoInterest
        totalInterestDue = totalInterestDue + dailyTwoInterest
        totalInterestPaid = totalInterestPaid + dailyTwoInterest
        totalInterestOutstanding = totalInterestOutstanding + dailyTwoInterest
    } else if (loanTwoInterestServiced === "no") {
        if (loanTwoInterestCompounded === "yes") {
            totalInterestCharged = totalInterestCharged + dailyTwoInterest
            totalInterestDue = totalInterestDue + dailyTwoInterest
            totalInterestPaid = totalInterestPaid + dailyTwoInterest
            balanceOfLoanTwo = balanceOfLoanTwo + dailyTwoInterest
        } else if (loanTwoInterestCompounded === "no") {
            totalInterestCharged = totalInterestCharged + dailyTwoInterest
            totalInterestNotDue = totalInterestNotDue + dailyTwoInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyTwoInterest

        }
    }
}

// calculate non utilization interest
export function nonUtilizationInterest() {
    dailyNonUtilizationInterest = undrawnBalance * dailyNonUtilizationRate
    if (nonUtilizationInterestServiced === "yes") {
        totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
        totalInterestDue = totalInterestDue + dailyNonUtilizationInterest
        totalInterestPaid = totalInterestPaid + dailyNonUtilizationInterest
        totalInterestOutstanding = totalInterestOutstanding + dailyNonUtilizationInterest
    } else if (nonUtilizationInterestServiced === "no") {
        if (nonUtilizationInterestCompounded === "yes") {
            totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
            totalInterestDue = totalInterestDue + dailyNonUtilizationInterest
            totalInterestPaid = totalInterestPaid + dailyNonUtilizationInterest
            balanceOfLoanOne = balanceOfLoanTwo + dailyNonUtilizationInterest
        } else if (nonUtilizationInterestCompounded === "no") {
            totalInterestCharged = totalInterestCharged + dailyNonUtilizationInterest
            totalInterestNotDue = totalInterestNotDue + dailyNonUtilizationInterest
            totalInterestOutstanding = totalInterestOutstanding + dailyNonUtilizationInterest

        }
    }
}

// check whether minimum interest is met
export function minimumInterest() {
    if (totalInterestCharged !== minimumInterestAmount) {
        balancingInterestCharged = minimumInterestAmount - totalInterestCharged
        balancingInterestDue = minimumInterestAmount - totalInterestCharged
        balancingInterestOutstanding = minimumInterestAmount - totalInterestCharged

    }

}
// check for exit fees
export function exitFees() {
    if (exitFeeAmount !== 0) {
        feeDue = feeDue + exitFeeAmount
    }
    if (exitFeeGDV !== 0) {
        exitFeeAmount = (exitFeeGDV / 100) * GDV
        feeDue = feeDue + exitFeeAmount
        feeOutstanding = feeOutstanding + exitFeeAmount
    }
    if (exitFeeLoan !== 0) {
        exitFeeAmount = (facilityAmount + totalInterestCharged) * (exitFeeLoan / 100)
        feeCharged = feeCharged + exitFeeAmount
        feeDue = feeDue + exitFeeAmount
        feeOutstanding = feeOutstanding + exitFeeAmount

    }

}