"use strict";
exports.__esModule = true;
// function
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpperValue(val) {
    return val.toUpperCase();
}
getUpperValue("Sanjay Mali");
function loginUser(userName, email, isPaid) {
}
loginUser("connectsanjay", "malisanjay5433@gmail.com", false);
// With Default value for method
var singupUser = function (username, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var authToken = function (authToken) {
    if (authToken === void 0) { authToken = ''; }
};
//return value using function
var completed = function (isCompletedTask) {
    return false;
};
var task = completed;
console.log(task);
var heros = ['Thor', 'Spidderman', 'Ironman'];
// const heros = [1,2,2,3,4]
heros.map(function (hero) {
    return "Welcome back ".concat(hero);
});
function handleError(errmsg) {
    console.log(errmsg);
}
