export default function AddClass(base) {
    return class extends base {
        class(...tokens) {
            this.element.classList.add(...(tokens.filter(t => t !== "")));
            return this;
        }
    };
}
