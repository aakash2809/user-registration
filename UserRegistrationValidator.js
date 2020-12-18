isValidFirstName = (fName) => {
    let pattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (pattern.test(fName)) {
        console.log(`${fName} is Valid first name!`);
    }
    else {
        console.log(`${fName} is InValid first name!`);
    }
}

console.log(`\nWelcome to User Registration Program`);
isValidFirstName("Raj");
isValidFirstName("Ra");
isValidFirstName("raj");