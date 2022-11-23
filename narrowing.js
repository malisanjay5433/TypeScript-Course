"use strict";
exports.__esModule = true;
function paddingLeft(padding, inputstring) {
    if (typeof padding == "string") {
        console.log("padding is string");
    }
}
function isAdminUser(account) {
    if ("isAdmin" in account) {
        console.log("Is admin user");
    }
}
/*
TypeScript expects this to return a certain set of strings:
"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
*/
function printAlloperators(inputValue) {
    if (typeof inputValue == "string") {
        console.log("Input value is string do operations now");
    }
    else if (typeof inputValue == "number") {
        console.log("Input value is number do operations now");
    }
    else if (typeof inputValue == "object") {
        for (var i in inputValue) {
            console.log("Array values are : ".concat({ i: i }));
        }
    }
}
