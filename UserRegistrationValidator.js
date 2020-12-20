const prompt = require('prompt-sync')();
const sampleEmails = require('./sampleEmails.json');

var namePattern = new RegExp(`^[A-Z]{1}[a-zA-Z]{2,}$`);
var emailPattern = new RegExp(`^([A-Za-z\\d-_\\+]+)(\\.[A-Za-z\\d-_]+)?@([a-zA-Z\\d]+)\\.([a-zA-Z]{2,4})(\\.[A-Za-z]{2,4})?$`);
var mobileNumberPattern = new RegExp(`^(\\+?\\d{1,3})[ ]([0-9]{10})$`);
var passwordPattern = new RegExp(`^(?=.*[0-9])(?=.*[A-Z])(?=.*[\\~\\?\\.\\+\\-\\~\\!\\@\\#\\$\\%\\^\\&\\*\\_])[a-zA-Z0-9\\~\\?\\.\\+\\-\\~\\!\\@\\#\\$\\%\\^\\&\\*\\_]{8,}$`);

/**
 * @description  print valid message fucntion
 * @param {Name} holds input provided by caller funtion
 */
printValidMessage = (input, str) => console.log(`${input} is valid ${str} !\n`);

/**
 * @description  print valid message fucntion
 * @param {Name} holds input provided by caller funtion
 */
printInValidMessage = (input) => console.log(`${input} is  Invalid!\n`);

/**
 * @description Name validator fucntion
 * @param {Name} holds email id provided by user
 */
isValidName = (name) => {
    (namePattern.test(name)) ? printValidMessage(name): printInValidMessage(name, str);
}

/**
 * @description Email validator fucntion
 * @param {email}  holds email id provided by caller method
 */
isValidEmail = (emailSample) => {
    (emailPattern.test(emailSample.email)) ? printValidMessage(emailSample.email) : printInValidMessage(emailSample.email);
}

/**
 * @description  Mobile Number validator function
 * @param {mobileNumber} holds mobile number provided by user 
 */
isValidMobileNumber = (mobileNumber) => {
    (mobileNumberPattern.test(mobileNumber)) ? printValidMessage(mobileNumber)  : printInValidMessage(mobileNumber);
}

/**
 * @description Password validator function
 * @param {password} holds password provided by user
 */
isValidPassword = (password) => {
    (passwordPattern.test(password)) ? printValidMessage(password)  : printInValidMessage(password);
}

/**
 * @description All sample email id validator funtion
 * @param {EmailSample} can hold All Sample Email Id provided by user
 */
validateSampleEmailIds = (EmailSample) => {
    let index = 0;
     
    let lengthkey1 = EmailSample.validEmailSample.length;
    let lengthkey2 = EmailSample.invalidEmailSample.length;

     while (index < lengthkey1) {
        isValidEmail(EmailSample.validEmailSample[index]);
        index++;
    }

    index =0;
    
    while (index < lengthkey2) {
        isValidEmail(EmailSample.invalidEmailSample[index]);
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

validateSampleEmailIds(sampleEmails);
validateSampleEmailIds(invalidEmailSample); 