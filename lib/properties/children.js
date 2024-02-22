export default function Children(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.childList = [];
        }
        children(...child) {
            this.childList = child;
            child.forEach(c => {
                if (typeof c === "string")
                    this.element.innerHTML += c;
                else
                    this.element.appendChild(c.element);
            });
            return this;
        }
    };
}
