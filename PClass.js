 class Account
{
    constructor(id,name,balance)
    {
        this.id=id;
        this.name=name;
        this.balance=balance;
    }

    /*get balance()
    {
        return this._balance;
    }

     set balance(val)
    {
       this._balance=val;
    }

     get id()
    {
        return this._id;
    }

     set id(val)
    {
       this._id=val;
    }*/



}

 class SavingAccount extends Account
{
    constructor(id,name,balance,interest)
    {
        super(id,name,balance);
        this.interest=interest;
    }

     /*get interest()
    {
        return this._interest;
    }
    
     set interest(val)
    {
       super._interest=val;
    }


     get id()
    {
        return this._id;
    }

     set id(val)
    {
       super._id=val;*/
    

    getBalance()
    {
        return this.balance+this.interest;
    }


}

 class CurrentAccount extends Account
{
     constructor(id,name,balance,cash_credit)
    {
        super(id,name,balance);
        this.cash_credit=cash_credit;
    }


     getBalance()
    {
        return this.balance+this.cash_credit;
    }



}

let sa1 = new SavingAccount(101,"ash",1000,100);
let sa2 = new SavingAccount(106,"pqr",1000,100);
let sa3 = new SavingAccount(111,"abc",1000,100);
//let sa4 = new SavingAccount(114,"lmn",1000,60);

//let ca1 = new CurrentAccount(106,"pqr",5000,100);
let ca2 = new CurrentAccount(111,"abc",1000,1000);
let ca3 = new CurrentAccount(145,"Sam",1000,1000);
//let ca4 = new CurrentAccount(156,"Sara",54000,6600);
//let ca5 = new CurrentAccount(177,"Maya",45000,7000);

/*function totalAccBal(x)
{
    let totalAccBal=0;
    let bal=x.balance;
    let int=x.interest;
    let cash=x.cash_credit;

    totalAccBal=bal+int+cash;
    return totalAccBal;

}*/

function totalBankBalance(a,b,c,d,e)
{
    let totalBal=0;
    let aB= a.getBalance();
    let bB= b.getBalance();
    let cB= c.getBalance();
    let dB= d.getBalance();
    let eB= e.getBalance();

    totalBal=aB+bB+cB+dB+eB;

    console.log("Bank Bal: ",totalBal);
}


export function main()
{

totalBankBalance(sa1,sa2,sa3,ca2,ca3);

}

