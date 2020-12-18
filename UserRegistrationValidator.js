isValidFirstName = (fName) => {
    let pattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (pattern.test(fName)) {
        console.log(`${fName} is Valid first name!`);
    }
    else {
        console.log(`${fName} is InValid first name!`);
    }
}

isValidLastName = (lName) => {
    let pattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (pattern.test(lName)) {
        console.log(`${lName} is Valid last name!`);
    }
    else {
        console.log(`${lName} is InValid last name!`);
    }
}

console.log(`\nWelcome to User Registration Program`);
isValidFirstName(`Raj`);
isValidFirstName(`Ra`);
isValidFirstName(`raj`);

isValidLastName(`Patil`); 
isValidLastName(`patil`); 
isValidLastName(`pat`);