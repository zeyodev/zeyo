export default class Root <T extends keyof HTMLElementTagNameMap> {
    element: HTMLElementTagNameMap[T]
    constructor(tagName: T){
        this.element = document.createElement(tagName)
    }
}