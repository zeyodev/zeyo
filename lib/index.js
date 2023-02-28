import Zeyo from "./zeyo";
export { Zeyo };
export default function Z(tagName) {
    return new Zeyo(tagName);
}
