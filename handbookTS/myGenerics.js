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
// Also let's dive deeper into the generic type
function searchProducts(products) {
    // search products locally
    var indx = 3;
    return products[indx];
}
var searchMoreProducts = function (product) {
    var myIndex = 22;
    return product[myIndex];
};
//and also <T,> uses sometime for reference ,
//it's not any regular tag, Its generic tag
var searchMore = function (product) {
    var myIndex = 22;
    return product[myIndex];
};
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.myCart = [];
    }
    Sellable.prototype.adddCourse = function (product) {
        this.myCart.push(product);
    };
    return Sellable;
}());
