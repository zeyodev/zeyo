import { ZeyoConstructor } from "../../index";
import Zeyo from "../zeyo";

export default function Children<Base extends ZeyoConstructor>(base: Base) {
    return class extends base {
        children(...child: Array<Zeyo<keyof HTMLElementTagNameMap> | string>){
            child.forEach(c => {
                if (typeof c === "string")
                    this.element.innerHTML += c
                else
                    this.element.appendChild(c.element)
            });
            return this
        }
    }
}