const puppeteer = require('puppeteer');
const fs = require('fs');
// returns json with found: boolean and a list of the different objects


tests = [
  (page) => { let aa =page.evaluate(() => {
    if (document.querySelectorAll('input:not([type=hidden])').length == 3) {
      return {found: 1, incumbents: []};
    } else {
      console.log("not found");
      return {found: 0, incumbents: []};
    }
  });
  return aa;}];

module.exports = tests;
