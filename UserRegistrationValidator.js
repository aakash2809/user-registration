const prompt = require('prompt-sync')();

var namePattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
var emailPattern = new RegExp(`^([A-Za-z\\d-_\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
var mobileNumberPattern = new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
var passwordPattern = new RegExp(`^(?=.*[0-9])(?=.*[A-Z])(?=.*[\\~\\?\\.\\+\\-\\~\\!\\@\\#\\$\\%\\^\\&\\*\\_])[a-zA-Z0-9\\~\\?\\.\\+\\-\\~\\!\\@\\#\\$\\%\\^\\&\\*\\_]{8,}$`);

var validEmailSample = ["abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com",
    "abc-100@abc.net", "abc.100@abc.com.au", "abc@1.com", "abc@gmail.com.com",
    "abc+100@gmail.com"];
var invalidEmailSample = ["abc", "abc@.com.my", "abc123@gmail.a", "abc123@.com", "abc123@.com.com",
    ".abc@abc.com", "abc()*@gmail.com", "abc@%*.com", "abc..2002@gmail.com",
    "abc.@gmail.com", "abc@abc@gmail.com", "abc@gmail.com.1a", "abc@gmail.com.aa.au"];

/**
 * @description Name validator fucntion
 * @param {Name} holds email id provided by user
 */
isValidName = (Name) => {
    (namePattern.test(Name)) ? console.log(`${Name} is a valid name!\n`) :
        console.log(`${Name} is an Invalid name!\n`);
}

/**
 * @description Email validator fucntion
 * @param {email}  holds email id provided by caller method
 */
isValidEmail = (email) => {
    (emailPattern.test(email)) ? console.log(`${email} is a valid Email Id!\n`) :
        console.log(`${email} is an Invalid Email Id!\n`);
}

/**
 * @description  Mobile Number validator function
 * @param {mobileNumber} holds mobile number provided by user 
 */
isValidMobileNumber = (mobileNumber) => {
    (mobileNumberPattern.test(mobileNumber)) ? console.log(`${mobileNumber} is a valid mobile number!\n`) :
        console.log(`${mobileNumber} is an Invalid mobile number!\n`);
}

/**
 * @description Password validator function
 * @param {password} holds password provided by user
 */
isValidPassword = (password) => {
    (passwordPattern.test(password)) ? console.log(`${password} is a valid password!\n`) :
        console.log(`${password} is an Invalid password!\n`);
}

/**
 * @description All sample email id validator funtion
 * @param {EmailSample} can hold All Sample Email Id provided by user
 */
validateSampleEmailIds = (EmailSample) => {
    let index = 0;

    while (index < EmailSample.length) {
        isValidEmail(EmailSample[index]);
        index++;
    }
}

console.log(`\nWelcome to User Registration Program`);
var fName = prompt(`Enter First Name: `);
isValidName(fName);

var lName = prompt(`Enter Last Name: `);
isValidName(lName);

var email = prompt(`Enter Email Id: `);
isValidEmail(email);

var mobileNumber = prompt(`Enter Mobile Number: `);
isValidMobileNumber(mobileNumber);

var password = prompt(`Enter Password: `);
isValidMobileNumber(password);

validateSampleEmailIds(validEmailSample);
validateSampleEmailIds(invalidEmailSample); 