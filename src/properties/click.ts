import { ZeyoConstructor } from "../../index"

export default function Click<T extends keyof HTMLElementTagNameMap, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        click(cb: (e: MouseEvent) => void) {
            this.element.onclick = cb
            return this
        }
    }
}