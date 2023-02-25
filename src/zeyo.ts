import AddClass from "./properties/addClass"
import Atribute from "./properties/atribute"
import Children from "./properties/children"
import Click from "./properties/click"
import HTML from "./properties/html"
import Object from "./properties/object"
import On from "./properties/on"
import Text from "./properties/text"
import Root from "./properties/_root"


export default class Zeyo extends Text(Click(AddClass(Atribute(Children(Object(On(HTML(Root)))))))) {//quando adicionar um metodo aqui, tem que adicionar no lib.ts tbm
    constructor(tagName: keyof HTMLElementTagNameMap) {
        super(tagName)
    }
}