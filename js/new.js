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
      name.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  } 
  else if (!name.value.match(name_1)) 
  {
      name.className="error-border";
      name.nextElementSibling.innerHTML = "Enter a valid name ";
      name.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  } 
  else 
  {
      name.className="green-border";
      name.nextElementSibling.innerHTML = " ";
      name.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
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
      address.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else if(address.value.length<=10)
  {
    address.className="error-border";
    address.nextElementSibling.innerHTML = "Enter a valid address";
    address.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else 
  {
      address.className="green-border";
      address.nextElementSibling.innerHTML = " ";
      address.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
  }

  if (email.value.trim() == "") 
  { 
      email.className="error-border ";
      email.nextElementSibling.innerHTML = "Email required";
      email.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else if (email.value!=email.value.match(validemail)) 
  {
      email.className="error-border ";
      email.nextElementSibling.innerHTML="Enter a valid Email";
      email.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else 
  {
      email.className="green-border";
      email.nextElementSibling.innerHTML = " ";
      email.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
  }

  if (mobile.value.trim()=="") 
  {
      mobile.className="error-border";
      mobile.nextElementSibling.innerHTML = "Mobile number required";
      mobile.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else if (mobile.value!=mobile.value.match(phoneno)) 
  {
      mobile.className="error-border";
      mobile.nextElementSibling.innerHTML="Enter a valid number";
      mobile.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else 
  {
      mobile.className="green-border";
      mobile.nextElementSibling.innerHTML = " ";
      mobile.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
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
      mark.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else if( mark.value <= 1 || mark.value >= 100) 
  {
      mark.className="error-border";
      mark.nextElementSibling.innerHTML="Enter a valid percentage";
      mark.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else 
  {
      mark.className="green-border";
      mark.nextElementSibling.innerHTML = " ";
      mark.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
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
      files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
  }
  else if (files.files.length > 0) 
  {
        for (const i = 0; i <= files.files.length - 1; i++) 
        {

            const fsize = files.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 2048) 
            {
                files.nextElementSibling.innerHTML = "Select a file less than 2mb";
                files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
            } 
            else if (file < 1024) 
            {
                files.className="green-border";
                files.nextElementSibling.innerHTML = "Uploaded";
                files.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
            }
            else 
            {
                files.nextElementSibling.innerHTML = "Select a file greater  than 500KB";
                files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
            }
        }
    } 
    else 
    {
        files.nextElementSibling.innerHTML=" ";
    }
    if (user.value.trim() == " ") 
    {
        user.nextElementSibling.innerHTML = "Username required";
        user.className="error-border";
        user.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
    }
    else if(user.value!=user.value.match(validemail))
    {
        user.className="error-border";
        user.nextElementSibling.innerHTML="Enter a valid username";
        user.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
    }
    else 
    {
        user.className="green-border";
        user.nextElementSibling.innerHTML = " ";
        user.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
    }
    if (pass1.value.trim() == "") 
    {
        pass1.className="error-border";
        pass1.nextElementSibling.innerHTML = "Password required";
        pass1.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
        }
    else if(pass1.value!=pass1.value.match(password))
    {
        pass1.className="error-border";
        pass1.nextElementSibling.innerHTML="Enter a valid password";
        pass1.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
    }
    else 
    {
        pass1.className="green-border";
        pass1.nextElementSibling.innerHTML = " ";
        pass1.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
    }
    if (pass2 != pass1) 
    {
        pass2.className="error-border";
        pass2.nextElementSibling.innerHTML="Confirm your password";
        pass2.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
    }
    else 
    {
        pass2.className="green-border";
        pass2.nextElementSibling.innerHTML="";
        pass2.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
    }
    }