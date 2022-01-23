const puppeteer = require('puppeteer');
const test = require('./diag/deterministictests.js');

let ff = (async (site) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(site, {
    waitUntil: 'networkidle0',
  });
  await process.stdout.write(site);
  for (let tt in test) {
    let hola = test[tt](page).then((v) => {if (v.found) {process.stdout.write("," + v.node)}});
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
