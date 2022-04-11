let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});
function validateForm() {
    let name = document.getElementById("fname");
    let gender = document.getElementById("radio");
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("others").checked;
    let address = document.getElementById("address-1");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mob");
    let read = document.getElementById("read").checked;
    let drive = document.getElementById("drive").checked;
    let garden = document.getElementById("garden").checked;
    let hobby = document.getElementById("check");
    let mark = document.getElementById("mark");
    let level = document.getElementById("vol");
    let user = document.getElementById("uname");
    let pass1 = document.getElementById("password-1");
    let pass2 = document.getElementById("password-2");
    let bday = document.getElementById("birthday");
    let files = document.getElementById("myFile");
    let phoneno = /[0-9]{10}/;
    let name_1 = /^[a-zA-Z]*$/;
    let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var usermail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name.value.trim() == "") {
        name.nextElementSibling.innerText = "Name required";
         errors(name);
    }
    else if (!name.value.match(name_1)) {
        name.nextElementSibling.innerText = "Enter a valid name ";
        errors(name);
    }
    else {
        success(name);
    }
    if (male== false && female == false && others == false) {
        gender.nextElementSibling.innerText = "Gender required";
    }
    else {
        gender.nextElementSibling.innerText = " ";
    }

    if (address.value.trim() == "") {
        address.nextElementSibling.innerText = "Address required";
        errors(address);
    }
    else if (address.value.length <= 10) {
        address.nextElementSibling.innerText = "Enter a valid address";
        errors(address);
    }
    else {
        success(address);
    }

    if (email.value.trim() == "") {
        email.nextElementSibling.innerText = "Email required";
        errors(email);
    }
    else if (email.value != email.value.match(validemail)) {
        email.nextElementSibling.innerText = "Enter a valid Email";
        errors(email);
    }
    else {
        success(email);
    }

    if (mobile.value.trim() == "") {
        mobile.nextElementSibling.innerText = "Mobile number required";
        errors(mobile);
    }
    else if (mobile.value != mobile.value.match(phoneno)) {
        mobile.nextElementSibling.innerText = "Enter a valid number";
        errors(mobile);
    }
    else {
        success(mobile);
    }
    if (read == false && drive == false && garden == false) {
        hobby.nextElementSibling.innerText = "Hobby required";
    }
    else {
        hobby.nextElementSibling.innerText = " ";
    }
    if (bday.value.trim() == "") {
        bday.nextElementSibling.innerText = "DOB required";
    }
    else {
        bday.nextElementSibling.innerText = " ";
    }

    if (mark.value.trim() == "") {
        mark.nextElementSibling.innerText = "Percentage required";
        errors(mark);
    }
    else if (mark.value <= 1 || mark.value >= 100) {
        mark.nextElementSibling.innerText = "Enter a valid percentage";
        errors(mark);
    }
    else {
        success(mark);
    }
    if (level.value.trim() == " ") {
        level.nextElementSibling.innerText = "Range required";
    }
    else {
        level.nextElementSibling.innerText = " ";
    }
    if (files.value.trim() == "") {
        files.nextElementSibling.innerText = "File required";
        files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
    }
    else if (files.files.length > 0)
    {
        for (const i = 0; i <= files.files.length - 1; i++)
        {
            const fsize = files.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 2048) {
                files.nextElementSibling.innerText = "Select a file less than 2mb";
                files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
            }
            else if (file < 2048)
            {
                files.className = "green-border";
                files.nextElementSibling.innerText = "Uploaded";
                files.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
            }
            else 
            {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
               
            }
        }
    } 
    else{
        success(files);
    }
    if (user.value.trim() == "") {
        user.nextElementSibling.innerText = "Username required";
        errors(user);
    }
    else if (user.value!=user.value.match(validemail)) {
        user.nextElementSibling.innerText = "Enter a valid username";
        errors(user);
    }
    else {
        success(user);
    }
    if (pass1.value.trim() == "") {
        pass1.nextElementSibling.innerText = "Password required";
        errors(pass1);
       
    }
    else if (pass1.value != pass1.value.match(password)) {
        pass1.nextElementSibling.innerText = "Enter a valid password";
        errors(pass1);
    }
    else {
        success(pass1);
    }
    if (pass2.value.trim() == "") {
        pass2.nextElementSibling.innerText = "Confirm Password required";
        errors(pass2);
       
    }
    else if (pass2.value != pass2.value.match(password)) {
        pass1.nextElementSibling.innerText = "Enter a valid password";
        errors(pass2);
    }
    else {
        success(pass2);
    }
    if (pass2.value != pass1.value) {
        pass2.nextElementSibling.innerText = "Confirm your password";
        errors(pass2);
    }
   
}
function errors (x) {
    x.className = "error-border";
    x.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
}
function success (y){
    y.nextElementSibling.innerText = "";
    y.className = "green-border";
    y.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
}