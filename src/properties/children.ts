import { ZeyoConstructor } from "../../index";
import Zeyo from "../zeyo";

export default function Children<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        childList: Zeyo<keyof HTMLElementTagNameMap>[] = []
        removeChild(index: number){
            (this.childList[index] as any).element.remove()
            this.childList.splice(index, 1)
        }
        children(...child: Array<Zeyo<keyof HTMLElementTagNameMap> | string>){
            child.forEach(c => {
                if (typeof c === "string")
                    (this.element as any).innerHTML += c
                else{
                    this.childList.push(c);
                    (this.element as any).appendChild(c.element)
                }
            });
            return this
        }
    }
}