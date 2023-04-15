export{}

const user = {
    name :"",
    email : "",
    isActive: false
}

function createUser({name :string, isPaid: boolean}){

}
let newUser = {name:"Sanjay", isPaid:true};
createUser(newUser);


//Type Aliases 

type IGUser = {
    name:String;
    email:String;
    isActive:boolean;
}

function creatIgUser(igUser:IGUser){}

//readonly properties
//Optional properties
type UserAccount = {
   readonly _id : string
    name:string
    email:string
    isAcitive:boolean
    cardDetails?:number
}

let myaccount:UserAccount = {_id:"1233",name:"Sanjay",email:"san@gmail.com",isAcitive:false}

myaccount.name = "Mali"
// myaccount._id = 1313



type CardNumber = {
    cardNumber:number
}
type CardDate = {
    cardDate:Date
}

type cardDetails = CardNumber & CardDate & {
    cvv:number
}

