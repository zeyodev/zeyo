import AddClass from "./properties/addClass"
import Atribute from "./properties/atribute"
import Children from "./properties/children"
import Click from "./properties/click"
import HTML from "./properties/html"
import Object from "./properties/object"
import On from "./properties/on"
import Text from "./properties/text"
import Root from "./properties/_root"

export default class Zeyo<T extends keyof HTMLElementTagNameMap> extends Text(On(Object(HTML(Click(Children(Atribute(AddClass(Root<keyof HTMLElementTagNameMap>)))))))) {//quando adicionar um metodo aqui, tem que adicionar no lib.ts tbm
    element: HTMLElementTagNameMap[T] = super.element
    constructor(tagName: T) {
        super(tagName)
    }

    set<R extends HTMLElementTagNameMap[T], A extends keyof R>(property: A, value: R[A]): this {
        (this.element as any)[property] = value
        return this
    }
}