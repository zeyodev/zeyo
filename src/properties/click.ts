import { ZeyoConstructor } from "../../index"

export default function Click<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        click(cb: (e: MouseEvent) => void) {
            (this.element as any).onclick = cb
            return this
        }

        clickthis<T extends keyof HTMLElementTagNameMap>(cb: (e: HTMLElementTagNameMap[T]) => void) {
            (this.element as any).onclick = () => cb((this.element as any))
            return this
        }
    }
}