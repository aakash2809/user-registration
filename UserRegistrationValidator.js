isValidFirstName = (fName) => {
    let FirstNamePattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (FirstNamePattern.test(fName)) {
        console.log(`${fName} is Valid first name!`);
    }
    else {
        console.log(`${fName} is InValid first name!`);
    }
}

// Last name validator fucntion
isValidLastName = (lName) => {
    let pattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (pattern.test(lName)) {
        console.log(`${lName} is a Valid last name!`);
    }
    else {
        console.log(`${lName} is an InValid last name!`);
    }
}

// Email validator fucntion
isValidEmail = (email) => {
    let emailPattern = new RegExp(`^([A-Za-z\\d-_\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
    if (emailPattern.test(email)) {
        console.log(`${email} is a Valid email id!`);
    }
    else {
        console.log(`${email} is an InValid email id!`);
    }
}

//Mobile Number validator function
isValidMobileNumber = (mobileNumber) => {
    let mobileNumberPattern = new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
    if (mobileNumberPattern.test(mobileNumber)) {
        console.log(`${mobileNumber} is a Valid mobile number!`);
    }
    else {
        console.log(`${mobileNumber} is an InValid mobile number!`);
    }
}

//Password validator function
isValidPassword = (password) => {
    let passwordPattern = new RegExp(`^(?=.*[A-Z])[a-zA-Z0-9!?.+-~!@#$%^&*_]{8,}$`);
    if (passwordPattern.test(password)) {
        console.log(`${password} is a Valid password!`);
    }
    else {
        console.log(`${password} is an InValid password!`);
    }
}

console.log(`\nWelcome to User Registration Program`);
isValidFirstName(`Raj`);
isValidFirstName(`Ra`);
isValidFirstName(`raj`);

isValidLastName(`Patil`);
isValidLastName(`patil`);
isValidLastName(`pat`);

isValidEmail('abc@yahoo.com');
isValidEmail('abc');

isValidMobileNumber(`91 8819992553`);
isValidMobileNumber(`91 88199925`);
isValidMobileNumber(`918819992553`);
isValidMobileNumber(`8819992553`);

isValidPassword(`dfjjk67`);
isValidPassword(`dfjjk67a`);
isValidPassword(`dfjjk67A`);