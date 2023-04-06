import { ZeyoConstructor } from "../../index"

export default function Object<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        object(cb: (z: this) => void){
            cb(this)
            return this
        }
    }
}