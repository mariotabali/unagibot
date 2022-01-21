const puppeteer = require('puppeteer');
const fs = require('fs');
// returns json with found: boolean and a list of the different objects
// we start with the basics then adapt

let lps = (page) => { let aa =page.evaluate(() => {
    if (document.querySelectorAll("input[type='password']").length == 1 &&
        document.querySelectorAll("input[type='text']").length == 1 &&
        document.querySelectorAll("input[type='submit']").length == 1) {
      return {node: "lps", found: true, incumbents: [], context: "publiclogin"};
    } else {
      return {node: "lps", found: false, incumbents: []};
    }
  });
return aa;
};

let llps = (page) => { let aa =page.evaluate(() => {
    let lp = document.querySelectorAll("input[type='password']").length;
    let lt = document.querySelectorAll("input[type='text']").length
    let ls = document.querySelectorAll("input[type='submit']").length
    if (document.querySelectorAll("input[type='password']").length == 1 &&
        document.querySelectorAll("input[type='text']").length == 2 &&
        document.querySelectorAll("input[type='submit']").legth == 1) {
      return {node: "llps", found: true, incumbents: {pass: lp, text: lt, submit:ls}};
    } else {
      console.log("not found");
      return {node: "llps", found: false, incumbents: {pass: lp, text: lt, submit:ls}};
    }
  });
return aa;
};

let solepass = (page) => { let aa =page.evaluate(() => {
    let lp = document.querySelectorAll("input[type='password']").length;
    if (lp == 1 ) {
      return {node: "solepass", found: true, incumbents: {}};
    } else {
      console.log("not found");
      return {node: "solepass", found: false, incumbents: {}};
    }
  });
return aa;
};

let adv1 = (page) => {
  let aa = page.evaluate(() => {
    let divs = document.querySelectorAll("div[id]");
    for (let div in divs) {
      if (divs[div].hasOwnProperty('id')) {
        if (divs[div].id.includes('close')) {
          return {node: "closedivadvid", found: true, incumbents: []}
        }
      }
    }
    return {node: "closedivadvid", found: false, incumbents: []}
  });
  return aa;
};

let adv2 = (page) => {
  let aa = page.evaluate(() => {
    let divs = document.querySelectorAll("div[class]");
    for (let div in divs) {
      if (divs[div].className.includes('close')) {
        return {node: "closedivadvclass", found: true, incumbents: []}
      }
    }
    return {node: "closedivadvclass", found: false, incumbents: []}
  });
  return aa;
};


var tests = [
  lps,
  llps,
  adv1,
  solepass
  ];

module.exports = tests;
