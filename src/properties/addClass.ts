import { ZeyoConstructor } from "../../index"

export default function AddClass<T extends keyof HTMLElementTagNameMap, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        class(...tokens: string[]) {
            this.element.classList.add(...tokens)
            return this
        }
    }
}