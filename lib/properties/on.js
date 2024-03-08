export default function On(base) {
    return class extends base {
        on(event, cb) {
            this.element[`on${event}`] = (event) => cb(this, event);
            return this;
        }
    };
}
