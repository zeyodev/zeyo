import { ZeyoConstructor } from "../../index"

export default function Text<T extends keyof HTMLElementTagNameMap, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        text(t: string) {
            this.element.innerText = t
            return this
        }
    }
}