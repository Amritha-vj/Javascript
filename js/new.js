let form=document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let name = document.forms["myForm"]["fname"].value;
  let gender = document.getElementsByClassName("common");
  let address = document.forms["myForm"]["address-1"].value;
  let email = document.forms["myForm"]["email"].value;
  let mobile = document.forms["myForm"]["mob"].value;
  let read = document.getElementById("read").checked;
  let drive = document.getElementById("drive").checked;
  let garden = document.getElementById("garden").checked;
  let range=document.forms["myForm"]["vol"].value;
  // let color = document.forms["myForm"]["favcolor"].value;
  let mark = document.forms["myForm"]["mark"].value;
  let user = document.forms["myForm"]["uname"].value;
  let pass1 = document.forms["myForm"]["password-1"].value;
  let pass2 = document.forms["myForm"]["password-2"].value;
  let bday = document.forms["myForm"]["birthday"].value;
  let files = document.forms["myForm"]["file"].value;
  let phoneno = /[0-9]{10}/;
  let name_1=/^[a-zA-Z]*$/;
  let special = /[!@#$%^&*]/;
  let error = document.getElementsByClassName("errors");
  let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (name == "") {
    error[0].innerHTML = "Enter a valid name";
  }
  else if (name < 0 || name > 0) {
    error[0].innerHTML = "Numbers not allowed";
  }
  else if( name.match(name_1)){
    error[0].innerHTML=" ";
  }
  
  else if( name.match(special)){
    error[0].innerHTML="Special symbols not allowed ";
  }
  else {
    error[0].innerHTML = " ";
  }

  if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
    error[1].innerHTML = "Enter a gender";
  }
  else {
    error[1].innerHTML = " ";
  }
  if (address == "") {
    error[2].innerHTML = "Enter an address";
  }
  else {
    error[2].innerHTML = " ";
  }
  if (email == "" || !email.match(validemail)) {
    error[3].innerHTML = "Enter a valid email";
  }
  else {
    error[3].innerHTML = " ";
  }
  if (mobile == "" || !mobile.match(phoneno)) {

    error[4].innerHTML = "Enter a valid mobile number";

  }
  else {
    error[4].innerHTML = " ";
  }
  if (read == false && drive == false && garden == false) {
    error[5].innerHTML = "Enter a hobby";

  }
  else {
    error[5].innerHTML = " ";
  }
  if (bday == "") {
    error[6].innerHTML = "Enter a DOB";

  }
  else {
    error[6].innerHTML = " ";
  }
  // if (color == " ") {
  //   error[7].innerHTML = "Enter a color";
  // }
  // else {
  //   error[7].innerHTML = " ";
  // }
  if (mark == "" || mark <= 1 || mark >= 100) {
    error[7].innerHTML = "Enter a valid percentage";

  }
  else {
    error[7].innerHTML = " ";
  }
  if(range=" "){
    error[8].innerHTML = "Enter a range";
  }
  else{
    error[8].innerHTML = " ";
  }
  if (files == "") {
    error[9].innerHTML = "Upload a file";

  }
  else {
    error[9].innerHTML = " ";
  }
  
  if (user == "") {
    error[10].innerHTML = "Enter a valid username";

  }
  else {
    error[10].innerHTML = " ";
  }
  
  if (pass1 == "" || !pass1.match(password)) {
    error[11].innerHTML = "Enter a valid password";
  }
  else {
    error[11].innerHTML = " ";
  }
  
  if (pass2 != pass1) {
    error[12].innerHTML = "Confirm your password";

  }
  else {
    error[12].innerHTML = " ";
  }
  
}