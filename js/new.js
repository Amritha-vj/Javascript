form.addEventListener("myForm",(e)=>
{
    e.preventDefault();
    validate();
});
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
    let error=document.getElementsByClassName("errors");
    let password=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let pass2=document.forms["myForm"]["password-2"].value;
    // let pass2=document.forms["myForm"]["password-2"].value;
    // let pass2=document.forms["myForm"]["password-2"].value;
    if (name == "") {
      error[0].innerHTML="Enter a valid name";
    }
    if (name<0 ||name>0||name.match(special)) {
      error[0].innerHTML="Numbers not allowed"; 
      }

    if (gender[0].checked == false && gender[1].checked == false  && gender[2].checked == false) {
      error[1].innerHTML="Enter a gender";
      }
      if (address == "") {
        error[2].innerHTML="Enter an address";
       
      }
      if (email == ""|| !email.match(validRegex)) {
        error[3].innerHTML="Enter a valid email";
       
      }
      if (mobile == ""|| !mobile.match(phoneno)) {
        
        error[4].innerHTML="Enter a valid mobile number";
        
      }
      if (read == false && drive == false  && garden == false) {
        error[5].innerHTML="Enter a hobby";
       
      }
     
      if (mark == ""||mark<=1||mark>=100) {
        error[6].innerHTML="Enter a valid percentage";
        
      }
      if (color == "") {
        error[7].innerHTML="Enter a color";
       
      }
      if (files == "") {
        error[8].innerHTML="Upload a file";
        
      }
      
      if (user == "") {
        error[9].innerHTML="Enter a valid username";
        
      }
      if (pass1 == ""||!pass1.match(password)) {
        error[10].innerHTML="Enter a valid password";
        
      }
      if (pass2 == ""){
        error[11].innerHTML="Enter a valid password";
        
      }
      if((pass1!=pass2))
      {
        error[12].innerHTML="Confirm your password";
         
      }
      if (bday == "") {
        error[13].innerHTML="Enter a DOB";
       
      }
    } 



    
    