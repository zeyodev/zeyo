"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addClass_1 = __importDefault(require("./properties/addClass"));
const atribute_1 = __importDefault(require("./properties/atribute"));
const children_1 = __importDefault(require("./properties/children"));
const click_1 = __importDefault(require("./properties/click"));
const html_1 = __importDefault(require("./properties/html"));
const object_1 = __importDefault(require("./properties/object"));
const on_1 = __importDefault(require("./properties/on"));
const text_1 = __importDefault(require("./properties/text"));
const _root_1 = __importDefault(require("./properties/_root"));
class Zeyo extends (0, text_1.default)((0, click_1.default)((0, addClass_1.default)((0, atribute_1.default)((0, children_1.default)((0, object_1.default)((0, on_1.default)((0, html_1.default)(_root_1.default)))))))) {
    constructor(tagName) {
        super(tagName);
    }
}
exports.default = Zeyo;
