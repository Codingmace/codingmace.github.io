function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontType = "bold";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f8() {
	//function to make the text capitalize using DOM method
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}
