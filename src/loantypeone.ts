import { LOAN  } from "../src/loanlibrary";
// calculate loan type one balance
export class LOANTYPEONE extends LOAN {
    getLoanOneBalance(){
        this.dailyOneInterest = this.balanceOfLoanOne * this.dailyRateOfLoanOne

        if (this.loanOneInterestServiced === "yes") {
            this.totalInterestCharged += this.dailyOneInterest
            this.totalInterestDue += this.dailyOneInterest
            this.totalInterestPaid += this.dailyOneInterest
            this.totalInterestOutstanding += this.dailyOneInterest
            console.log([" Total interest Charged", this.totalInterestCharged])
            return this.totalInterestCharged;
        } else if (this.loanOneInterestServiced === "no") {
            if (this.loanOneInterestComponded === "yes") {
                this.totalInterestCharged += this.dailyOneInterest
                this.totalInterestDue += this.dailyOneInterest
                this.totalInterestPaid += this.dailyOneInterest
                this.balanceOfLoanOne += this.dailyOneInterest
                console.log([" Loan 1 balance after daily interest of loan 1", this.balanceOfLoanOne])
                return this.balanceOfLoanOne;
            } else if (this.loanOneInterestComponded === "no") {
                this.totalInterestCharged += this.dailyOneInterest
                this.totalInterestNotDue += this.dailyOneInterest
                this.totalInterestOutstanding += this.dailyOneInterest
                console.log([" Total interest Charged", this.totalInterestCharged])
                return this.totalInterestCharged;

            }
        }
        console.log(["Daily Loan 1 interest", this.dailyOneInterest])
        return this.dailyOneInterest;

    }
}
