import Zeyo from "./zeyo";
export { Zeyo }

export default function Z<T extends keyof HTMLElementTagNameMap>(tagName: T): Zeyo<T> {
    return new Zeyo(tagName)
}