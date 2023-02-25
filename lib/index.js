"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zeyo = void 0;
const zeyo_1 = __importDefault(require("./zeyo"));
exports.Zeyo = zeyo_1.default;
function Z(tagName) {
    return new zeyo_1.default(tagName);
}
exports.default = Z;
