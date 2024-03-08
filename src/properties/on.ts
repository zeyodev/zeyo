import { ZeyoConstructor } from "../../index"
interface EventMap {
    "click": ""
    "mouseup": ""
}
export default function On<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        on<K extends keyof HTMLElementEventMap>(event: K, cb: (o: this, ev: HTMLElementEventMap[K]) => void) {
            (this.element as any)[`on${event}`] = (event: HTMLElementEventMap[K]) => cb(this, event)
            return this
        }
    }
}