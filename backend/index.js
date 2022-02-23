const puppeteer = require("puppeteer");

async function run() {
  const br = await puppeteer.launch({ headless: false });
  const page = await br.newPage();

  await page.goto("https://www.8a.nu/user/mani-hubaer/sportclimbing");

  const loginbutton = ".u8a-button nu8a-button__primary";

  await page.waitForSelector(loginbutton);
  await page.click(loginbutton);

  await page.waitForSelector("#username");

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
  /*
    await page.goto("https://www.8a.nu/user/mani-hubaer/sportclimbing");

    const searchSelector =
      "#__layout > div > div > header > div > div.page-navigation.grid-x > div.cell.shrink.small-4.tablet-auto.text-right > nav.grid-x.top-navigation-mobile > div.cell.auto > div > i";

    page.click(searchSelector);

    page.keyboard.type("mani hubär");
    */
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

run2();
