import Zeyo from "./zeyo";
export { Zeyo as ZeyoAs };
export default function Z(tagName) {
    return new Zeyo(tagName);
}
