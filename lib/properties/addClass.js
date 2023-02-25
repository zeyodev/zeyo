"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AddClass(base) {
    return class extends base {
        class(...tokens) {
            this.element.classList.add(...tokens);
            return this;
        }
    };
}
exports.default = AddClass;
