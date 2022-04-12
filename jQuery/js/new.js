$(document).ready(function () {
    $('#myForm').click(function () {
        console.log("error");
        let name = $("#fname");
        let gender = $("#radio");
        let male = $("#male").checked;
        let female = $("#female").checked;
        let others = $("#others").checked;
        let address = $("#address-1");
        let email = $("#email");
        let mobile = $("#mob");
        let read = $("#read").checked;
        let drive = $("#drive").checked;
        let garden = $("#garden").checked;
        let hobby = $("#check");
        let mark = $("#mark");
        let level = $("#vol");
        let user = $("#uname");
        let pass1 = $("#password-1");
        let pass2 = $("#password-2");
        let bday = $("#birthday");
        let files = $("#myFile");
        let phoneno = /[0-9]{10}/;
        let name_1 = /^[a-zA-Z]*$/;
        var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        var usermail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (name.val().trim() == "") {
            errors(name, "Name required");
        } else if (!name.val().match(name_1)) {
            errors(name, "Enter a valid name");
        } else {
            success(name);
        }
        if ($('input[type="radio"]:checked' && 'input[type="radio"]:checked' && 'input[type="radio"]:checked').length > 0) {
            $('#radio').siblings().text("");
        } else {
            $('#radio').siblings().text("Gender required");
        }
        if (address.val() == "") {
            errors(address, "Address required");
        } else if (address.val().length <= 10) {
            errors(address, "Enter a valid address");
        } else {
            success(address);
        }
        if (email.val().trim() == "") {
            errors(email, "Email required");
        } else if (email.val() != email.val().match(validemail)) {
            errors(email, "Enter a valid email");
        } else {
            success(email);
        }
        if (mobile.val().trim() == "") {
            errors(mobile, "Mobile number required");
        } else if (mobile.val() != mobile.val().match(phoneno)) {
            errors(mobile, "Enter a valid mobile number");
        } else {
            success(mobile);
        }
        if ($('input[type="checkbox"]:checked' || 'input[type="checkbox"]:checked' || 'input[type="checkbox"]:checked').length > 0) {
            hobby.siblings().text("");
        } else {
            hobby.siblings().text("Hobbies required");
        }
        if (bday.val().trim() == "") {
            bday.siblings().text("DOB required");
        } else {
            bday.siblings().text("");
        }
        if (user.val().trim() == "") {
            errors(user, "Username required");
        } else if (user.val() != user.val().match(validemail)) {
            errors(user, "Enter a valid username");
        } else {
            success(user);
        }
        if (pass1.val().trim() == "") {
            errors(pass1, "Password required");

        } else if (pass1.val() != pass1.val().match(password)) {
            errors(pass1, "Enter a valid password");
        } else {
            success(pass1);
        }
        if (mark.val().trim() == "") {
            errors(mark, "Percentage required");
        } else if (mark.val() <= 1 || mark.val() >= 100) {
            errors(mark, "Enter a valid percentage");
        } else {
            success(mark);
        }
        if (files.val().trim() == "") {
            files.siblings().text("File required");

        } else if (files.files.length > 0) {
            for (const i = 0; i <= files.files.length - 1; i++) {
                const fsize = files.files.item(i).size;
                alert(fsize);
                const file = Math.round((fsize / 1024));
                if (file >= 2048) {
                    files.siblings().text("Select a file less than 2mb");
                    // files.siblings().addClass("visible");
                    // files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
                } else if (file < 1024) {
                    // files.className = "green-border";
                    files.siblings().text("Uploaded");
                    // files.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
                } else {
                    files.siblings().text("Select a file greater than 1mb");

                }
            }
        } else {
            files.siblings().text("Uploaded");
        }

        if (pass2.val().trim() == "") {
            // pass2.nextElementSibling.innerText = ;
            errors(pass2, "Confirm Password required");

        } else if (pass2.val() != pass2.val().match(password)) {
            //  pass1.nextElementSibling.innerText = ;
            errors(pass2, "Enter a valid password");
        } else {
            success(pass2);
        }
        if (pass2.val() != pass1.val()) {
            // pass2.siblings().text();
            errors(pass2, "Confirm your password");
        }
        // else {
        //     pass2.siblings().text("Successful");
        // }



    });

    function errors(x, m) {
        x.next().text(m);
        x.addClass("error-border");
        x.siblings("i").addClass("visible");
    }

    function success(y) {
        y.next().text("");
        y.addClass("green-border");
        y.siblings("i").removeClass("visible");
    }


});

// function validateForm() {
//     let name = document.getElementById("fname");
//     let gender = document.getElementById("radio");
//     let male = document.getElementById("male").checked;
//     let female = document.getElementById("female").checked;
//     let others = document.getElementById("others").checked;
//     let address = document.getElementById("address-1");
//     let email = document.getElementById("email");
//     let mobile = document.getElementById("mob");
//     let read = document.getElementById("read").checked;
//     let drive = document.getElementById("drive").checked;
//     let garden = document.getElementById("garden").checked;
//     let hobby = document.getElementById("check");
//     let mark = document.getElementById("mark");
//     let level = document.getElementById("vol");
//     let user = document.getElementById("uname");
//     let pass1 = document.getElementById("password-1");
//     let pass2 = document.getElementById("password-2");
//     let bday = document.getElementById("birthday");
//     let files = document.getElementById("myFile");
//     let phoneno = /[0-9]{10}/;
//     let name_1 = /^[a-zA-Z]*$/;
//     let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
//     var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var usermail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (name.value.trim() == "") {
//         name.nextElementSibling.innerText = "Name required";
//          errors(name);
//     }
//     else if (!name.value.match(name_1)) {
//         name.nextElementSibling.innerText = "Enter a valid name ";
//         errors(name);
//     }
//     else {
//         success(name);
//     }
//     if (male== false && female == false && others == false) {
//         gender.nextElementSibling.innerText = "Gender required";
//     }
//     else {
//         gender.nextElementSibling.innerText = " ";
//     }

//     if (address.value.trim() == "") {
//         address.nextElementSibling.innerText = "Address required";
//         errors(address);
//     }
//     else if (address.value.length <= 10) {
//         address.nextElementSibling.innerText = "Enter a valid address";
//         errors(address);
//     }
//     else {
//         success(address);
//     }

//     if (email.value.trim() == "") {
//         email.nextElementSibling.innerText = "Email required";
//         errors(email);
//     }
//     else if (email.value != email.value.match(validemail)) {
//         email.nextElementSibling.innerText = "Enter a valid Email";
//         errors(email);
//     }
//     else {
//         success(email);
//     }

//     if (mobile.value.trim() == "") {
//         mobile.nextElementSibling.innerText = "Mobile number required";
//         errors(mobile);
//     }
//     else if (mobile.value != mobile.value.match(phoneno)) {
//         mobile.nextElementSibling.innerText = "Enter a valid number";
//         errors(mobile);
//     }
//     else {
//         success(mobile);
//     }
//     if (read == false && drive == false && garden == false) {
//         hobby.nextElementSibling.innerText = "Hobby required";
//     }
//     else {
//         hobby.nextElementSibling.innerText = " ";
//     }
//     if (bday.value.trim() == "") {
//         bday.nextElementSibling.innerText = "DOB required";
//     }
//     else {
//         bday.nextElementSibling.innerText = " ";
//     }

//     if (mark.value.trim() == "") {
//         mark.nextElementSibling.innerText = "Percentage required";
//         errors(mark);
//     }
//     else if (mark.value <= 1 || mark.value >= 100) {
//         mark.nextElementSibling.innerText = "Enter a valid percentage";
//         errors(mark);
//     }
//     else {
//         success(mark);
//     }
//     if (level.value.trim() == " ") {
//         level.nextElementSibling.innerText = "Range required";
//     }
//     else {
//         level.nextElementSibling.innerText = " ";
//     }
//     if (files.value.trim() == "") {
//         files.nextElementSibling.innerText = "File required";
//         files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
//     }
//     else if (files.files.length > 0)
//     {
//         for (const i = 0; i <= files.files.length - 1; i++)
//         {
//             const fsize = files.files.item(i).size;
//             const file = Math.round((fsize / 1024));
//             if (file >= 2048) {
//                 files.nextElementSibling.innerText = "Select a file less than 2mb";
//                 files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
//             }
//             else if (file < 2048)
//             {
//                 files.className = "green-border";
//                 files.nextElementSibling.innerText = "Uploaded";
//                 files.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
//             }
//             else 
//             {
//                 document.getElementById('size').innerHTML = '<b>'
//                 + file + '</b> KB';

//             }
//         }
//     } 
//     else{
//         success(files);
//     }
//     if (user.value.trim() == "") {
//         user.nextElementSibling.innerText = "Username required";
//         errors(user);
//     }
//     else if (user.value!=user.value.match(validemail)) {
//         user.nextElementSibling.innerText = "Enter a valid username";
//         errors(user);
//     }
//     else {
//         success(user);
//     }
//     if (pass1.value.trim() == "") {
//         pass1.nextElementSibling.innerText = "Password required";
//         errors(pass1);

//     }
//     else if (pass1.value != pass1.value.match(password)) {
//         pass1.nextElementSibling.innerText = "Enter a valid password";
//         errors(pass1);
//     }
//     else {
//         success(pass1);
//     }
//     if (pass2.value.trim() == "") {
//         pass2.nextElementSibling.innerText = "Confirm Password required";
//         errors(pass2);

//     }
//     else if (pass2.value != pass2.value.match(password)) {
//         pass1.nextElementSibling.innerText = "Enter a valid password";
//         errors(pass2);
//     }
//     else {
//         success(pass2);
//     }
//     if (pass2.value != pass1.value) {
//         pass2.nextElementSibling.innerText = "Confirm your password";
//         errors(pass2);
//     }

// }
// function errors (x) {
//     x.className = "error-border";
//     x.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
// }
// function success (y){
//     y.nextElementSibling.innerText = "";
//     y.className = "green-border";
//     y.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
// }