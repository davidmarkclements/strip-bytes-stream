var sbs = require('./') 

process.stdin
  .pipe(sbs(n => n < 96 || n > 99))
  .pipe(process.stdout)