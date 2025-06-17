export default class Root {
    constructor(tagName) {
        this.element = document.createElement(tagName);
    }
    set(property, value) {
        this.element[property] = value;
        return this;
    }
}
