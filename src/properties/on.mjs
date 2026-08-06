export default function On(base) {
    return class extends base {
        on(event, cb) {
            this.element["on" + event] = (ev) => cb(this, ev)
            return this
        }
    }
}
