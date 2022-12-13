let favNumber = 10;
let baseURL = "http://numbersapi.com";

// 1. Makes request to get facts from Numbers API.
async function RequestUrl() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
RequestUrl();

// 2. Makes multiple requests to get facts from Numbers API to display multiple number facts.

const favNumbers = [10, 17, 9];
async function MultipleRequests() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
MultipleRequests();

// 3. Get 4 facts of your favorite number and display on page.

async function FourFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
FourFacts();
