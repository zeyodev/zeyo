export default function Click(base) {
    return class extends base {
        click(cb) {
            this.element.onclick = (event) => cb(this, event);
            return this;
        }
        clickthis(cb) {
            this.element.onclick = () => cb(this.element);
            return this;
        }
        clickevent(cb) {
            this.element.onclick = cb;
            return this;
        }
    };
}
