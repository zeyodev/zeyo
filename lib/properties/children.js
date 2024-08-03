export default function Children(base) {
    return class extends base {
        constructor() {
            super(...arguments);
            this.childList = [];
        }
        removeChild(index) {
            this.childList[index].element.remove();
            this.childList.splice(index, 1);
        }
        children(...child) {
            child.forEach(c => {
                if (typeof c === "string")
                    this.element.innerHTML += c;
                else {
                    this.childList.push(c);
                    this.element.appendChild(c.element);
                }
            });
            return this;
        }
    };
}
