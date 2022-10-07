let mainContainer = document.querySelector('.container');
let thankyou = document.querySelector('.thankyou-main');
let rating = document.getElementById("user-rate");
let submitBtn = document.getElementById("submit");
let rates = document.querySelectorAll('.btn');

submitBtn.addEventListener("click", () => {
  mainContainer.classList.add("hidden");
  thankyou.classList.remove("hidden");
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  })
})
