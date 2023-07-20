const url = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice");
const articleDice = document.querySelector(".articleDice");
const numberAdvice = document.getElementById("numberAdvice");

async function fetchAPI() {
    const response = await fetch(url);
    const data = await response.json();
    numberAdvice.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
}

articleDice.addEventListener("click", function() {
    fetchAPI();
});