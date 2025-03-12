import Zeyo from "./zeyo";
type ZeyoType = Zeyo<keyof HTMLElementTagNameMap>
export { ZeyoType as Zeyo, Zeyo as ZeyoAs }

export default function Z<T extends keyof HTMLElementTagNameMap>(tagName: T): Zeyo<T> {
    return new Zeyo(tagName)
}

function createElement<K extends keyof HTMLElementTagNameMap>(tag: K) {
    return (...children: Array<Zeyo<keyof HTMLElementTagNameMap> | string>): Zeyo<K> => {
        return new Zeyo(tag).children(...children);
    };
}

// Example exports for common tags
export const div = createElement("div");
export const a = createElement("a");
export const p = createElement("p");
export const span = createElement("span");
export const input = createElement("input");
export const button = createElement("button");