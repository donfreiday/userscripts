// ==UserScript==
// @name     Giant Coupon Clicker
// @version  1
// @include  https://giantfoodstores.com/savings/coupons/browse
// @grant    none
// ==/UserScript==

const interval = 2000;
const buttonClassName = "button button--blue-dashed-border button-width--full"
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const periodicallySlapThoseButtons = async() => {
  while (true) {
    await sleep(2000)
    for (button of document.getElementsByClassName(buttonClassName)) {
      button.click();
    }
  }
}
periodicallySlapThoseButtons();