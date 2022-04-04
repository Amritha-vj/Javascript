
let fname = document.getElementById('fname');
let form=document.getElementById('submit');

    
    // let text;
    // let gender=document.forms["myForm"]["gender"].value;
    // let address=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    // let gender=document.forms["myForm"]["gender"].value;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateForm();
    });
    function validateForm() {
    if (fname.value==''|| fname.value<3) {
        console.log(asds);
        alert('invalid');
        // return;
    }
    else {
        console.log(fdf);
    }
}
//     if (isNaN(fname) || fname < 1 || fname > 10) {
//         text = "Input not valid";
//       } else {
//         text = "Input OK";
//       }

//   }