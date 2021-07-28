function clsAc() 
{
	document.getElementById("ans").innerHTML = "";
}
function temp()
{
	document.getElementById("ans").innerHTML=document.getElementById("ans").innerHTML + n
}
function add(n) 
{
	document.getElementById("ans").innerHTML=document.getElementById("ans").innerHTML + n
}

function Addop()
{
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = " + ";
}

function minusop() 
{
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = " - ";	
}

function multiop()
{
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = " * ";
}

function divop()
{
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = " / ";
}

function final()
{
	newValue = document.getElementById("ans").innerHTML;

	if(tempOp==" + ")
	{
		document.getElementById("ans").innerHTML = parseInt(tempValue) + parseInt(newValue)
	}
	else if (tempOp==" - ")
	{
		document.getElementById("ans").innerHTML = parseInt(tempValue) - parseInt(newValue)
	}
	else if (tempOp==" * ")
	{
		document.getElementById("ans").innerHTML = parseInt(tempValue) * parseInt(newValue)
	}
	else if (tempOp==" / ")
	{
		document.getElementById("ans").innerHTML = parseInt(tempValue) / parseInt(newValue)
	}


	
}