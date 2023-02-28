export default function Text(base) {
    return class extends base {
        text(t) {
            this.element.innerText = t;
            return this;
        }
    };
}
