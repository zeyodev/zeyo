import { ZeyoConstructor } from "../../index"

export default function HTML<T extends keyof HTMLElementTagNameMap, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        HTML(t: string) {
            this.element.innerHTML = t
            return this
        }
    }
}