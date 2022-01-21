const ex = require('./exec.js');

if (process.argv.length > 2) {
  ex(process.argv[2]);
} else {
  ex('https://webmail.udec.cl/');
}
