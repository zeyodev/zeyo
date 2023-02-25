"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Click(base) {
    return class extends base {
        click(cb) {
            this.element.onclick = cb;
            return this;
        }
    };
}
exports.default = Click;
