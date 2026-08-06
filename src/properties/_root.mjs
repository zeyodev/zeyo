export default class Root {
    element
    constructor(tagName) {
        this.element = document.createElement(tagName)
    }

    set(property, value) {
        this.element[property] = value
        return this
    }
}
