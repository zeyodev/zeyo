import { ZeyoConstructor } from "../../index"

export default function HTML<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        HTML(t: string) {
            (this.element as any).innerHTML = t
            return this
        }
    }
}