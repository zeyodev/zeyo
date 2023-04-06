export default function Attribute(base) {
    return class extends base {
        attributes(atribs) {
            for (const key in atribs) {
                this.element.setAttribute(key, atribs[key]);
            }
            return this;
        }
        attribute(key, value) {
            this.element.setAttribute(key, value);
            return this;
        }
    };
}
