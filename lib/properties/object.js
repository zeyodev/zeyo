export default function Object(base) {
    return class extends base {
        object(cb) {
            cb(this);
            return this;
        }
        thread(cb) {
            const timeout = setTimeout(() => {
                cb(this);
                clearTimeout(timeout);
            }, 0);
            return this;
        }
    };
}
