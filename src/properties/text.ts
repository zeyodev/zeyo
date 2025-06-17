import { ZeyoConstructor } from "../../index"
export interface IText {
    text(t: string): this
}
export default function Text<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        text(t: string) {
            (this.element as any).innerText = t
            return this
        }
    }
}