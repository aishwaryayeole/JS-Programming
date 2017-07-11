function prime(number)
{
	var num=number;
	var flag=0;
	 for(var i=2; i<=num/2; i++)
    {
       
        if(num%i==0)
        {
            flag=1;
            break;
        }
    }

    if (flag==0)
					alert(num +"is a prime number.");
    else
					alert(num +"is Not a prime number.");
    
    }

function checkPrime()
{
	var number1 = document.getElementById("nump1").value;
	var number2 = document.getElementById("nump2").value;
	
	prime(number1);
	prime(number2);
	
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
	var arr;
	var ele = document.getElementById("arr").value;
	arr.push(ele);

	var arr2=[9,6,7,12,4]; 
	var total;
	for( var i=0;i<5;i++)
	{
		total+=arr2[i];
	}
	var avg=total/5;
	
	var max=Math.max.apply(null, arr2);
	var min=Math.min.apply(null, arr2);


	document.getElementById("op").innerHTML = max;
	
}

opChar()
{
	var str = document.getElementById("vow").value;
	
	

}

palnd()
{		
alert("String is Palindrome");

	var str = document.getElementById("pal").value;
	
	var rev=str.split('').reverse().join();
	
	

}