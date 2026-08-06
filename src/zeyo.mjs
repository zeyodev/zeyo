import AddClass from "./properties/addClass.mjs"
import Attribute from "./properties/attribute.mjs"
import Children from "./properties/children.mjs"
import Click from "./properties/click.mjs"
import HTML from "./properties/html.mjs"
import Object from "./properties/object.mjs"
import On from "./properties/on.mjs"
import Text from "./properties/text.mjs"
import Root from "./properties/_root.mjs"

export default (tagName) => class extends Text(On(Object(HTML(Click(Children(Attribute(AddClass(Root)))))))) {
    constructor() {
        super(tagName)
    }
}
