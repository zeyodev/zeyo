export default function HTML(base) {
    return class extends base {
        HTML(t) {
            this.element.innerHTML = t;
            return this;
        }
    };
}
