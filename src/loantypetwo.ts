import { LOAN  } from "../src/loanlibrary";
// calculate loan type two balance
export class LOANTYPETWO extends LOAN{
    getLoanTwoBalance(){
        this.dailyTwoInterest = this.balanceOfLoanTwo * this.dailyRateOfLoanTwo

    if (this.loanTwoInterestServiced === "yes") {
        this.totalInterestCharged = this.totalInterestCharged + this.dailyTwoInterest
        this.totalInterestDue = this.totalInterestDue + this.dailyTwoInterest
        this.totalInterestPaid = this.totalInterestPaid + this.dailyTwoInterest
        this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyTwoInterest
        console.log([" Total interest Charged", this.totalInterestCharged])
        return this.totalInterestCharged;
    } else if (this.loanTwoInterestServiced === "no") {
        if (this.loanTwoInterestCompounded === "yes") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyTwoInterest
            this.totalInterestDue = this.totalInterestDue + this.dailyTwoInterest
            this.totalInterestPaid = this.totalInterestPaid + this.dailyTwoInterest
            this.balanceOfLoanTwo = this.balanceOfLoanTwo + this.dailyTwoInterest
            console.log([" Loan 2 balance after daily interest of loan 1", this.balanceOfLoanTwo])
            return this.balanceOfLoanTwo;
        } else if (this.loanTwoInterestCompounded === "no") {
            this.totalInterestCharged = this.totalInterestCharged + this.dailyTwoInterest
            this.totalInterestNotDue = this.totalInterestNotDue + this.dailyTwoInterest
            this.totalInterestOutstanding = this.totalInterestOutstanding + this.dailyTwoInterest
            console.log([" Total interest Charged", this.totalInterestCharged])
            return this.totalInterestCharged;
        }
    }
    console.log(["Daily Loan 2 interest", this.dailyTwoInterest])
    return this.dailyTwoInterest;
    }
}
