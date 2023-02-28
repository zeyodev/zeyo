export default function Children(base) {
    return class extends base {
        children(...child) {
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
