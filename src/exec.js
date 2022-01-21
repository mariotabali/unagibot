const puppeteer = require('puppeteer');
const test = require('./diag/deterministictests.js');

let ff = (async (site) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(site);
  for (let tt in test) {
    let hola = test[tt](page).then((v) => {console.log(v)});
  }
  await page.screenshot({ path: 'example.png' });
  await browser.close();
});

module.exports = ff;
/*
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium-browser'
})
*/
