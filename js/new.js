let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let name = document.getElementById("fname");
  let gender = document.getElementsByClassName("common");
  let gen = document.getElementById("radio");
  let address = document.getElementById("address-1");
  let email = document.getElementById("email");
  let mobile = document.getElementById("mob");
  let read = document.getElementById("read").checked;
  let drive = document.getElementById("drive").checked;
  let garden = document.getElementById("garden").checked;
  let hobby = document.getElementById("check");
  let mark = document.getElementById("mark");
  let level= document.getElementById("vol");
  let user = document.getElementById("uname");
  let pass1 = document.getElementById("password-1");
  let pass2 = document.getElementById("password-2");
  let bday = document.getElementById("birthday");
  let files = document.getElementById("myFile");
  let phoneno = /[0-9]{10}/;
  let name_1 = /^[a-zA-Z]*$/;
  let special = /[!@#$%^&*]/;
  let house= /[A-Za-z0-9'\.\-\s\,]/;
  // let error = document.getElementsByClassName("errors");
  let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (name.value.trim() == "") 
  {
      name.nextElementSibling.innerHTML = "Name required";
      name.className="error-border";
  } 
  else if (!name.value.match(name_1)) 
  {
      name.className="error-border";
      name.nextElementSibling.innerHTML = "Enter a valid name ";
  } 
  else 
  {
      name.className="green-border";
      name.nextElementSibling.innerHTML = " ";
  }
  if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
      gen.nextElementSibling.innerHTML = "Gender required";
  } 
  else 
  {
      gen.nextElementSibling.innerHTML = " ";
  }

  if (address.value.trim() == "") 
  {
      address.className="error-border";
      address.nextElementSibling.innerHTML = "Address required";
  }
  else 
  {
      address.className="green-border";
      address.nextElementSibling.innerHTML = " ";
  }

  if (email.value.trim() == "") 
  { 
      email.className="error-border ";
      email.nextElementSibling.innerHTML = "Email required";
  }
  else if (email.value!=email.value.match(validemail)) 
  {
      email.className="error-border";
      email.nextElementSibling.innerHTML="Enter a valid Email";
  }
  else 
  {
      email.className="green-border";
      email.nextElementSibling.innerHTML = " ";
  }

  if (mobile.value.trim()=="") 
  {
      mobile.className="error-border";
      mobile.nextElementSibling.innerHTML = "Mobile number required";
  }
  else if (mobile.value!=mobile.value.match(phoneno)) 
  {
      mobile.className="error-border";
      mobile.nextElementSibling.innerHTML="Enter a valid number";
  }
  else 
  {
      mobile.className="green-border";
      mobile.nextElementSibling.innerHTML = " ";
  }
  if (read == false && drive == false && garden == false) 
  {
    hobby.nextElementSibling.innerHTML = "Hobby required";
  } 
  else {
      hobby.nextElementSibling.innerHTML = " ";
  }
  if (bday.value.trim() == "") 
  {
      bday.nextElementSibling.innerHTML = "DOB required";
  }
  else 
  {
      bday.nextElementSibling.innerHTML = " ";
  }

  if (mark.value.trim()=="") 
  {
      mark.nextElementSibling.innerHTML = "Percentage required";
      mark.className="error-border";
  }
  else if( mark.value <= 1 || mark.value >= 100) 
  {
      mark.className="error-border";
      mark.nextElementSibling.innerHTML="Enter a valid percentage";
  }
  else 
  {
      mark.className="green-border";
      mark.nextElementSibling.innerHTML = " ";
  }
  if(level.value.trim() == " ")
  {
      level.nextElementSibling.innerHTML="Range required";
  }
  else
  {
      level.nextElementSibling.innerHTML=" ";
  }
  if (files.value.trim() == "") 
  {
      files.nextElementSibling.innerHTML = "File required";
  } 
  else 
  {
      files.nextElementSibling.innerHTML = " ";
  }

  if (user.value.trim() == " ") 
  {
      user.nextElementSibling.innerHTML = "Username required";
      user.className="error-border";
  }
  else if(user.value!=user.value.match(validemail))
  {
      user.className="error-border";
      user.nextElementSibling.innerHTML="Enter a valid username";
  }
  else 
  {
      user.className="green-border";
      user.nextElementSibling.innerHTML = " ";
  }
  if (pass1.value.trim() == "") 
  {
      pass1.className="error-border";
      pass1.nextElementSibling.innerHTML = "Password required";
  }
  else if(pass1.value!=pass1.value.match(password))
  {
      pass1.className="error-border";
      pass1.nextElementSibling.innerHTML="Enter a valid password";
  }
  else 
  {
      pass1.className="green-border";
      pass1.nextElementSibling.innerHTML = " ";
  }
  if (pass2 != pass1) 
  {
      pass2.className="error-border";
      pass2.nextElementSibling.innerHTML="Confirm your password";
  }
  else 
  {
      pass2.className="green-border";
      pass2.nextElementSibling.innerHTML="";
  }
}