function validate(){

 var name =
        document.forms.RegForm.name.value;
    var email =
        document.forms.RegForm.email.value;
    var phone =
        document.forms.RegForm.mobile.value;
    var password =
        document.forms.RegForm.pwd.value;

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("mobileErr").innerHTML = "";
    document.getElementById("pwdErr").innerHTML = "";
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation
    
    if (name == "" || regName.test(name)) {
        let error = "Please enter your name properly.";
        document.getElementById("nameErr").innerHTML = error;
        return false;
    }
      
    if (email == "" || !regEmail.test(email)) {
        let error = "Please enter a valid e-mail address.";
        document.getElementById("emailErr").innerHTML = error;
        return false;
    }
    if (phone == "" || !regPhone.test(phone)) {
        let error = "Please enter valid phone number.";
        document.getElementById("mobileErr").innerHTML = error;
        return false;
    } 
    if (password == "" || password.length <6) {
        let error = "Please enter valid password";
	      document.getElementById("pwdErr").innerHTML = error;
        return false;
    }
  
    return true;
} 
