import Zeyo from "./zeyo";
type ZeyoType = Zeyo<keyof HTMLElementTagNameMap>
export { ZeyoType as Zeyo, Zeyo as ZeyoAs }

export default function Z<T extends keyof HTMLElementTagNameMap>(tagName: T): Zeyo<T> {
    return new Zeyo(tagName)
}