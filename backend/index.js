const puppeteer = require("puppeteer");

async function run() {
  const br = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    args: [`--window-size=1920,2816.15`],
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await br.newPage();

  await page.goto("https://www.8a.nu/user/mani-hubaer/sportclimbing");

await page.waitForTimeout(4000);
const linkHandlers = await page.$x("//a[contains(text(), 'Log in')]");

if (linkHandlers.length > 0) {
  await linkHandlers[0].click();
} else {
  throw new Error("Link not found");
}


  const usernameSelector = "#username";
  const pwSelector = "#password";
  const buttonSelector = "#kc-login";

  const user = "hoyanes954@submic.com";
  const pw = "ebin1234";

  await page.waitForSelector(usernameSelector);
  await page.click(usernameSelector);
  await page.keyboard.type(user);

  await page.click(pwSelector);
  await page.keyboard.type(pw);

  await page.click(buttonSelector);

}

//mene ensin käyttäjän sivulle ja tee login SIVUVALIKOSTA"!
async function run2() {
  const br = await puppeteer.launch({ headless: false });
  const page = await br.newPage();

  await page.goto("https://www.8a.nu/login");

  const usernameSelector = "#username";
  const pwSelector = "#password";
  const buttonSelector = "#kc-login";

  const user = "hoyanes954@submic.com";
  const pw = "ebin1234";

  await page.click(usernameSelector);
  await page.keyboard.type(user);

  await page.click(pwSelector);
  await page.keyboard.type(pw);

  await page.click(buttonSelector);

  //await page.waitForNavigation();

  await page.goto("https://www.8a.nu/user/mani-hubaer/sportclimbing");

  const searchSelector =
    "#__layout > div > div > header > div > div.page-navigation.grid-x > div.cell.shrink.small-4.tablet-auto.text-right > nav.grid-x.top-navigation-mobile > div.cell.auto > div > i";

  page.click(searchSelector);

  page.keyboard.type("mani hubär");
}

run();
