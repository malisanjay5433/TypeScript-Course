//Abstruct class provides blue print and also gives defination of methods
//Can not create object of Abstract class
//super should be used 
//should abstrcut keyword for class and methods
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto() {
    }
    TakePhoto.prototype.getReeltime = function () {
        console.log("Real time is :");
        return 10;
    };
    return TakePhoto;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(camerMode, burst, filter) {
        var _this = _super.call(this) || this;
        _this.camerMode = camerMode;
        _this.burst = burst;
        _this.filter = filter;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Welcome");
    };
    return Instagram;
}(TakePhoto));
var obj = new Instagram("front", 32, "filter");
console.log(obj);
obj.getReeltime();
