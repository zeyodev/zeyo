import { ZeyoConstructor } from "../../index";
import Zeyo from "../zeyo";

export default function Children<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        children(...child: Array<Zeyo<keyof HTMLElementTagNameMap> | string>){
            child.forEach(c => {
                if (typeof c === "string")
                    (this.element as any).innerHTML += c
                else
                    (this.element as any).appendChild(c.element)
            });
            return this
        }
    }
}