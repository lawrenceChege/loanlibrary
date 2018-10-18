import { LOAN  } from "../src/loanlibrary";
// calculate lending fees on first drawdown date
export class LENDINGFEE extends LOAN {
    getLendingFee (){
        if (this.lendingFeeInterestServiced === "yes") {
            this.lendingFees = this.facilityAmount * (this.lendingFeePercentage / 100)
            console.log(["Lending fees", this.lendingFees])
            return this.lendingFees;
        } else if (this.lendingFeeInterestServiced === "no") {
            this.lendingFees = (this.facilityAmount * this.loanInterestRate / 100) * (this.lendingFeePercentage / 100)
            if (this.lendingFeeAddedToLoan === "yes") {
                this.feeDue += this.lendingFees
                this.feePaid += this.lendingFees
                this.balanceOfLoanOne += this.lendingFees
                console.log(["Balance of loan 1",this.balanceOfLoanOne])
                return this.balanceOfLoanOne;
            } else if (this.lendingFeeAddedToLoan === "no") {
                this.feeCharged += this.lendingFees
                this.feeDue += this.lendingFees
                this.feePaid += this.lendingFees
                this.feeOutstanding += this.lendingFees
                console.log([" Due fees",this.feeDue])
                return this.feeDue;
            }
            console.log(["Lending fees", this.lendingFees])
            return this.lendingFees;
        }
    

    }
}
