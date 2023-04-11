console.log("------Event listeners-------");

const myStores = [];

function CookieStore(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

const submitButtonEl = document.getElementById("new-store-form");

submitButtonEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  console.log(storeNameInput);
  const minCustInput = event.target.minCust.value;
  console.log(minCustInput);
  const maxCustInput = event.target.maxCust.value;
  console.log(maxCustInput);
  const avgCookiesInput = event.target.avgCookies.value;
  console.log(avgCookiesInput);

  console.log(event.target);

  const newStore = new CookieStore(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);
  console.log(newStore);

  myStores.push(newStore);
  console.log(myStores);
});
