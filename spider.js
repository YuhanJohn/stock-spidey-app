const puppeteer = require("puppeteer");

// ()();
async function spider() {
  const browser = await puppeteer.launch({
    // headless: false,
    defaultViewport: {
      width: 1200,
      height: 800,
    },
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  );
  await page.goto("https://www.sinotrade.com.tw/newweb/");
  await page.waitForTimeout(3000);
  await page.waitForSelector(".callToAction__container > a:nth-child(2)");
  await page.click(".callToAction__container > a:nth-child(2)");
  // await page.goto("https://www.sinotrade.com.tw/newweb/SinoTrade_login/");
  console.log("this is sign");
  await page.waitForTimeout(5000);
  await page.screenshot({
    path: `./tmp.jpeg`,
    fullPage: true,
    type: "jpeg",
    quality: 10,
  });
  await page.waitForSelector("#complex-form_account");
  await page.waitForSelector("#complex-form_password");
  await page.type("#complex-form_account", "");
  await page.type("#complex-form_password", "");
  await page.click("button.ant-btn.ant-btn-primary");
  console.log("this is in");
  await page.waitForTimeout(3000);
  await page.goto("https://www.sinotrade.com.tw/newweb/Asset/");
  // const frame = await page
  //   .frames()
  //   .find((frame) => frame.name() === "newWebiFrame");
  console.log("this is profile");
  await page.waitForTimeout(3000);
  const wealthNum = await page.$eval(
    ".dount__desc.stock > .dount__desc__amount",
    (e) => e.innerText
  );
  // await frame
  //   .waitForSelector(".number")
  //   .then((res) => console.log("this is res:", res));
  console.log("this is wealth:", wealthNum);
  document.querySelector("#res").innerText = wealthNum;
  // complex-form_account
  // complex-form_password
  // https://www.sinotrade.com.tw/newweb/User_AssetOverview/
  // other actions...
  // await browser.close();
}

module.exports = {
  spider,
};
