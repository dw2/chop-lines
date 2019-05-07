# ChopLines
ChopLines is a React component which truncates multiple lines of HTML markup.

![](https://badgen.net/github/release/dw2/chop-lines) [![CircleCI](https://circleci.com/gh/dw2/chop-lines.svg?style=svg)](https://circleci.com/gh/dw2/chop-lines) ![](https://badgen.net/badgesize/gzip/https://unpkg.com/chop-lines) ![Codecov](https://codecov.io/gh/dw2/chop-lines/branch/master/graph/badge.svg)

![choplines-responsive](https://user-images.githubusercontent.com/746347/52906636-bdf94a00-3204-11e9-8fb4-03aab71e70b8.gif)

## Installation
Add the dependency:
```
yarn add chop-lines
```
And then in your component(s):
```
import ChopLines from 'chop-lines';
```

## Props
| Prop | Type | Requirement |
| ---- | ---- | ----------- |
| **lines** | number | required if maxHeight is not set |
| **lineHeight** | number | required if maxHeight is not set |
| **maxHeight** | number | required if lines &amp; linesHeight are not set |
| **ellipsis** | ReactNode or ReactElement&lt;any&gt; | Optional (default: "&hellip;") |
| **children** | ReactNode or ReactElement&lt;any&gt; | required |

## [Implementation Example &rsaquo;](https://github.com/dw2/chop-lines/wiki/Implementation-Example)

---

## Contributing
ChopLines follows semantic release versioning with Commitizen.

### Committing
Install commitizen globally, if you have not already.
```
npm install -g commitizen
```
When you are ready to commit your changes&hellip;
```
git add .
git cz
```
Then, follow the CLI wizard.

**Note:** *Choosing 'feat' or adding 'BREAKING CHANGE' in the commit will
result in a major version bump during the release.*

### Testing
```
nvm use
yarn
yarn test
```

### Additional Commands
Keep things tidy
```
yarn lint
```

Test that your changes compile
```
yarn build
```

## License
MIT
