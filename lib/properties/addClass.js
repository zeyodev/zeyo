export default function AddClass(base) {
    return class extends base {
        class(...tokens) {
            this.element.classList.add(...(tokens.flatMap(c => c ? c.split(' ') : "").filter(t => t !== "")));
            return this;
        }
    };
}
