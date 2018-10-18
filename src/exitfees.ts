import { LOAN  } from "../src/loanlibrary";
// check for exit fees
export class EXITFEES extends LOAN {
    getExitFees(){
        if (this.exitFeeAmount !== 0) {
            this.feeDue = this.feeDue + this.exitFeeAmount
            console.log([" Due Fees",this.feeDue])
            return this.feeDue;
        }
        if (this.exitFeeGDV !== 0) {
            this.exitFeeAmount = (this.exitFeeGDV / 100) * this.GDV
            this.feeDue = this.feeDue + this.exitFeeAmount
            this.feeOutstanding = this.feeOutstanding + this.exitFeeAmount
            console.log([" Due Fees",this.feeDue])
            return this.feeDue;
        }
        if (this.exitFeeLoan !== 0) {
            this.exitFeeAmount = (this.facilityAmount + this.totalInterestCharged) * (this.exitFeeLoan / 100)
            this.feeCharged = this.feeCharged + this.exitFeeAmount
            this.feeDue = this.feeDue + this.exitFeeAmount
            this.feeOutstanding = this.feeOutstanding + this.exitFeeAmount
            console.log([" Due Fees",this.feeDue])
            return this.feeDue;
        }
    
    }
}
