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
//By using public in constructor don't need to use classic way of declartion, Pl check first example.
class User{
    readonly place = "Mumbai"
    private courseCount = 1
    constructor(
        public name :string, 
        public email:string,
        readonly city:string
        ){
}
private deleteToken() {
    console.log("Token is deleted!!!");
    
}
get getCourseCount() : number{
    return this.courseCount;
}
set setCourseCount(courseNum){
    if (courseNum <= 1){
        throw new Error("Course count shoudd more than 1")
    }
    this.courseCount = courseNum
 }
}


const obj = new User("Sanjay Mali", "sanjay@gmail.com","Mumbai")
console.log(`User object  ${{obj}}`);
//Getter and Setters
