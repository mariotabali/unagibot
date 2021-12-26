const puppeteer = require('puppeteer');
const test = require('./diag/deterministictests.js');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://webmail.udec.cl/');
  let hola = test[0](page).then((v) => {console.log(v)});
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();
