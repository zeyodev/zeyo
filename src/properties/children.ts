import { ZeyoConstructor } from "../../index";
import Zeyo, { IZeyo } from "../zeyo";

export interface IChildren {
    childList: IZeyo<keyof HTMLElementTagNameMap>[]
    removeChild(index: number): this
    children(...child: Array<IZeyo<keyof HTMLElementTagNameMap> | string>): this
}

export default function Children<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        childList: IZeyo<keyof HTMLElementTagNameMap>[] = []
        removeChild(index: number){
            (this.childList[index] as any).element.remove()
            this.childList.splice(index, 1)
            return this
        }
        children(...child: Array<IZeyo<keyof HTMLElementTagNameMap> | string>){
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