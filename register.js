const form=document.getElementById("form");
const fname=document.getElementById("fullname");
const id=document.getElementById("id");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const phone=document.getElementById("phone");

form.addEventListener('submit',e => {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputcontrol = element.parentElement;
  const errorDisplay=inputcontrol.querySelector('.error');
  message.style.color='red';
  errorDisplay.innerText = message;
  inputcontrol.classList.add('error');
  inputcontrol.classList.remove('success');
  message.style.color='red';
};
const setSuccess = element => {
  const inputcontrol = element.parentElement;
  const errorDisplay=inputcontrol.querySelector('.error');

  errorDisplay.innerText ='';
  inputcontrol.classList.remove('success');
  inputcontrol.classList.add('error');
}

const validateInputs=() => {
const fnamevalue=fname.value.trim();
const idvalue=id.value.trim();
const emailvalue=email.value.trim();
const passwordvalue=password.value.trim();
const password2value=password2.value.trim();
const phonevalue=phone.value.trim();
if(fnamevalue===''){
  setError(fname,'Name is required');
  fname.style.borderColor='red';
} else{
  setSuccess(fname);
}

const idregex = /^[NSOR][0-9]{6}$/;

if (idregex.test(idvalue)) {
  setSuccess(id);
} else {
  setError(id,'Enter valid ID number');
}
const emailregex = /^[NSOR][0-9]{6}(@rgukt)[nsro](.ac.in)$/;
if(emailregex.test(emailvalue))
{
  setSuccess(email);
}
else{
  setError(email,'Enter valid email');
}
if(passwordvalue.length < 8){
  setError(password,'Password length must be atleast 8 character');
} else{
  setSuccess(password);
}
if(password2value.length < 8){
  setError(password2,'Password length must be atleast 8 characters');
}else if(passwordvalue!==password2value) {
  setError(password2,'Password and confirm password must be same');
}else{
  setSuccess(password2);
}
 
};


/*function validateForm() 
  {
        var FullNameInput = document.getElementById("FullName").value;
      var emailInput = document.getElementById("email").value;
      var passwordInput = document.getElementById("password").value;
      var phoneNumberInput = document.getelementById("phoneNumber").value;
      var confirmpassword=document.getElementById("confirmpassword").value;
      {
      // Check if inputs are not empty
      if (FullNameInput.value === "" || emailInput.value === "" || passwordInput.value === "" ) {
        alert("Please fill in all fields");
        return false;
      }
    
      // Check if email is valid
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address");
        return false;
      }
    
      // Check if password is at least 8 characters long
      if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
      }
      // Check if ph.no is only digits
      if(isNaN(phoneNumberInput.value && phoneNumberInput.value.lengt!=10))
      {
        alert("enter digits only");
        return false;
      }
       // If all checks pass, return true to submit the form
       // If all validations pass, you can submit the form or perform further actions
    //document.getElementById('myForm').submit(); // Uncomment to submit the form
    alert('Form submitted successfully!');
      }
  return true;
}  */