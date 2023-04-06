import { Atributes, ZeyoConstructor } from "../../index"

export default function Atribute<T extends keyof HTMLElementTagNameMap, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        atribs(atribs: { [key: string]: string }) {
            for (const key in atribs) {
                this.element.setAttribute(key, atribs[key])
            }
            return this
        }
        atrib<K extends keyof Atributes>(key: K, value: string) {
            this.element.setAttribute(key, value)
            return this
        }
    }
}