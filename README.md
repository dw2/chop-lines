# ChopLines
ChopLines is a React component which truncates multiple lines of HTML markup.

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

*Note: Due to the package size, it is recommend to use a simpler solution such
as ReactTruncate for truncating simple text strings.*

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
ChopLines uses NVM, yarn, TypeScript, Webpack+Babel, and tests with Jest+Enzyme.

## Testing
```
nvm use
yarn
yarn test
```

## Additional Commands
Keep things tidy
```
yarn lint
```

Compiling
```
yarn build
```

## License
MIT
