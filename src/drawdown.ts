let BigNumber = require('big-number')
import { LOAN  } from "../src/loanlibrary";
export class DRAWDOWN extends LOAN{
    getDrawdownAmount (undrawnBalance: number, facilityAmount:number, loanType:number, balanceOfLoanOne:number){
    this.undrawnBalance = this.facilityAmount
    console.log([" Undrawn balance", this.undrawnBalance])
    if (this.loanType === 1) {
        this.drawdownOneAmount = BigNumber(this.drawdownOneAmount).plus(this.balanceOfLoanOne);
        this.undrawnBalance = BigNumber(this.undrawnBalance).minus(this.drawdownOneAmount); 
        console.log([" First Draw down Amount", this.drawdownOneAmount])
        return this.drawdownOneAmount;

    } else if (this.loanType === 2) {
        this.drawdownOneAmount = BigNumber(this.drawdownOneAmount).plus(this.balanceOfLoanTwo)
        this.undrawnBalance = BigNumber(this.undrawnBalance).minus(this.drawdownOneAmount)
        console.log([" First Draw down Amount", this.drawdownOneAmount])
        return this.drawdownOneAmount;

    }
    return this.undrawnBalance;

    }
}

