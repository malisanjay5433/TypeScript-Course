"use strict";
exports.__esModule = true;
//Basics about class and constructors
// class User{
//     name:string
//     email:string
//     readonly place = "Mumbai"
//     constructor(name :string, email:string){
//         this.name = name
//         this.email = email
//     }
// }
//Other way to write classes, mean in professional world ppl who write such way.
var User = /** @class */ (function () {
    function User(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.place = "Mumbai";
    }
    return User;
}());
var obj = new User("Sanjay Mali", "sanjay@gmail.com", "Mumbai");
console.log("User object  ".concat({ obj: obj }));
