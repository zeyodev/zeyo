export default class Root<T extends keyof HTMLElementTagNameMap> {
    element: HTMLElementTagNameMap[T]
    constructor(tagName: T) {
        this.element = document.createElement(tagName)
    }

    set<R extends HTMLElementTagNameMap[T], A extends keyof R>(property: A, value: R[A]): this {
        (this.element as any)[property] = value
        return this
    }
}