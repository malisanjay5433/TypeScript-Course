"use strict";
exports.__esModule = true;
//Generic type
//Generics are increased code reusability and type safety
var score = [];
var names = [];
//lets create some functions
function identyNumber(value) {
    return value;
}
function identityString(value) {
    return value;
}
function identityAny(value) {
    return value;
}
function identityType(value) {
    return value;
}
//shorthands
function identityTypeTwo(value) {
    return value;
}
function identityTypeThree(value) {
    return value;
}
//returns specific number
identyNumber(1);
//returns specific string
identityString("3");
//return any type , no visibilty on what type it returns
identityAny(3);
//Genernic type are powerfull type can be return passed type, helpful for resuable code
identityType("Sanjay");
identityType(21212);
identityType(true);
