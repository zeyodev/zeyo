export default function On(base) {
    return class extends base {
        on(event, cb) {
            if (Object.prototype.hasOwnProperty.call(this.element, `on${event}`))
                this.element[`on${event}`] = cb;
            else
                console.error(`Event: on${event} doesn't exist in ${this.element}`);
            return this;
        }
    };
}
