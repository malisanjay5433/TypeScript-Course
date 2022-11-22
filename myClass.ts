export{}

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
class User{
    readonly place = "Mumbai"
    constructor(
        public name :string, 
        public email:string,
        readonly city:string
        ){
    }
}



const obj = new User("Sanjay Mali", "sanjay@gmail.com","Mumbai")
console.log(`User object  ${{obj}}`);
