let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// check for exit fees
export class EXITFEES extends LOAN {
    getExitFees(){
        if (this.exitFeeAmount !== 0) {
            this.feeDue = BigNumber(this.feeDue).plus(this.exitFeeAmount)
            console.log([" Due Fees",this.feeDue])
            return this.feeDue;
        }
        if (this.exitFeeGDV !== 0) {
            this.exitFeeAmount = (BigNumber(this.exitFeeGDV).div(100)).multiply(this.GDV)
            this.feeDue = BigNumber(this.feeDue).plus(this.exitFeeAmount)
            this.feeOutstanding = BigNumber(this.feeOutstanding).plus(this.exitFeeAmount)
            console.log([" Due Fees",this.feeDue])
            return this.feeDue;
        }
        if (this.exitFeeLoan !== 0) {
            this.exitFeeAmount = (BigNumber(this.facilityAmount).plus(this.totalInterestCharged)).multiply(BigNumber(this.exitFeeLoan).multiply(100))
            this.feeCharged = BigNumber(this.feeCharged).plus(this.exitFeeAmount)
            this.feeDue = BigNumber(this.feeDue).plus(this.exitFeeAmount)
            this.feeOutstanding = BigNumber(this.feeOutstanding).plus(this.exitFeeAmount)
            console.log([" Due Fees",this.feeDue])
            return this.feeDue;
        }
    
    }
}
