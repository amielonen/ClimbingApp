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

  await page.waitForTimeout(2000);
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

  // dropdown
  const dd =
    "#__layout > div > div > div > div > div.column-center.cell.auto > div > div.column-content-left.cell.auto > div > div > div.content-child > div.user-stats > select";
  await page.waitForSelector(dd);
  await page.waitForTimeout(1500);
  await page.click(dd);

  // select all time

  await page.waitForTimeout(10);
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  //väärä dropdown? valitaan statistiikka eikä reitit

  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight * 2);
  });

  await page.waitForTimeout(1500);
  const grades = await page.$$("tbody");
  /*
const headers = await page.$$(
  "#__layout > div > div > div > div > div.column-center.cell.auto > div > div.column-content-left.cell.auto > div > div > div.content-child > div:nth-child(9) > table > tbody:nth-child(2) > tr.sub-header > th"
);

console.log(headers)

headers.forEach(async (h) => {
    const text = await (await h.getProperty("innerText")).jsonValue();
    console.log(text)
});*/

const headers = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".ascents-table tbody th")).map(h => h.textContent.replace(/(\r\n|\n|\r)/gm, "").trim())
})

console.log(headers)

  const table =
    "#__layout > div > div > div > div > div.column-center.cell.auto > div > div.column-content-left.cell.auto > div > div > div.content-child > div:nth-child(9) > table";


  grades.forEach(async (grade) => {
    //const text = await (await grade.getProperty("innerText")).jsonValue()
    //console.log(text)
    let gradez;
  });

  //seuraavaksi listasta pitää kaivaa kaikki info reiteistä
  //- greidi ei jokaiselle reitille, vaan greidin alla siihen kuuluvat nousut
  //  - greidi ja sen nousut kuuluvat samaan table bodyyn, eli voidaan käydä niitä yksi kerrallaan läpi
  //    - ekalla rivi th, jossa tekstinä greidi
  //        - välissä 1 turha rivi, seuraavalla rivillä muu data: reitin nimi, maa, cragi - kommentti - ascent type (FA?), tähdet/rating, DATE
}



run();
