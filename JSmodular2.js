
function BankAcc(accName,accBal,accNo) {
this.accName=accName,
this.accBal=accBal,	
this.accNo=accNo,

	function Withdraw(amt)
	{
	amt=2000;
	var wAmt=1000;
	return amt-wAmt;
	}	,

	function Deposit(amt)
	{
		amt=2000;
		var dAmt=500;
		return amt+dAmt;
	},

	function getAccBal()
	{
		return this.accBal;
	},
	
	function getAccNo()
	{
		return this.accNo;
	}
	
	return{
		
		MDeposit : Deposit
		
		
	}
}

var objBankAcc = new BankAcc("Aish",100,1);
document.write(objBankAcc.accName);

document.write(BankAcc.MDeposit);

