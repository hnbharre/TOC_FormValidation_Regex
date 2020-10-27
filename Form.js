console.log("Form Validation");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password'); 
const cpassword = document.getElementById('cpassword'); 
let validEmail = false;
let validPhone = false;
let validUser = false;
let validPass = false;
let validCPass = false;

// var cp = password.value;

$('#failure').hide();
$('#success').hide();

// console.log(password, name, email, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

password.addEventListener('blur', ()=>{
    console.log("password is blurred");
    // Validate password here
    // let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
 
    let regex1 = /^(?=.*[a-zA-Z0-9])(?=.*[[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;         // Strong 
    // let regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\+\-%\*!@\$]){8,16}$/;   // Strong by Sir 
    // let regex2 = /^[a-z][A-Z][0-9](?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,12}$/;      // Moderate
    // let regex3 = /^(?=.*[a-z])(?=.*[0-9]){6,8}$/;                                 // Weak
    let str = password.value;

    // console.log(regex1, str);
    if(regex1.test(str)){
        console.log(regex1, str);
        console.log('Your Password is Strong');
        password.classList.remove('is-invalid');
        validPass = true;
    }
    // else if(regex2.test(str))
    // {   console.log(regex2, str);
    //     console.log('Your Password is Moderate');
    //     password.classList.remove('is-invalid');
    //     validPass = true;
    // }
    // else if(regex3.test(str))
    // { 
    //     console.log(regex3, str);
    //     console.log('Your Password is Weak');
    //     password.classList.remove('is-invalid');
    //     validPass = true;
    // }
    else{
        console.log('Your password is not valid');
        password.classList.add('is-invalid');
        validPass = false;
        
    }
})

cpassword.addEventListener('blur', ()=>{
    console.log("Confirm password is blurred");
    let regex1 = /^(?=.*[0-9])(?=.*[[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/; 
    let str = password.value;
    // console.log(regex1, str);
if(str.match(cpassword.value))
{
    if(regex1.test(str)){
        console.log(regex1, str);
        console.log('Your Password Matched');
        cpassword.classList.remove('is-invalid');
        validCPass = true;
    }
    else{
        console.log('Your password is not valid');
        cpassword.classList.add('is-invalid');
        validCPass = false;
        
    }
}
else
{
    console.log('Your Entered password is not matched');
    cpassword.classList.add('is-invalid');
    validCPass = false;
}

})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    // let regex = /^([0-9]){10}$/;
    let regex = /^(\+91)?[6+7+8+9]{1}[0-9]{9}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone, validPass, validCPass);
    
    // Submit your form here
    if(validEmail && validUser && validPhone && validPass && validCPass){
        let failure = document.getElementById('failure');

        console.log('Email, username, phone, password and confirm password are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Password, confirm password, phone, email or username are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
