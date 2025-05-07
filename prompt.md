# Zeyo Framework

explane how each of the folowing coding works and give use example for each

## zeyo

```typescript
import AddClass from "./properties/addClass"
import Attribute from "./properties/attribute"
import Children from "./properties/children"
import Click from "./properties/click"
import HTML from "./properties/html"
import Object from "./properties/object"
import On from "./properties/on"
import Text from "./properties/text"
import Root from "./properties/_root"

export default class Zeyo<T extends keyof HTMLElementTagNameMap> extends Text(On(Object(HTML(Click(Children(Attribute(AddClass(Root))))))))<T> {
    constructor(tagName: T) {
        super(tagName)
    }

    set<R extends HTMLElementTagNameMap[T], A extends keyof R>(property: A, value: R[A]): this {
        (this.element as any)[property] = value
        return this
    }
}
```

## index

```typescript
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

export const a = createElement("a")
export const abbr = createElement("abbr")
export const address = createElement("address")
export const area = createElement("area")
export const article = createElement("article")
export const aside = createElement("aside")
export const audio = createElement("audio")
export const b = createElement("b")
export const base = createElement("base")
export const bdi = createElement("bdi")
export const bdo = createElement("bdo")
export const blockquote = createElement("blockquote")
export const body = createElement("body")
export const br = createElement("br")
export const button = createElement("button")
export const canvas = createElement("canvas")
export const caption = createElement("caption")
export const cite = createElement("cite")
export const code = createElement("code")
export const col = createElement("col")
export const colgroup = createElement("colgroup")
export const data = createElement("data")
export const datalist = createElement("datalist")
export const dd = createElement("dd")
export const del = createElement("del")
export const details = createElement("details")
export const dfn = createElement("dfn")
export const dialog = createElement("dialog")
export const div = createElement("div")
export const dl = createElement("dl")
export const dt = createElement("dt")
export const em = createElement("em")
export const embed = createElement("embed")
export const fieldset = createElement("fieldset")
export const figcaption = createElement("figcaption")
export const figure = createElement("figure")
export const footer = createElement("footer")
export const form = createElement("form")
export const h1 = createElement("h1")
export const h2 = createElement("h2")
export const h3 = createElement("h3")
export const h4 = createElement("h4")
export const h5 = createElement("h5")
export const h6 = createElement("h6")
export const head = createElement("head")
export const header = createElement("header")
export const hgroup = createElement("hgroup")
export const hr = createElement("hr")
export const html = createElement("html")
export const i = createElement("i")
export const iframe = createElement("iframe")
export const img = createElement("img")
export const input = createElement("input")
export const ins = createElement("ins")
export const kbd = createElement("kbd")
export const label = createElement("label")
export const legend = createElement("legend")
export const li = createElement("li")
export const link = createElement("link")
export const main = createElement("main")
export const map = createElement("map")
export const mark = createElement("mark")
export const menu = createElement("menu")
export const meta = createElement("meta")
export const meter = createElement("meter")
export const nav = createElement("nav")
export const noscript = createElement("noscript")
export const object = createElement("object")
export const ol = createElement("ol")
export const optgroup = createElement("optgroup")
export const option = createElement("option")
export const output = createElement("output")
export const p = createElement("p")
export const picture = createElement("picture")
export const pre = createElement("pre")
export const progress = createElement("progress")
export const q = createElement("q")
export const rp = createElement("rp")
export const rt = createElement("rt")
export const ruby = createElement("ruby")
export const s = createElement("s")
export const samp = createElement("samp")
export const script = createElement("script")
export const search = createElement("search")
export const section = createElement("section")
export const select = createElement("select")
export const slot = createElement("slot")
export const small = createElement("small")
export const source = createElement("source")
export const span = createElement("span")
export const strong = createElement("strong")
export const style = createElement("style")
export const sub = createElement("sub")
export const summary = createElement("summary")
export const sup = createElement("sup")
export const table = createElement("table")
export const tbody = createElement("tbody")
export const td = createElement("td")
export const template = createElement("template")
export const textarea = createElement("textarea")
export const tfoot = createElement("tfoot")
export const th = createElement("th")
export const thead = createElement("thead")
export const time = createElement("time")
export const title = createElement("title")
export const tr = createElement("tr")
export const track = createElement("track")
export const u = createElement("u")
export const ul = createElement("ul")
export const Var = createElement("var")
export const video = createElement("video")
export const wbr = createElement("wbr")


```

## attribute

```typescript
import { ZeyoConstructor } from "../../index"

export default function Attribute<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        attributes(atribs: { [key: string]: string }) {
            for (const key in atribs) {
                (this.element as any).setAttribute(key, atribs[key])
            }
            return this
        }
        attribute(key: string, value: string) {
            (this.element as any).setAttribute(key, value)
            return this
        }
    }
}
```

## children

```typescript
import { ZeyoConstructor } from "../../index";
import Zeyo from "../zeyo";

export default function Children<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        childList: Zeyo<keyof HTMLElementTagNameMap>[] = []
        removeChild(index: number){
            (this.childList[index] as any).element.remove()
            this.childList.splice(index, 1)
        }
        children(...child: Array<Zeyo<keyof HTMLElementTagNameMap> | string>){
            child.forEach(c => {
                if (typeof c === "string")
                    (this.element as any).innerHTML += c
                else{
                    this.childList.push(c);
                    (this.element as any).appendChild(c.element)
                }
            });
            return this
        }
    }
}
```

## click

```typescript
import { ZeyoConstructor } from "../../index"

export default function Click<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        click(cb: (object: this, event: MouseEvent) => void) {
            (this.element as any).onclick = (event: MouseEvent) => cb(this, event)
            return this
        }

        clickthis<T extends keyof HTMLElementTagNameMap>(cb: (e: HTMLElementTagNameMap[T]) => void) {
            (this.element as any).onclick = () => cb((this.element as any))
            return this
        }
        
        clickevent(cb: (e: MouseEvent) => void) {
            (this.element as any).onclick = cb
            return this
        }
    }
}
```

## on

```typescript
import { ZeyoConstructor } from "../../index"
interface EventMap {
    "click": ""
    "mouseup": ""
}
export default function On<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        on<K extends keyof HTMLElementEventMap>(event: K, cb: (o: this, ev: HTMLElementEventMap[K]) => void) {
            (this.element as any)[`on${event}`] = (event: HTMLElementEventMap[K]) => cb(this, event)
            return this
        }
    }
}
```

## object

```typescript
import { ZeyoConstructor } from "../../index"

export default function Object<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        object(cb: (z: this) => void){
            cb(this)
            return this
        }
    }
}
```

## _root

```typescript
export default class Root <T extends keyof HTMLElementTagNameMap> {
    element: HTMLElementTagNameMap[T]
    constructor(tagName: T){
        this.element = document.createElement(tagName)
    }
}
```

## text

```typescript
import { ZeyoConstructor } from "../../index"

export default function Text<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        text(t: string) {
            (this.element as any).innerText = t
            return this
        }
    }
}
```

## addClass

```typescript
import { ZeyoConstructor } from "../../index"

export default function AddClass<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        class(...tokens: string[]) {
            (this.element as any).classList.add(...(tokens.filter(t => t !== "")))
            return this
        }
    }
}
```

## html

```typescript
import { ZeyoConstructor } from "../../index"

export default function HTML<T, Base extends ZeyoConstructor<T>>(base: Base) {
    return class extends base {
        HTML(t: string) {
            (this.element as any).innerHTML = t
            return this
        }
    }
}
```

## index.d

```typescript
export interface Root<T extends keyof HTMLElementTagNameMap> {
    element: HTMLElementTagNameMap[T]
}

export interface AddClass { class(...tokens: string[]): Zeyo }
export interface Children { children(...child: Array<Zeyo<keyof HTMLElementTagNameMap> | string>): Zeyo }
export interface Object { object(cb: (e: Zeyo) => void): Zeyo }

export interface Atribute {
    atrib<K extends keyof Atributes>(key: K, value: string): Zeyo
    atribs(atribs: { [key: string]: string }): Zeyo
}

export interface Text { text(t: string): Zeyo }
export interface Click { click(cb: (e: MouseEvent) => void): Zeyo }
export interface On { on<K extends keyof HTMLElementEventMap>(event: K, cb: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => void): Zeyo }
export interface HTML { HTML(t: string): Zeyo }

export interface Zeyo<T extends keyof HTMLElementTagNameMap> extends Root, AddClass, Children, Object, Atribute, Text, Click, On, HTML {
    set<R extends HTMLElementTagNameMap[T], A extends keyof R>(property: A, value: R[A]): this
}

export type ZeyoConstructor<T, R = Root<T>> = new (...args: any[]) => R;

export type ZeyoStyle = { [key in keyof CSSStyleDeclaration]?: string }
export interface Atributes {
    "type": string
    "placeholder": string
    "value": string
    "src": string
    "style": string
}

export interface Component { main: Zeyo, create: (obj?: any) => Promise<Zeyo> }
```

