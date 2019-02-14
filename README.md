# ChopLines
ChopLines is a React component which truncates lines of HTML.

## Usage
| Property   | Type                          | Value    | Default |
| ---------- | ----------------------------- | -------- | ------- |
| lines      | number                        | required |         |
| lineHeight | number                        | required |         |
| background | string                        | optional | #FFFFFF |
| ellipsis   | ReactNode | ReactElement<any> | optional | …       |
| children   | ReactNode | ReactElement<any> | required |         |

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

Verify your build
```
yarn build
```

## License
MIT
