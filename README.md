# CSS output

A small repository to demonstrate how different methods for building CSS components with a preprocessor (Sass or Less) can affect your compiled CSS.

### Why

All the build tools and preprocessors in the world can't save you from one simple fact: your compiled CSS matters most. Be mindful of what is compiled as it's what all your users will download when they come to your site.

### What's included

There are four demos here that test building the same markup—a set of buttons—using four different methods:

- [Original (control)](01-original/original.scss)
- [Base classes](02-base/base.scss)
- [Extend](03-extend/extend.scss)
- [Extend with placeholder](04-placeholder/placeholder.scss)

Each demo is going to output three buttons:

- A gray default button
- A blue primary button
- A red danger button

Demo Sass files are compiled via Gulp (see the local `Gulpfile.js`) and their stats are output to `stats.md` via [Parker](https://github.com/katiefenn/parker).

### Results

While there are several interesting statistics about your CSS, I only care about two of them here: total selectors and total declarations. These two are most significantly affected by the changes in each method.

| Method | Total selectors | Total declarations |
| --- | --- | --- |
| Original | 6 | 19 |
| Base class | 8 | 20 |
| Extend | 14 | 20 |
| Extend w/ placeholder | 12 | 20 |

## License and copyright

Licensed MIT. Copyright @mdo.
