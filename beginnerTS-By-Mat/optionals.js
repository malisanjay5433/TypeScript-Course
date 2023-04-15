"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = void 0;
var getName = function (params) {
    if (params.last) {
        return "".concat(params.first, " ").concat(params.last);
    }
    return "".concat(params.first);
};
exports.getName = getName;
var name = (0, exports.getName)({ first: "Sanjay", last: "Mali" });
console.log(name);
