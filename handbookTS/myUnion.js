"use strict";
exports.__esModule = true;
var allUser1 = { name: "Sanjay", id: 1313 };
var allUser2 = { username: "maliSanjay", id: 32323 };
// function getDbID(id : string  | number){
//     console.log(`Db id is ${id}`)
// }
getDbID('4');
getDbID(424);
function getDbID(id) {
    if (typeof id == "string") {
        console.log("Id is ".concat({ id: id }));
    }
    else {
        console.log(id + 3);
    }
}
