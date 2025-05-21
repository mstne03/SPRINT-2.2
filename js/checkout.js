
// Exercise 6
let error = 0;
// Get the input fields
const allInputs = document.querySelectorAll(".form-control");
let button = document.getElementById("btn");
let fName = document.getElementById("fName");
let fLastN = document.getElementById("fLastN");
let fEmail = document.getElementById("fEmail");
let fPassword = document.getElementById("fPassword");
let fPhone = document.getElementById("fPhone");

// Get the error elements
let errorName = document.getElementById("errorName");
let errorLastN = document.getElementById("errorLastN");
//Regex for text inputs
const regexText = /^[a-zA-Z]{3,}$/;

let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
//Regex for mail & password inputs
const regexMail = /@(gmail|hotmail|yahoo)\.com$/;
const regexPsw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&!?¿])[a-zA-Z\d@#$%&!?¿]{8,}$/;

let errorPhone = document.getElementById("errorPhone");
//Regex for phone imput
const regexPhone = /^[0-9]+$/;

function validate() {
	// Validate fields entered by the user: name, phone, password, and email
	errorName.style.display = "none";
	errorLastN.style.display = "none";
	errorEmail.style.display = "none";
	errorPhone.style.display = "none";
	errorPassword.style.display = "none";

	fName.style.border = "none";
	fLastN.style.border = "none";
	fEmail.style.border = "none";
	fPhone.style.border = "none";
	fPassword.style.border = "none";

	allInputs.forEach(input => {
		if (input.value === "") error++;
	});

	if (fName.value.length < 3 || 
		!(regexText.test(fName.value))) {
		errorName.style.display = "block";
		fName.style.border = "1px solid red";
		error++;
	};

	if (fLastN.value.length < 3 || 
		!(regexText.test(fLastN.value))) {
		errorLastN.style.display = "block";
		fLastN.style.border = "1px solid red";
		error++;
	};

	if ((fEmail.value.length < 3) || 
		!(regexMail.test(fEmail.value))) {
		errorEmail.style.display = "block";
		fEmail.style.border = "1px solid red";
		error++;
	};

	if (!(regexPhone.test(fPhone.value))) {
		errorPhone.style.display = "block";
		fPhone.style.border = "1px solid red";
		error++;
	};
	
	if (!(regexPsw.test(fPassword.value))) {
		errorPassword.style.display = "block";
		fPassword.style.border = "1px solid red";
		error++;
	}

	if (error>0){
		alert("Error");
	}else{
		alert("OK");
	}
}

button.addEventListener("click", (e) => {
	e.preventDefault();
	validateSubmit();
});