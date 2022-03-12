const advice = document.getElementById("advice");
const adviceBtn = document.getElementById("adviceBtn");
const adviceResult = document.getElementById("adviceResult");

const funFact = document.getElementById("funFact");
const factBtn = document.getElementById("factBtn");
const factResult = document.getElementById("factResult");

const chuckNorris = document.getElementById("chuckNorris");
const chuckNorrisBtn = document.getElementById("chuckNorrisBtn");
const chuckNorrisResult = document.getElementById("chuckNorrisResult");

const evilInsult = document.getElementById("evilInsult");
const evilBtn = document.getElementById("evilBtn");
const evilResult = document.getElementById("evilResult");


adviceBtn.addEventListener("click", getRandomAdvice)
factBtn.addEventListener("click", getRandomFact)
chuckNorrisBtn.addEventListener("click", getChuckNorris)
evilBtn.addEventListener("click", getEvilInsult)


function getRandomAdvice (advice) {
    // console.log(advice)
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        console.log(data.slip.advice)
        adviceResult.textContent = data.slip.advice 
    })
}

function getRandomFact (fact) {
    // console.log(fact)
    fetch("https://asli-fun-fact-api.herokuapp.com/")
    .then(res => res.json())
    .then(data => {
        console.log(data.data.fact)
        factResult.textContent = data.data.fact        
    })
}

function getChuckNorris (chuckNorris) {
    // console.log(chuckNorris)
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
        console.log(data.value)
        chuckNorrisResult.textContent = data.value      
    })
}

function getEvilInsult (evil) {
    // console.log(evil)
    fetch("https://evilinsult.com/api/")
    .then(res => res.json())
    .then(data => {
        console.log(data.data.insult)
        evilResult.textContent = data.data.insult       
    })
}