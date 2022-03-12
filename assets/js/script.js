const advice = document.getElementById("advice");
const funFact = document.getElementById("funFact");
const adviceBtn = document.getElementById("adviceBtn");
const factBtn = document.getElementById("factBtn");
const adviceAnswer = document.getElementById("advice-answer");
adviceBtn.addEventListener("click", getRandomAdvice)
factBtn.addEventListener("click", getRandomFact)


function getRandomAdvice (advice) {
    // console.log(advice)
    fetch("https://api.adviceslip.com/advice")
    // .then(function(response) {
    //     if (response.ok) {
    //         response.json().then(function(data) {
                
    //         })
    //     }
    // })
    .then(res => res.json())
    .then(data => {
        console.log(data.slip.advice)
        adviceAnswer.textContent = data.slip.advice 
    })
}

function getRandomFact (fact) {
    // console.log(advice)
    fetch("https://asli-fun-fact-api.herokuapp.com/")
    .then(res => res.json())
    .then(data => {
        console.log(data.data.fact)
        let p = document.createElement("p");
        document.body.appendChild(p);
        
    })
}