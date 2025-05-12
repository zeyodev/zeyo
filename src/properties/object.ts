import { ZeyoConstructor } from "../../index"

export default function Object<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        object(cb: (z: this) => void){
            cb(this)
            return this
        }
        
        thread(cb: (z: this) => void) {
            const timeout = setTimeout(() => {
                cb(this)
                clearTimeout(timeout)
            }, 0);
            return this
        }
    }
}