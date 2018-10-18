let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// calculate non utilization interest
export class NONUTIL extends LOAN {
    getNonUtilizationInterest(){
        this.dailyNonUtilizationInterest = BigNumber(this.undrawnBalance).multiply(this.dailyNonUtilizationRate) 
    if (this.nonUtilizationInterestServiced === "yes") {
        this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyNonUtilizationInterest)
        this.totalInterestDue = BigNumber(this.totalInterestDue).plus(this.dailyNonUtilizationInterest)
        this.totalInterestPaid = BigNumber(this.totalInterestPaid).plus(this.dailyNonUtilizationInterest)
        this.totalInterestOutstanding = BigNumber(this.totalInterestOutstanding).plus(this.dailyNonUtilizationInterest)
        console.log([" Total interest Charged at non utilization", this.totalInterestCharged])
        return this.totalInterestCharged;
    } else if (this.nonUtilizationInterestServiced === "no") {
        if (this.nonUtilizationInterestCompounded === "yes") {
            this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyNonUtilizationInterest)
            this.totalInterestDue = BigNumber(this.totalInterestDue).plus(this.dailyNonUtilizationInterest)
            this.totalInterestPaid = BigNumber(this.totalInterestPaid).plus(this.dailyNonUtilizationInterest)
            this.balanceOfLoanOne = BigNumber(this.balanceOfLoanOne).plus(this.dailyNonUtilizationInterest)
            console.log([" Loan 1 balance after non utilization interest", this.balanceOfLoanOne])
            return this.balanceOfLoanOne;
        } else if (this.nonUtilizationInterestCompounded === "no") {
            this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyNonUtilizationInterest)
            this.totalInterestNotDue = BigNumber(this.totalInterestNotDue).plus(this.dailyNonUtilizationInterest)
            this.totalInterestOutstanding = BigNumber(this.totalInterestOutstanding).plus(this.dailyNonUtilizationInterest)
            console.log([" Total interest Charged", this.totalInterestCharged])
            return this.totalInterestCharged;
        }
    }
    console.log(["Daily non utilization Interestaily Loan 1 interest", this.dailyNonUtilizationInterest])
    return this.dailyNonUtilizationInterest;
    }
}