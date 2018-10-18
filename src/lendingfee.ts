let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// calculate lending fees on first drawdown date
export class LENDINGFEE extends LOAN {
    getLendingFee (){
        if (this.lendingFeeInterestServiced === "yes") {
            this.lendingFees = BigNumber(this.facilityAmount).multiply(BigNumber(this.lendingFeePercentage).div(100))
            console.log(["Lending fees", this.lendingFees])
            return this.lendingFees;
        } else if (this.lendingFeeInterestServiced === "no") {
            this.lendingFees = (BigNumber(this.facilityAmount).multiply(BigNumber(this.loanInterestRate).div(100)).multiply(BigNumber(this.lendingFeePercentage).div(100)));
            if (this.lendingFeeAddedToLoan === "yes") {
                this.feeDue =BigNumber(this.feeDue).plus(this.lendingFees)
                this.feePaid = BigNumber(this.feePaid).plus(this.lendingFees)
                this.balanceOfLoanOne = BigNumber(this.balanceOfLoanOne).plus(this.lendingFees)
                console.log(["Balance of loan 1",this.balanceOfLoanOne])
                return this.balanceOfLoanOne;
            } else if (this.lendingFeeAddedToLoan === "no") {
                this.feeCharged = BigNumber(this.feeCharged).plus(this.lendingFees)
                this.feeDue = BigNumber(this.feeDue).plus(this.lendingFees)
                this.feePaid = BigNumber(this.feePaid).plus(this.lendingFees)
                this.feeOutstanding = BigNumber(this.feeOutstanding).plus(this.lendingFees)
                console.log([" Due fees",this.feeDue])
                return this.feeDue;
            }
            console.log(["Lending fees", this.lendingFees])
            return this.lendingFees;
        }
    

    }
}
