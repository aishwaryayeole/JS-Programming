
var count=3; 
function verficn()
{
	var uid = document.getElementById("lg_username").value;
	var pswd = document.getElementById("lg_password").value;
	
	
	if((uid=="" || uid==null) || (pswd== "" || pswd==null))
	{
		alert("Username or password field empty ! ");
	}
	else
	{
		
		var atpos = uid.indexOf("@");
		var dotpos = uid.lastIndexOf(".");
		if(uid=="admin@gmail.com" && pswd=="admin")
		{
			alert("Login Successfully! ");
			window.location.href = "file:///D:/Training%20assignments/Group_Assgn/success.htm"; // Redirecting to other page.
			
		}
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			alert("Not a valid e-mail address");
			
		}
		
	}
}
