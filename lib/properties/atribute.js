"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Atribute(base) {
    return class extends base {
        atribs(atribs) {
            for (const key in atribs) {
                this.element.setAttribute(key, atribs[key]);
            }
            return this;
        }
        atrib(key, value) {
            this.element.setAttribute(key, value);
            return this;
        }
    };
}
exports.default = Atribute;
