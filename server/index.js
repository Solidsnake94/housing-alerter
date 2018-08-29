const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const firebaseDb = require("./firebase/firebaseDb.js");

// use pupeteer headless browser to load the website html along with executing the javascript.
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // define the boligportal filter in the url.
  await page.goto(
    "https://www.boligportal.dk/find?placeIds=15&housingTypes=1%2C3%2C4&minRooms=3&maxRent=14000&sort=date"
  );

  // get the results div by id - containing the apartment list.
  const resultsHandle = await page.$("#results");
  const html = await page.evaluate(results => results.innerHTML, resultsHandle);

  // Use cheerio to extract the links to the apartments
  const $ = cheerio.load(html);
  const apartments = getApartmentLinksFromBoligPortalByDate($);

  const db = new firebaseDb();
  db.saveApartments("boligportal", apartments);

  await resultsHandle.dispose();
  await browser.close();
})();

function getApartmentLinksFromBoligPortalByDate($) {
  let apartments = [];

  $(".Card").each(function(i, element) {
    let a = $(this).find("a");

    let apartment = {};
    apartment.url = a.attr("href");
    //apartment.description = a.find("meta").attr("content");
    apartment.price = a.find(".Card__price").text();
    apartment.img_url = a.find(".Card__image-img").attr("src");
    apartment.title = a.find(".Card__headline__title").text();
    apartment.subtitle = a.find(".Card__headline__subtitle").text();

    // add new apartment
   // apartments[apartment.url] = apartment;
    apartments.push(apartment);
  });

  // console.log(apartments);
  return apartments;
}

function getApartmentsLinksFromBoligSurf($) {
  
}


