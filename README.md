# CSS output

This is a small repository to demonstrate how specific methods for building CSS components with a preprocessor like Sass can affect your compiled CSS.

## Why

All the build tools and preprocessors in the world can't save you from one simple fact: your compiled CSS matters most. It's what all your users will download when they come to your site. In many cases, the preprocessor features we want to use most can end up doing more harm than good.

## What

<img width="448" alt="Demo screenshot" src="https://cloud.githubusercontent.com/assets/98681/8786621/08732d30-2ee4-11e5-9311-afc46e3ede92.png">

Four demos are included, each including a family of three `<button>`s styled using different CSS techniques. Demo Sass files are compiled via Gulp (see the local `Gulpfile.js`) and stats are output to `stats.md` via [Parker](https://github.com/katiefenn/parker).

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

#### [Base class with mixin](05-base-mixin/base-mixin.scss)

Using a mixin for only the dynamic properties we can achieve the exact same output as the base class method, but with 10 fewer lines of SCSS.

```html
<button type="button" class="btn btn-default">Button</button>
<button type="button" class="btn btn-primary">Primary button</button>
<button type="button" class="btn btn-danger">Danger button</button>
```

## Results

While there are several interesting statistics about your CSS, two really stand out in the context of these demos—total selectors and total declarations—as these are the most significantly affected by the methods in these demos. These stats are reported in [`stats.md`](stats.md).

| Method | Total selectors | Total declarations |
| --- | --- | --- |
| **Original (control)** | 6 | 20 |
| **Base class** | 8 | 21 |
| **Extend** | 14 | 21 |
| **Extend w/ placeholder** | 12 | 21 |
| **Base class w/ mixin** | 8 | 21 |

You can look at these numbers in a few ways:

- **The output of declarations remains virtually constant.** There's nearly no difference between approaches there. On a component level, it seems this doesn't really matter, but at a larger code-base level, it does.

- **The original demo produces the least amount of compiled CSS.** That's awesome, but comes at the cost of being less performant and DRY. For example, every blue primary button is gray to start and includes overriding declarations to make them blue.

- **The base class demo is arguably the best as it produces the most DRY and reusable, component-based compiled CSS.** Yes, it has more selectors, but that's because it requires an additional class—`.btn-default`—to avoid any overrides.

- **Both `@extend` demos generate the same number of declarations as the base class, but with 55-65% more selectors.** These features, used with an exsiting class or a placeholder, generate *more* compiled CSS than any of the others.

**Bottom line?** Writing CSS components with a shared base class will likely produce leaner, DRY-er compiled CSS. Making use of streamlined SCSS will keep your SCSS DRY as well.

## Feedback

Feel free to open an issue or pull request to suggest any changes or improvements.

## License and copyright

Licensed MIT. Copyright @mdo.
