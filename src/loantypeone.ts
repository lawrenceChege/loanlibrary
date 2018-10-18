let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// calculate loan type one balance
export class LOANTYPEONE extends LOAN {
    getLoanOneBalance(){
        this.dailyOneInterest = BigNumber(this.balanceOfLoanOne).plus(this.dailyRateOfLoanOne)

        if (this.loanOneInterestServiced === "yes") {
            this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyOneInterest)
            this.totalInterestDue = BigNumber(this.totalInterestDue).plus(this.dailyOneInterest)
            this.totalInterestPaid = BigNumber(this.totalInterestPaid).plus(this.dailyOneInterest)
            this.totalInterestOutstanding = BigNumber(this.totalInterestOutstanding).plus(this.dailyOneInterest)
            console.log([" Total interest Charged", this.totalInterestCharged])
            return this.totalInterestCharged;
        } else if (this.loanOneInterestServiced === "no") {
            if (this.loanOneInterestComponded === "yes") {
                this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyOneInterest)
                this.totalInterestDue = BigNumber(this.totalInterestDue).plus(this.dailyOneInterest)
                this.totalInterestPaid = BigNumber(this.totalInterestPaid).plus(this.dailyOneInterest)
                this.balanceOfLoanOne = BigNumber(this.balanceOfLoanOne).plus(this.dailyOneInterest)
                console.log([" Loan 1 balance after daily interest of loan 1", this.balanceOfLoanOne])
                return this.balanceOfLoanOne;
            } else if (this.loanOneInterestComponded === "no") {
                this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyOneInterest)
                this.totalInterestNotDue = BigNumber(this.totalInterestNotDue).plus(this.dailyOneInterest)
                this.totalInterestOutstanding = BigNumber(this.totalInterestOutstanding).plus(this.dailyOneInterest)
                console.log([" Total interest Charged", this.totalInterestCharged])
                return this.totalInterestCharged;

            }
        }
        console.log(["Daily Loan 1 interest", this.dailyOneInterest])
        return this.dailyOneInterest;

    }
}
