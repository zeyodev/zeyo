import Zeyo from "./zeyo";
type ZeyoType = Zeyo<keyof HTMLElementTagNameMap>
export { ZeyoType as Zeyo }

export default function Z<T extends keyof HTMLElementTagNameMap>(tagName: T): Zeyo<T> {
    return new Zeyo(tagName)
}