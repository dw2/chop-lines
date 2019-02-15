# ChopLines
ChopLines is a React component which truncates multiple lines of HTML markup.

## Usage
| Property       | Type                                 | Value    | Default  |
| -------------- | ------------------------------------ | -------- | -------- |
| **lines**      | number                               | required |          |
| **lineHeight** | number                               | required |          |
| **background** | string                               | optional | #FFFFFF  |
| **ellipsis**   | ReactNode or ReactElement&lt;any&gt; | optional | &hellip; |
| **children**   | ReactNode or ReactElement&lt;any&gt; | required |          |

*Note: Due to the package size, it is recommend to use a simpler solution such
as ReactTruncate for truncating simple text strings.*

## Example
```
<ChopLines
  lines={1}
  lineHeight={24}
  background="#CCCCCC"
  ellipsis={<a>Read More</a>}
>
  <p>
    This component was built to work with
    <strong>rich text markup.</strong>
  </p>
</ChopLines>
```

## Peer Dependencies
ChopLines makes two assumptions about your React application:

1. React 16+
1. Styled Components v4+

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
