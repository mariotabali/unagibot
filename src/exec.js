const puppeteer = require('puppeteer');
const test = require('./diag/deterministictests.js');

let ff = (async (site) => {
  const browser = await puppeteer.launch({
    headless: true, /*some sites detect headless access*/
    ignoreHTTPSErrors: true,
    slowMo: 0,
    args: ['--window-size=1400,900',
    '--remote-debugging-port=9222',
    "--remote-debugging-address=0.0.0.0", // You know what your doing?
    '--disable-gpu', "--disable-features=IsolateOrigins,site-per-process", '--blink-settings=imagesEnabled=true'
    ]}
  );
  const page = await browser.newPage();
  await page.goto(site, {
    waitUntil: 'networkidle0',
  });
  await process.stdout.write(site);
  var obj={};
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
