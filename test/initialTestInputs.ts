import { LOAN } from "../src/loanlibrary";

export let startDate: String = "2-Oct-2018"
export let repaymentDate: String = "1-Dec-2018"
export let drawdownDate: any = ["5-Oct-2018", "8-Nov-2018", "10-Nov-2018"]

// loan type one variables
export let dailyOneInterest: number = 0
export let dailyRateOfLoanOne: number = 0.03
export let balanceOfLoanOne: number = 0
export let loanOneInterestServiced: String = "no"
export let loanOneInterestComponded: String = "yes"

// loan type two variables
export let dailyTwoInterest: number = 1
export let dailyRateOfLoanTwo: number = 0.03
export let balanceOfLoanTwo: number = 0
export let loanTwoInterestServiced: String = "yes"
export let loanTwoInterestCompounded: String = "no"

// non utilization rate variables
export let nonUtilizationInterestAmount: number = 0
export let dailyNonUtilizationInterest: number = 0
export let dailyNonUtilizationRate: number = 0.07
export let nonUtilizationInterestServiced: String = ""
export let nonUtilizationInterestCompounded: String = "yes"

// default
export let defaultRate: number = 2
export let defaultCompounded: string = "yes"
export let capitalizeLoanOnDefault: string = "yes"
export let defaultAtEndOfTerm: string = "yes"

// interest variables
export let interestServiced: String = "no"
export let loanInterestRate: number = 1
export let minimumInterestAmount: number = 1500

export let totalInterestDue: number = 0
export let totalInterestPaid: number = 0
export let totalInterestCharged: number = 0
export let totalInterestNotDue: number = 0
export let totalInterestOutstanding: number = 0
export let totalInterest: number = 0

export let balancingInterestCharged: number = 0
export let balancingInterestDue: number = 0
export let balancingInterestOutstanding: number = 0

// fees variables
export let lendingFees: number = 0
export let lendingFeePercentage: number = 2
export let lendingFeeAddedToLoan: String = "yes"
export let lendingFeeInterestServiced: String = "yes"

export let otherFeesPayable: number = 5000
export let OtherFeesAddedToLoan: String = "yes"

export let feeCharged: number = 0
export let feeDue: number = 0
export let feePaid: number = 0
export let feeOutstanding: number = 0

// exit fee variables
export let exitFeeAmount: number = 0
export let exitFeeGDV: number = 2
export let exitFeeLoan: number = 0

// general loan variables
export let facilityAmount: number = 100000
export let totalLoan: number = 0
export let loanType: number = 1
export let drawdownOneAmount: number = 50000
export let drawdownAmountTwo: any = 25000
export let undrawnBalance: number = 0
export let GDV: number = 250000
export let TotalInterestCharged: number = 0
export let TotalInterestDue: number = 0
export let TotalFeesDue: number = 0
export let BalanceOfLoanOutstanding: number = 0
export let TotalRedemptionAmount: number = 0


