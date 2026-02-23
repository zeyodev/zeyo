import { ZeyoConstructor } from "../../index"

export interface IAddClass {
    class(...tokens: string[]): this
}

export default function AddClass<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        class(...tokens: string[]) {
            (this.element as any).classList.add(...(tokens.flatMap(c => c ? c.split(' '): "").filter(t => t !== "")))
            return this
        }
    }
}