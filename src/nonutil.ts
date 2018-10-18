import { LOAN  } from "../src/loanlibrary";
// calculate non utilization interest
export class NONUTIL extends LOAN {
    getNonUtilizationInterest(){
        this.dailyNonUtilizationInterest = this.undrawnBalance * this.dailyNonUtilizationRate
    if (this.nonUtilizationInterestServiced === "yes") {
        this.totalInterestCharged = this.totalInterestCharged + this.dailyNonUtilizationInterest
        this.totalInterestDue = this.totalInterestDue + this.dailyNonUtilizationInterest
        this.totalInterestPaid = this.totalInterestPaid +this. dailyNonUtilizationInterest
        this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyNonUtilizationInterest
        console.log([" Total interest Charged at non utilization", this.totalInterestCharged])
        return this.totalInterestCharged;
    } else if (this.nonUtilizationInterestServiced === "no") {
        if (this.nonUtilizationInterestCompounded === "yes") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyNonUtilizationInterest
            this.totalInterestDue = this.totalInterestDue + this.dailyNonUtilizationInterest
            this.totalInterestPaid = this.totalInterestPaid + this.dailyNonUtilizationInterest
            this.balanceOfLoanOne = this.balanceOfLoanOne + this.dailyNonUtilizationInterest
            console.log([" Loan 1 balance after non utilization interest", this.balanceOfLoanOne])
            return this.balanceOfLoanOne;
        } else if (this.nonUtilizationInterestCompounded === "no") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyNonUtilizationInterest
            this.totalInterestNotDue = this.totalInterestNotDue + this.dailyNonUtilizationInterest
            this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyNonUtilizationInterest
            console.log([" Total interest Charged", this.totalInterestCharged])
            return this.totalInterestCharged;
        }
    }
    console.log(["Daily non utilization Interestaily Loan 1 interest", this.dailyNonUtilizationInterest])
    return this.dailyNonUtilizationInterest;
    }
}