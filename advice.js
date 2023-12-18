const advice = document.querySelector("#advice");

fetch("https://api.adviceslip.com/advice")
    .then(reponse => reponse.json())
    .then(data => {
        const words = data.slip.advice;
        advice.innerHTML = words;
    })