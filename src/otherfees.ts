let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// calculate other fees on first drawdown date
export class OTHERFEES extends LOAN{
    getOtherFees(){
        if (this.OtherFeesAddedToLoan === "yes") {
            this.feeDue = BigNumber(this.feeDue).plus(this.otherFeesPayable)
            this.feePaid = BigNumber(this.feePaid).plus(this.otherFeesPayable)
            this.balanceOfLoanOne = BigNumber(this.balanceOfLoanOne).plus(this.otherFeesPayable)
            console.log([" Loan 1 balance after adding other fees", this.balanceOfLoanOne])
            return  this.balanceOfLoanOne;
        } else if (this.OtherFeesAddedToLoan === "no") {
            this.feeDue = BigNumber(this.feeDue).plus(this.otherFeesPayable)
            this.feePaid = BigNumber(this.feePaid).plus(this.otherFeesPayable)
            this.feeOutstanding = BigNumber(this.feeOutstanding).plus(this.otherFeesPayable)
            this.feeCharged = BigNumber(this.feeCharged).plus(this.otherFeesPayable)
            console.log([" Due Fees", this.feeDue])
            return  this.feeDue;
    
        }

    }
}
