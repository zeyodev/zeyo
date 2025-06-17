import { ZeyoConstructor } from "../../index"

export interface IAttribute {
    attributes(atribs: { [key: string]: string }): this
    attribute(key: string, value: string): this
}

export default function Attribute<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        attributes(atribs: { [key: string]: string }) {
            for (const key in atribs) {
                (this.element as any).setAttribute(key, atribs[key])
            }
            return this
        }
        attribute(key: string, value: string) {
            (this.element as any).setAttribute(key, value)
            return this
        }
    }
}