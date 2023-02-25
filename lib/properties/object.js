"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Object(base) {
    return class extends base {
        object(cb) {
            cb(this);
            return this;
        }
    };
}
exports.default = Object;
