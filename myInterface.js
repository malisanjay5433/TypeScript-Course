"use strict";
exports.__esModule = true;
var loginUser = { username: "malisanjay", password: "Shweta@183",
    trailUser: function () {
        return "Welcome user";
    },
    getCoupon: function (coupName, value) {
        return 10;
    }
};
console.log(loginUser);
var myuser = { role: "admin", username: "malisanjay", password: "1212902", trailUser: function () {
        return "Welcome";
    }, getCoupon: function (coupName, value) {
        return 10;
    }, githubToken: "user%%%Token" };
