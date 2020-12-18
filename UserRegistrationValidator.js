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
        console.log(`${lName} is Valid last name!`);
    }
    else {
        console.log(`${lName} is InValid last name!`);
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

console.log(`\nWelcome to User Registration Program`);
isValidFirstName(`Raj`);
isValidFirstName(`Ra`);
isValidFirstName(`raj`);

isValidLastName(`Patil`);
isValidLastName(`patil`);
isValidLastName(`pat`);

isValidEmail('abc@yahoo.com');
isValidEmail('abc');
