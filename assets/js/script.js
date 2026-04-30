const advice = document.getElementById("advice");
const adviceBtn = document.getElementById("adviceBtn");
const adviceResult = document.getElementById("adviceResult");

const funFact = document.getElementById("funFact");
const factBtn = document.getElementById("factBtn");
const factResult = document.getElementById("factResult");

const chuckNorris = document.getElementById("chuckNorris");
const chuckNorrisBtn = document.getElementById("chuckNorrisBtn");
const chuckNorrisResult = document.getElementById("chuckNorrisResult");

const excuse = document.getElementById("excuse");
const excuseBtn = document.getElementById("excuseBtn");
const excuseResult = document.getElementById("excuseResult");


adviceBtn.addEventListener("click", getRandomAdvice)
factBtn.addEventListener("click", getRandomFact)
chuckNorrisBtn.addEventListener("click", getChuckNorris)
excuseBtn.addEventListener("click", getExcuse)


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
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then(res => res.json())
    .then(data => {
        factResult.textContent = data.text
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

function getExcuse (excuse) {
    fetch("https://excuser-three.vercel.app/v1/excuse")
    .then(res => res.json())
    .then(data => {
        excuseResult.textContent = data[0].excuse
    })
}