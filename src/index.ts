import Zeyo, { IZeyo } from "./zeyo";
type ZeyoType = IZeyo<keyof HTMLElementTagNameMap>
export { ZeyoType as Zeyo, IZeyo as ZeyoAs }

export default function Z<T extends keyof HTMLElementTagNameMap>(tagName: T): IZeyo<T> {
    return new (Zeyo(tagName))()
}

function createElement<K extends keyof HTMLElementTagNameMap>(tag: K) {
    return (...children: Array<ZeyoType | string>): IZeyo<K> => {
        return new (Zeyo(tag))().children(...children);
    };
}

function createClass<T extends keyof HTMLElementTagNameMap>(tagname: T) {
    return class extends Zeyo(tagname) {
        constructor() {
            super()
        }
    }
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
//export const search = createElement("search")
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

export const A = createClass("a")
export const Abbr = createClass("abbr")
export const Address = createClass("address")
export const Area = createClass("area")
export const Article = createClass("article")
export const Aside = createClass("aside")
export const Audio = createClass("audio")
export const B = createClass("b")
export const Base = createClass("base")
export const Bdi = createClass("bdi")
export const Bdo = createClass("bdo")
export const Blockquote = createClass("blockquote")
export const Body = createClass("body")
export const Br = createClass("br")
export const Button = createClass("button")
export const Canvas = createClass("canvas")
export const Caption = createClass("caption")
export const Cite = createClass("cite")
export const Code = createClass("code")
export const Col = createClass("col")
export const Colgroup = createClass("colgroup")
export const Data = createClass("data")
export const Datalist = createClass("datalist")
export const Dd = createClass("dd")
export const Del = createClass("del")
export const Details = createClass("details")
export const Dfn = createClass("dfn")
export const Dialog = createClass("dialog")
export const Div = createClass("div")
export const Dl = createClass("dl")
export const Dt = createClass("dt")
export const Em = createClass("em")
export const Embed = createClass("embed")
export const Fieldset = createClass("fieldset")
export const Figcaption = createClass("figcaption")
export const Figure = createClass("figure")
export const Footer = createClass("footer")
export const Form = createClass("form")
export const H1 = createClass("h1")
export const H2 = createClass("h2")
export const H3 = createClass("h3")
export const H4 = createClass("h4")
export const H5 = createClass("h5")
export const H6 = createClass("h6")
export const Head = createClass("head")
export const Header = createClass("header")
export const Hgroup = createClass("hgroup")
export const Hr = createClass("hr")
export const Html = createClass("html")
export const I = createClass("i")
export const Iframe = createClass("iframe")
export const Img = createClass("img")
export const Input = createClass("input")
export const Ins = createClass("ins")
export const Kbd = createClass("kbd")
export const Label = createClass("label")
export const Legend = createClass("legend")
export const Li = createClass("li")
export const Link = createClass("link")
export const Main = createClass("main")
export const Map = createClass("map")
export const Mark = createClass("mark")
export const Menu = createClass("menu")
export const Meta = createClass("meta")
export const Meter = createClass("meter")
export const Nav = createClass("nav")
export const Noscript = createClass("noscript")
export const Object = createClass("object")
export const Ol = createClass("ol")
export const Optgroup = createClass("optgroup")
export const Option = createClass("option")
export const Output = createClass("output")
export const P = createClass("p")
export const Picture = createClass("picture")
export const Pre = createClass("pre")
export const Progress = createClass("progress")
export const Q = createClass("q")
export const Rp = createClass("rp")
export const Rt = createClass("rt")
export const Ruby = createClass("ruby")
export const S = createClass("s")
export const Samp = createClass("samp")
export const Script = createClass("script")
//export const Search = createClass("search")
export const Section = createClass("section")
export const Select = createClass("select")
export const Slot = createClass("slot")
export const Small = createClass("small")
export const Source = createClass("source")
export const Span = createClass("span")
export const Strong = createClass("strong")
export const Style = createClass("style")
export const Sub = createClass("sub")
export const Summary = createClass("summary")
export const Sup = createClass("sup")
export const Table = createClass("table")
export const Tbody = createClass("tbody")
export const Td = createClass("td")
export const Template = createClass("template")
export const Textarea = createClass("textarea")
export const Tfoot = createClass("tfoot")
export const Th = createClass("th")
export const Thead = createClass("thead")
export const Time = createClass("time")
export const Title = createClass("title")
export const Tr = createClass("tr")
export const Track = createClass("track")
export const U = createClass("u")
export const Ul = createClass("ul")
export const classVar = createClass("var")
export const Video = createClass("video")
export const Wbr = createClass("wbr")