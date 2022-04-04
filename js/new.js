function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    let gender = document.getElementsByClassName("common");
    let address=document.forms["myForm"]["address-1"].value;
    let email=document.forms["myForm"]["email"].value;
    let mobile=document.forms["myForm"]["mob"].value;
    let read = document.getElementById("read").checked;
    let drive = document.getElementById("drive").checked;
    let garden = document.getElementById("garden").checked;
    let color = document.forms["myForm"]["favcolor"].value;
    let mark=document.forms["myForm"]["mark"].value;
    let user=document.forms["myForm"]["uname"].value;
    let pass1=document.forms["myForm"]["password-1"].value;
    let pass2=document.forms["myForm"]["password-2"].value;
    let bday=document.forms["myForm"]["birthday"].value;
    let files=document.forms["myForm"]["file"].value;
    let phoneno = /[0-9]{10}/;
    let gpa=/[1-100]/;
    let special=/[!@#$%^&*]/;
    let password=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let pass2=document.forms["myForm"]["password-2"].value;
    // let pass2=document.forms["myForm"]["password-2"].value;
    // let pass2=document.forms["myForm"]["password-2"].value;
    if (name == "") {
      console.log(sdsd);
      alert("Name must be filled out");
      return false;
    }
    if (name == 0||name<0 ||name>0||name.match(special)) {
        alert("Numbers not allowed");
        return false;
      }

    if (gender[0].checked == false && gender[1].checked == false  && gender[2].checked == false) {
        alert("Gender must be filled out");
        return false;
      }
      if (address == "") {
        alert("Address must be filled out");
        return false;
      }
      if (email == ""|| !email.match(validRegex)) {
        alert("Email must be filled out");
        return false;
      }
      if (mobile == ""|| !mobile.match(phoneno)) {
        
        alert("Mobile number must be filled out");
        return false;
      }
      if (read == false && drive == false  && garden == false) {
        alert("hobby must be filled out");
        return false;
      }
     
      if (mark == ""||mark<=1||mark>=100) {
        alert("Enter a valid cgpa");
        return false;
      }
      if (color == "") {
        alert("Color must be filled out");
        return false;
      }
      if (files == "") {
        alert("File must be uploaded");
        return false;
      }
      
      if (user == "") {
        alert("Username must be filled out");
        return false;
      }
      if (pass1 == ""||!pass1.match(password)) {
        alert("password must be filled out");
        return false;
      }
      if (pass2 == ""){
        alert("retype passwod must be filled out");
        return false;
      }
      if((pass1!=pass2))
      {
          alert("Confirm your password correctly");
          return false;
      }
      if (bday == "") {
        alert("DOB must be filled out");
        return false;
      }
    } 



    
    