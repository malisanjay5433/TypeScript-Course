export{}

// function
function addTwo(num  : number){
    return num + 2; 
}
addTwo(5);

function getUpperValue(val:string){
     return val.toUpperCase();
}
getUpperValue("Sanjay Mali");


function loginUser(userName :string, email:string, isPaid:boolean){
}
loginUser("connectsanjay","malisanjay5433@gmail.com",false);

// With Default value for method
let singupUser = (username : string, isPaid = false)=>{};
let authToken = (authToken = '')=> {}


//return value using function
const completed = (isCompletedTask : boolean):boolean =>{
    return false;
}
let task = completed
console.log(task)


const heros = ['Thor','Spidderman','Ironman']
// const heros = [1,2,2,3,4]

heros.map(hero =>{
    return `Welcome back ${hero}`
})


// function handleError(errmsg : string):void{
//     console.log(errmsg);
// }


//never is for intentional crash , handle error gracefully
function handleError(errmsg : string):never{
    throw new Error(errmsg);
}


