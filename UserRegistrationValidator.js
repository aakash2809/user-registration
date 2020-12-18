// All valid sample email Ids
var validEmailSample = ["abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com",
    "abc-100@abc.net", "abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com",
    "abc+100@gmail.com"];
//All invalid sample email Ids
var invalidEmailSample = ["abc", "abc@.com.my", "abc123@gmail.a", "abc123@.com", "abc123@.com.com",
    ".abc@abc.com", "abc()*@gmail.com", "abc@%*.com", "abc..2002@gmail.com",
    "abc.@gmail.com", "abc@abc@gmail.com", "abc@gmail.com.1a", "abc@gmail.com.aa.au"];

// Fast name validator fucntion
isValidFirstName = (fName) => {
    let FirstNamePattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (FirstNamePattern.test(fName)) {
        console.log(`${fName} is valid first name!`);
    }
    else {
        console.log(`${fName} is Invalid first name!`);
    }
}

// Last name validator fucntion
isValidLastName = (lName) => {
    let lastNamePattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
    if (lastNamePattern.test(lName)) {
        console.log(`${lName} is a valid last name!`);
    }
    else {
        console.log(`${lName} is an Invalid last name!`);
    }
}

// Email validator fucntion
isValidEmail = (email) => {
    let emailPattern = new RegExp(`^([A-Za-z\\d-_\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email id!`);
    }
    else {
        console.log(`${email} is an Invalid email id!`);
    }
}

//Mobile Number validator function
isValidMobileNumber = (mobileNumber) => {
    let mobileNumberPattern = new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
    if (mobileNumberPattern.test(mobileNumber)) {
        console.log(`${mobileNumber} is a valid mobile number!`);
    }
    else {
        console.log(`${mobileNumber} is an Invalid mobile number!`);
    }
}

//Password validator function   
isValidPassword = (password) => {
    let passwordPattern = new RegExp(`^(?=.*[0-9])(?=.*[A-Z])(?=.*[\\~\\?\\.\\+\\-\\~\\!\\@\\#\\$\\%\\^\\&\\*\\_])[a-zA-Z0-9\\~\\?\\.\\+\\-\\~\\!\\@\\#\\$\\%\\^\\&\\*\\_]{8,}$`);
    if (passwordPattern.test(password)) {
        console.log(`${password} is a valid password!`);
    }
    else {
        console.log(`${password} is an Invalid password!`);
    }
}

//All sample email id validator funtion 
validateSampleEmailIds = (EmailSample) => {
    let index = 0;
    while (index < EmailSample.length) {
        isValidEmail(EmailSample[index]);
        index++;
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
isValidPassword(`dfjjkfga`);
isValidPassword(`dfjjkatA`);
isValidPassword(`dfjjka5A`);
isValidPassword(`dfjjk@5A`);

validateSampleEmailIds(validEmailSample);
validateSampleEmailIds(invalidEmailSample);