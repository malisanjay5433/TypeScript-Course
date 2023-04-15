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





//Why interface are important in real world 


interface TakePhoto{
    cameraMode:string
    burst:number
    filter:string
}
interface Story{
    createStory():string
}
class Instagram implements TakePhoto{
   constructor(public cameraMode:string, public burst:number, public filter:string){

   }
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode:string,
        public burst :number,
        public filter:string,
        public short:string
    ){}
    createStory(): string {
    return "Stored is created"
    }
}
