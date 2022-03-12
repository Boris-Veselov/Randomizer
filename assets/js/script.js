const advice = document.getElementById("advice");
const funFact = document.getElementById("funFact");
const adviceBtn = document.getElementById("adviceBtn");
const factBtn = document.getElementById("factBtn");

adviceBtn.addEventListener("click", getRandomAdvice)
// factBtn.addEventListener("click", getRandomFact)


function getRandomAdvice (advice) {
    console.log(advice)
    fetch("https://asli-fun-fact-api.herokuapp.com/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (const slip of data.fact) {
            let listItem = document.createElement('li');
                listItem.appendChild(
                    document.createElement('strong')
                ).textContent = product.Name;
        }     
    })
}