import { ZeyoConstructor } from "../../index"

export default function AddClass<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        class(...tokens: string[]) {
            (this.element as any).classList.add(...(tokens.filter(t => t !== "")))
            return this
        }
    }
}