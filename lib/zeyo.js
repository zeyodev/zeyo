import AddClass from "./properties/addClass";
import Attribute from "./properties/attribute";
import Children from "./properties/children";
import Click from "./properties/click";
import HTML from "./properties/html";
import Object from "./properties/object";
import On from "./properties/on";
import Text from "./properties/text";
import Root from "./properties/_root";
export default class Zeyo extends Text(On(Object(HTML(Click(Children(Attribute(AddClass(Root)))))))) {
    constructor(tagName) {
        super(tagName);
    }
    set(property, value) {
        this.element[property] = value;
        return this;
    }
}
