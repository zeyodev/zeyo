# Zeyo Framework Documentation

A type-safe, chainable DOM manipulation library for modern web development.

```bash
npm install git+ssh://git@github.com:zeyodev/zeyo.git
```

```html
<script src="https://zeyo.org/framework/zeyo.0.0.2.js"></script>
```

### Example
[Todo List App Example](https://zeyo.org/framework/example/)

## Core Concepts

### 1. Chainable Element Wrapping
Zeyo provides a fluent interface for DOM manipulation through method chaining:

```typescript
import { button } from "zeyo"

button()
  .class("primary", "rounded")
  .text("Click Me")
  .attribute("title", "Submit button")
  .click(() => console.log("Button clicked!"))
```

### 2. Type-Safe Element Creation
Leverages TypeScript's `HTMLElementTagNameMap` for element type safety:

```typescript
const inputElement = input()
  .attribute("type", "number")  // Autocomplete for valid input types
  .attribute("max", "100")
```

### 3. Composite Mixin Architecture
Features are added through composable mixins implementing the chainable pattern:

```typescript
// Simplified architecture
class Zeyo extends Text(Click(Attributes(Root))) {
  /* ... */
}
```

## Basic Usage

### Element Creation
Use HTML tag-named factory functions:

```typescript
import { div, h1, p } from "zeyo"

const card = div()
  .class("card", "shadow")
  .children(
    h1().text("Welcome"),
    p().HTML("Start building with <em>Zeyo</em>")
  )
```

### Common Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.text()` | Set text content | `div().text("Hello")` |
| `.html()` | Set HTML content | `div().html("<b>Bold</b> text")` |
| `.class()` | Add CSS classes | `div().class("menu", "dark-mode")` |
| `.attribute()` | Set HTML attributes | `input().attribute("placeholder", "Enter name")` |
| `.children()` | Append child elements | `ul().children(li(), li())` |
| `.click()` | Add click handler | `button().click(e => ...)` |

## Advanced Features

### Event Handling
Handle various DOM events with type safety:

```typescript
input()
  .on("input", (component, e) => {
    console.log("Value:", component.element.value)
  })
  .on("focus", (_, e) => {
    console.log("Input focused")
  })
```

### Dynamic Properties
Modify any element property with type checking:

```typescript
canvas()
  .set("width", 300)
  .set("height", 200)
```

### Component Composition

```typescript
function createForm() {
  return form().object(z => {
    z.class("auth-form")
     .children(
       input().attribute("name", "email"),
       input().attribute("type", "password"),
       button().text("Submit")
     )
  })
}
```

## API Reference

### Core Methods

**`.children(...nodes)`**
```typescript
div().children(
  h1().text("Title"),
  p().text("Description"),
  "Raw text node"
)
```

**`.attribute(key, value) / .attributes(obj)`**
```typescript
a()
  .attribute("href", "#")
  .attributes({
    "data-id": "123",
    "aria-label": "Link"
  })
```

**`.object(callback)`**
```typescript
div().object(z => {
  z.class("container")
   .children(h1().text("Title"))
})
```

## Comparison with Other Libraries

| Feature               | Zeyo          | jQuery        | Hyperscript   |
|-----------------------|---------------|---------------|---------------|
| Type Safety           | ✅ Strong     | ❌ None       | ❌ Limited    |
| Bundle Size           | ~3kb          | ~30kb         | ~2kb          |
| Method Chaining       | ✅ Fluent     | ✅ Fluent     | ❌ Partial    |
| DOM API Style         | Modern        | Legacy        | Functional    |
| Tree Shaking          | ✅ Full       | ❌ None       | ✅ Good       |
| Native Element Access | ✅ element    | ✅ $el[0]     | ❌ Abstracted |

## FAQ

**Q: Why another DOM library?**
A: Zeyo combines modern TypeScript features with chainable patterns while maintaining direct element access and minimal abstraction.

**Q: How does type safety work?**
A: Using `keyof HTMLElementTagNameMap` ensures element creation and property access are type-checked at compile time.

**Q: Can I use existing HTML elements?**
```typescript
const existing = document.getElementById("my-div")
div().element = existing
```

**Q: How to handle complex components?**
```typescript
function createDropdown() {
  return div().object(z => {
    z.class("dropdown")
     .children(
       button().text("Menu"),
       div().class("dropdown-content")
     )
     .click(() => toggleMenu())
  })
}
```

## Contribution
Zeyo welcomes contributions! Please follow our [contribution guidelines](github.com/zeyodev/zeyo/CONTRIBUTING.md).

---

This documentation format provides:
- Clear installation instructions
- Immediate usage examples
- Type safety emphasis
- Visual API comparison
- Component composition patterns
- Common questions answered

Would you like me to expand any particular section or add specific examples?
