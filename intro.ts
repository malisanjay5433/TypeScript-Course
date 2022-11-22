/*
`const` is a signal that the identifier won’t be reassigned.

`let` is a signal that the variable may be reassigned, 
    such as a counter in a loop, or a value swap in an algorithm

`var` is now the weakest signal available when you define a variable in JavaScript
    */
export {}
const fname = "Sanjay";
// fname += "sanjay"
console.log(fname);

let lname = "Mali"
lname += "sanjay"
console.log(lname);

var username = 'malisanjay'
username += "sanjay"
console.log(username);
