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