# ChopLines
ChopLines is a React component which truncates multiple lines of HTML markup.

[![CircleCI](https://circleci.com/gh/dw2/chop-lines.svg?style=svg)](https://circleci.com/gh/dw2/chop-lines) ![Codecov](https://codecov.io/gh/dw2/chop-lines/branch/master/graph/badge.svg)

## Installation
Add the dependency:
```
yarn add chop-lines
```
And then in your component(s):
```
import ChopLines from 'chop-lines';
```

## Usage
| Prop           | Type                                 | Default    |
| -------------- | ------------------------------------ | ---------- |
| **lines**      | number                               | required   |
| **lineHeight** | number                               | required   |
| **ellipsis**   | ReactNode or ReactElement&lt;any&gt; | "&hellip;" |
| **children**   | ReactNode or ReactElement&lt;any&gt; | required   |

## Example
```
<ChopLines
  lines={2}
  lineHeight={24}
  ellipsis={<a>Read More</a>}
>
  <p>
    This component was built to work with<br />
    <strong>rich text markup.</strong><br />
    And <a href="#">links</a> too!
  </p>
</ChopLines>
```

## Contributing
ChopLines follows semantic release versioning with Commitizen.

### Committing
Install commitizen globally, if you have not already.
```
npm install -g commitizen
```
When you are ready to commit your changes, run...
```
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
