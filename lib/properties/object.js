export default function Object(base) {
    return class extends base {
        object(cb) {
            cb(this);
            return this;
        }
    };
}
