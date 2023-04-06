import { ZeyoConstructor } from "../../index"

export default function Text<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        text(t: string) {
            (this.element as any).innerText = t
            return this
        }
    }
}