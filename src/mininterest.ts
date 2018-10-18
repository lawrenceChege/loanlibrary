let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
// check whether minimum interest is met
export class MININTEREST extends LOAN {
    getMinimumInterest(){
        if (this.totalInterestCharged !== this.minimumInterestAmount) {
            this.balancingInterestCharged = BigNumber( this.minimumInterestAmount).minus(this.totalInterestCharged)
            this.balancingInterestDue = BigNumber( this.minimumInterestAmount).minus(this.totalInterestCharged)
            this.balancingInterestOutstanding = BigNumber( this.minimumInterestAmount).minus(this.totalInterestCharged)
            console.log([" Balancing Interest Charged", this.balancingInterestCharged])
            return  this.balancingInterestCharged;
        }
    }
}