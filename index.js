var through = require('through2')

module.exports = function (predicate) {
  return through((chunk, enc, cb) => {
    cb(null, chunk.filter(predicate))
  })  
}

