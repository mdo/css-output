# CSS output

This is a small repository to demonstrate how specific methods for building CSS components with a preprocessor like Sass can affect your compiled CSS.

## Why

All the build tools and preprocessors in the world can't save you from one simple fact: your compiled CSS matters most. It's what all your users will download when they come to your site. In many cases, the preprocessor features we want to use most can end up doing more harm than good.

## What

Each demo includes a family of three HTML buttons styled using different techniques. Demo Sass files are compiled via Gulp (see the local `Gulpfile.js`) and their stats are output to `stats.md` via [Parker](https://github.com/katiefenn/parker).

#### [Original (control)](01-original/original.scss)

All `.btn`s are gray unless they include one of the modifier classes, `.btn-primary` and `.btn-danger` are used to override that class's original values.

```html
<button type="button" class="btn">Button</button>
<button type="button" class="btn btn-primary">Primary button</button>
<button type="button" class="btn btn-danger">Danger button</button>
```

#### [Base class](02-base/base.scss)

Here `.btn` is only the shared/common styles for each button, so there are no overrides in our modifiers. As such, a third modifier, `.btn-default`, is added. Each modifier contains only what's necessary to style each instance of `.btn` a bit.

```html
<button type="button" class="btn btn-default">Button</button>
<button type="button" class="btn btn-primary">Primary button</button>
<button type="button" class="btn btn-danger">Danger button</button>
```

#### [Extend](03-extend/extend.scss)

Takes the base `.btn` class and reuses it via `@extend`.

```html
<button type="button" class="btn-default">Button</button>
<button type="button" class="btn-primary">Primary button</button>
<button type="button" class="btn-danger">Danger button</button>
```

#### [Extend with placeholder](04-placeholder/placeholder.scss)

Instead of reusing an existing class, uses `@extend` to pull in shared syles from a Sass placeholder.

```html
<button type="button" class="btn-default">Button</button>
<button type="button" class="btn-primary">Primary button</button>
<button type="button" class="btn-danger">Danger button</button>
```

## Results

While there are several interesting statistics about your CSS, I only care about two of them here: total selectors and total declarations. These two are most significantly affected by the changes in each method. These stats are reported in [`stats.md`](stats.md).

| Method | Total selectors | Total declarations |
| --- | --- | --- |
| **Original (control)** | 6 | 19 |
| **Base class** | 8 | 20 |
| **Extend** | 14 | 20 |
| **Extend w/ placeholder** | 12 | 20 |

You can look at these numbers in a few ways:

- The **original demo**, which uses CSS that overrides the colors of default gray button, produces the least amount of compiled CSS. It's not the best though because it means overriding some CSS (e.g., every blue button includes specific styles to change the button from gray to blue).

- The **base class demo** is arguably the best since it produces the most dry and reusable compiled CSS possible, despite having more selectors.

- **Both extend demos** generate the same number of declarations as the base class demo, but with 55-65% more selectors.

## License and copyright

Licensed MIT. Copyright @mdo.
