var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
function plural() { if(age != 1) {return "s";} }

console.log("Your full name is " + firstName + " " + lastName + ".");
console.log("Your are " + age + " year" + plural() + " old.");
