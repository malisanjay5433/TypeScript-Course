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
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, burst, filter) {
        this.cameraMode = cameraMode;
        this.burst = burst;
        this.filter = filter;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, burst, filter, short) {
        this.cameraMode = cameraMode;
        this.burst = burst;
        this.filter = filter;
        this.short = short;
    }
    Youtube.prototype.createStory = function () {
        return "Stored is created";
    };
    return Youtube;
}());
