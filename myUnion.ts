export {}
//Unions are very help when doses not know what type value comes
//It may be string and number
//Instead of using any use unions for better readblity

type User = {
    name : string
    id:number
}
type Admin ={
    username:string
    id:number
}

let allUser1 : User | Admin = {name : "Sanjay", id: 1313}

let allUser2 : User | Admin = {username : "maliSanjay", id:32323}


// function getDbID(id : string  | number){
//     console.log(`Db id is ${id}`)
// }

getDbID('4');
getDbID(424);

function getDbID(id : string  | number){
    if (typeof id == "string"){
        console.log(`Id is ${{id}}`)
    }
    else{
        console.log(id + 3)
    }
}


const data1 : string[] = ['2','5']

const data2 : number[] = [2,5]

const data3 : (number | string | boolean)[] = [2,5, "323","424", false, true]


let seatAllotment :  "aisle" | "middle" | "window";

seatAllotment = "aisle"
// seatAllotment = "crew"