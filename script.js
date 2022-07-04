let phrases = [
  "отправить Тёме смешную гифку",
  "вывалиться из хт",
  "недосолить суп",
  "Артем - долбоёб",
  "муравью хуй приделать",
  "тильтовать от разработки",
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
  phrase.textContent = getRandomElement(phrases);
});
