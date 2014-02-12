var through = require('through');
var marked = require('marked');

module.exports = function(opts) {
  marked.setOptions(opts);
  var buffers = [];
  var s = through(function(data) {
    buffers.push(data);
  }, function() {
    marked(Buffer.concat(buffers).toString('utf8'), function(err, html) {
      if (err) {
        s.emit('error', err);
        return;
      } 
      s.queue(html).queue(null);
    });
  });
  return s;
};
