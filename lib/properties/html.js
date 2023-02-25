"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HTML(base) {
    return class extends base {
        HTML(t) {
            this.element.innerHTML = t;
            return this;
        }
    };
}
exports.default = HTML;
