# markdown-stream

streaming version of [marked](https://github.com/chjj/marked)

```javascript
var fs = require('fs');
var markdown = require('markdown-stream');

fs.createReadStream('somefile.md')
  .pipe(markdown({ /* options for marked */ })
  .pipe(process.stdout);
```

## License

MIT
