var BankAcc = {
	accName : "ABC",
	accBal: 100,
	accNo: 0,
	
	withdraw: function(amt)
	{
		amt=2000;
		var wAmt=1000;
		return amt-wAmt;
	},
	
	deposit: function(amt)
	{
		amt=2000;
		var dAmt=500;
		return amt+dAmt;
	},
	
	getAccBal: function()
	{
		return this.accBal;
	},
	
	getAccNo: function()
	{
		return this.accNo;
	}
};

document.write(BankAcc.accName);
document.write(BankAcc.deposit());
document.write(BankAcc.getAccBal());