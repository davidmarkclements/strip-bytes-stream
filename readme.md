# strip-bytes-stream

strip bytes from a stream according to a predicate

## Usage

```js
require('strip-bytes-stream') => (predicate) => stream
```

## Example

Strip bytes with values between 96 and 99 inclusive (remove a, b, c and chars)

```js
process.stdin
  .pipe(sbs(n => n < 96 || n > 99))
  .pipe(process.stdout)
```

```sh
echo "abcdef" | node example.js
```


## License

MIT

## Acknowledgements

* Sponsored by nearForm