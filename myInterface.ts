export {}
//Interface
interface Login{
    username : string
    password:string
    trailUser():string,
    getCoupon(coupName:string, value:number):number
}
const loginUser : Login = {username:"malisanjay", password:"Shweta@183",
 trailUser: () => {
    return "Welcome user"
 },

 getCoupon:(coupName: "sanjay10", value:10) => {
     return 10
 },
}
console.log(loginUser);
interface User{
    githubToken:string
}
//Interface with inheritance 
interface Admin extends Login, User{
    role :"admin" | "learner"
}

const myuser:Admin = {role :"admin", username:"malisanjay",password:"1212902",
trailUser(){
    return "Welcome"
}, getCoupon(coupName:"sanjay10%", value:10) {
    return 10
},
githubToken:"user%%%Token"
}
/*
Type aliases and interface are similar 
IN many cases you can choose between them freely.
Almost all feature of interface are available in type
main difference is type can not be re-opened to add new properties, 
Where as interface always extendable does.
*/