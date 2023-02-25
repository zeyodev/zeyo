"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Text(base) {
    return class extends base {
        text(t) {
            this.element.innerText = t;
            return this;
        }
    };
}
exports.default = Text;
