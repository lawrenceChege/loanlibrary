import { LOAN  } from "../src/loanlibrary";
// calculate other fees on first drawdown date
export class OTHERFEES extends LOAN{
    getOtherFees(){
        if (this.OtherFeesAddedToLoan === "yes") {
            this.feeDue = this.feeDue + this.otherFeesPayable
            this.feePaid += this.otherFeesPayable
            this.balanceOfLoanOne += this.otherFeesPayable
            console.log([" Loan 1 balance after adding other fees", this.balanceOfLoanOne])
            return  this.balanceOfLoanOne;
        } else if (this.OtherFeesAddedToLoan === "no") {
            this.feeDue += this.otherFeesPayable
            this.feePaid += this.otherFeesPayable
            this.feeOutstanding += this.otherFeesPayable
            this.feeCharged += this.otherFeesPayable
            console.log([" Due Fees", this.feeDue])
            return  this.feeDue;
    
        }

    }
}
