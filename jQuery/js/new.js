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
        $('#myFile').on('change', function() {
            const size = 
               (this.files[0].size).toFixed(2);
               const filesize = Math.round((size / 1024));
               if (filesize > 2048) {
                files.siblings().removeClass("green").addClass("errors").text("File size must be 2 MB");
            } else {
                files.siblings().removeClass("errors").addClass("green").text("Uploaded");
            }
        });
        
        
        
        // else if (files.files.length > 0) {
        //     for (const i = 0; i <= files.files.length - 1; i++) {
        //         const fsize = files.files.item(i).size;
        //         alert(fsize);
        //         const file = Math.round((fsize / 1024));
        //         if (file >= 2048) {
        //             files.siblings().text("Select a file less than 2mb");
        //             // files.siblings().addClass("visible");
        //             // files.parentElement.querySelector('.fa-circle-exclamation').classList.add('visible');
        //         } else if (file < 1024) {
        //             // files.className = "green-border";
        //             files.siblings().text("Uploaded");
        //             // files.parentElement.querySelector('.fa-circle-exclamation').classList.remove('visible');
        //         } else {
        //             files.siblings().text("Select a file greater than 1mb");
        //         }
        //     }
        // } 
        // else {
        //     files.siblings().text("Uploaded");
        // }

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


