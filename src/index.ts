import Zeyo from "./zeyo";

export { Zeyo }
export default function Z(tagName: keyof HTMLElementTagNameMap) {
    return new Zeyo(tagName)
}