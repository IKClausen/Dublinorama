


function alertUser(msg) {
alert(msg);
}


function calcPrice() {
var num1, num2, total;
			
			
num1=document.getElementById("quantity").value;
num2=document.getElementById("ticketprice").value; 
	
		result = document.getElementById("result").value = num1*num2;
	
document.getElementById("total").innerHTML = "The total price is " + result + " Euro";
return false;
}

function calcPrice2() {
var num1, num2, total2;
			
			
num1=document.getElementById("quantity2").value;
num2=document.getElementById("ticketprice2").value; 
	
		result = document.getElementById("result2").value = num1*num2;
	
document.getElementById("total2").innerHTML = "The total price is " + result + " Euro";
return false;
}

function calcPrice3() {
var num1, num2, total3;
			
			
num1=document.getElementById("quantity3").value;
num2=document.getElementById("ticketprice3").value; 
		
		result = document.getElementById("result3").value = num1*num2;
	
document.getElementById("total3").innerHTML = "The total price is " + result + " Euro";
return false;
}

function calcTotalPrice() {
var num1, num2, num3, totalprice, text;

num1=document.getElementById("result").value;
num2=document.getElementById("result2").value;
num3=document.getElementById("result3").value;
		if (num1 + num2 + num3 == 0){
			alert("Please select a quantity and calculate the price of the tickets desired");
		returnfalse;
		} else{
		result = parseInt(num1) + parseInt(num2) + parseInt(num3);
		text = "Purchase completed! The total price is " + result + " Euro";
		}
document.getElementById("totalprice").innerHTML = text;
return false;
}

$(document).ready(function(){
  $("#readmorebtn").click(function(){
    $("#moreinfo").slideDown("slow");
  });
});

function validate()

{
	var x = document.getElementById("fullname").value;
	var y = document.getElementById("email").value;
	var z = document.getElementById("phonenumber").value;
	var a = document.getElementById("message").value;
	var text = "Form successfully completed ✓"
				
	if (x==null || x=="" || y==null || y=="" || z==null || z=="" || a==null || a=="")
	{
		alert("Please verify that all fields have been completed");
		returnfalse;
	} else if(y.indexOf("@") === -1) 
	{
		alert("Please enter a valid email address");
		returnfalse;
	} else {
		text;
	}
	document.getElementById("validation").innerHTML = text;	
				
	return false;
}


 
