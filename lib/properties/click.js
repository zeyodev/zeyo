export default function Click(base) {
    return class extends base {
        click(cb) {
            this.element.onclick = cb;
            return this;
        }
    };
}
