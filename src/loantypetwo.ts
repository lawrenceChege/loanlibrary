let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// calculate loan type two balance
export class LOANTYPETWO extends LOAN{
    getLoanTwoBalance(){
        this.dailyTwoInterest = this.balanceOfLoanTwo * this.dailyRateOfLoanTwo

    if (this.loanTwoInterestServiced === "yes") {
        this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyTwoInterest)
        this.totalInterestDue = BigNumber(this.totalInterestDue).plus(this.dailyTwoInterest)
        this.totalInterestPaid = BigNumber(this.totalInterestPaid).plus(this.dailyTwoInterest)
        this.totalInterestOutstanding = BigNumber(this.totalInterestOutstanding).plus(this.dailyTwoInterest)
        console.log([" Total interest Charged", this.totalInterestCharged])
        return this.totalInterestCharged;
    } else if (this.loanTwoInterestServiced === "no") {
        if (this.loanTwoInterestCompounded === "yes") {
            this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyTwoInterest)
            this.totalInterestDue = BigNumber(this.totalInterestDue).plus(this.dailyTwoInterest)
            this.totalInterestPaid = BigNumber(this.totalInterestPaid).plus(this.dailyTwoInterest)
            this.balanceOfLoanTwo = BigNumber(this.balanceOfLoanTwo).plus(this.dailyTwoInterest)
            console.log([" Loan 2 balance after daily interest of loan 1", this.balanceOfLoanTwo])
            return this.balanceOfLoanTwo;
        } else if (this.loanTwoInterestCompounded === "no") {
            this.totalInterestCharged = BigNumber(this.totalInterestCharged).plus(this.dailyTwoInterest)
            this.totalInterestNotDue = BigNumber(this.totalInterestNotDue).plus(this.dailyTwoInterest)
            this.totalInterestOutstanding = BigNumber(this.totalInterestOutstanding).plus(this.dailyTwoInterest)
            console.log([" Total interest Charged", this.totalInterestCharged])
            return this.totalInterestCharged;
        }
    }
    console.log(["Daily Loan 2 interest", this.dailyTwoInterest])
    return this.dailyTwoInterest;
    }
}
