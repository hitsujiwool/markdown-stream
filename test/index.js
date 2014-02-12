var assert = require('assert');

var fs = require('fs');
var marked = require('marked');
var markdown = require('markdown-stream');
var concat = require('concat-stream');
var path = __dirname + '/sample.md';

describe('markdown()', function() {
  it('should build the same result as marked()', function() {
    var withoutStream = marked(fs.readFileSync(path, 'utf8'));
    fs.createReadStream(path).pipe(markdown()).pipe(concat(function(data) {
      assert.equal(withoutStream, data);
    }));
  });
});
