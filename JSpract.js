function prime()
{
	var number1 = document.getElementById("nump1").value;
	var number2 = document.getElementById("nump2").value;
	var flag=0;
	 for(var i=2; i<=number1/2; i++)
    {
       
        if(number1%i==0)
        {
            flag=1;
            break;
        }
    }

    if (flag==0)
					alert(number1 +"is a prime number.");
    else
					alert(number1 +"is Not a prime number.");
    
    return 0;
}



function showBDate()
{
var d=new Date();
var year=d.getFullYear();
var myage = document.getElementById("age").value;
var bdate = year-myage;

document.write("Birth Year is: "+bdate);
}

function greetUser()
{
	var name = prompt("Hey, what is your name ?","");
	if(name!=null && name!=" ")
	{
	document.write("Welcome "+name);
	}
}

function div()
{
	try
	{
	var number1 = document.getElementById("num1").value;
	var number2 = document.getElementById("num2").value;
	
	if(number2==0)
		throw(87);
	
	var result= number1/number2;
	document.write("Result is: "+result);


	}
	catch(err)
	{
		if(err==87)
				alert("Please enter Non-Zero number. ");

	}	

}


function table()
{
	var number = document.getElementById("num_table").value;
	
	for(i=1;i<=10;i++)
	{
		var mult=number*i;
		document.write(mult+"\t");

	}
	
	var r= confirm("Do you want to Continue?");
	if(r==true)
		window.location.href= "file:///D:/Training%20assignments/Practicals/JS1.html";
	else
		return;
}


function alphabet()
{
		var ch = document.getElementById("chars").value;
		if(ch=='a' || ch=='e' ||ch=='i' ||ch=='o' ||ch=='u' )
					alert(ch+" is vowel.");
		else
					alert(ch+" is not vowel.");



}

function fact()
{
		var number = document.getElementById("n_fact").value;
		var factorial=1;
		if(number == 0)
							document.write("fact is: 0");

		if(number<0)
					alert("Enter positive number");

		for(var i=1; i<=number; i++)
        {
            factorial *= i;            
        }
				document.write("fact is: "+factorial);


}
var count=3; 
function verficn()
{
	var uid = document.getElementById("uid").value;
	var pswd = document.getElementById("pswd").value;
	
	
	if(uid=="admin" && pswd=="admin")
		alert("Login Successfully! ");
	
	if(count==0){
			document.write("Error! ");
		}

	if((uid!="admin" || pswd!="admin")&& count!=0)
	{
		count--;
		alert(count+" Try again! ");
	}

}

function arr_op()
{
	var arr[10];
}