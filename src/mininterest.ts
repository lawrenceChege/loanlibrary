import { LOAN  } from "../src/loanlibrary";
// check whether minimum interest is met
export class MININTEREST extends LOAN {
    getMinimumInterest(){
        if (this.totalInterestCharged !== this.minimumInterestAmount) {
            this.balancingInterestCharged = this.minimumInterestAmount - this.totalInterestCharged
            this.balancingInterestDue = this.minimumInterestAmount - this.totalInterestCharged
            this.balancingInterestOutstanding = this.minimumInterestAmount - this.totalInterestCharged
            console.log([" Balancing Interest Charged", this.balancingInterestCharged])
            return  this.balancingInterestCharged;
        }
    }
}