import AddClass, { IAddClass } from "./properties/addClass"
import Attribute, { IAttribute } from "./properties/attribute"
import Children, { IChildren } from "./properties/children"
import Click, { IClick } from "./properties/click"
import HTML, { IHTML } from "./properties/html"
import Object, { IObject } from "./properties/object"
import On, { IOn } from "./properties/on"
import Text, { IText } from "./properties/text"
import Root from "./properties/_root"

export interface IZeyo<T extends keyof HTMLElementTagNameMap> extends IAddClass, IAttribute, IChildren, IClick, IHTML, IObject, IOn, IText {
    element: HTMLElementTagNameMap[T]
    set<R extends HTMLElementTagNameMap[T], A extends keyof R>(property: A, value: R[A]): this
}

export default <T extends keyof HTMLElementTagNameMap>(tagName: T): new () => IZeyo<T> => class extends Text(On(Object(HTML(Click(Children(Attribute(AddClass(Root<T>)))))))) {
    constructor() {
        super(tagName)
    }
}