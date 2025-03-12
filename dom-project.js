// global elements
const rockGame = document.getElementById("rockGame");
const youTube = document.getElementById('youTubeSection')
const rockPaperScissors = document.getElementById("rockPaperScissors");
const winCount = document.getElementById('winCount')
const loseCount = document.getElementById('loseCount')
const tieCount =document.getElementById('tieCount')
const newGame = document.getElementById('newGame')
const resultButton = document.getElementById("result");
const newGameButton =document.getElementById('newGameButton')
const orderButton = document.getElementById("orderCalculateButton");
const orderInput = document.getElementById("orderInput");
const totalCost = document.getElementById("totalCost")
const clearButton = document.getElementById("clearButton");
const shippingCalculator = document.getElementById("shippingCalculator");
const backPanel = document.querySelector(".back-to-panel");
let resultWinCount = 0;
let resultLoseCount = 0;
let resultTieCount = 0;

// toggle section
rockPaperScissors.style.display = "none"
shippingCalculator.style.display = "none"


// back to panel

const backToPanel = () => {
    youTube.style.display = "block";
    rockGame.style.display = "block";
    backPanel.style.display = "none"
    rockPaperScissors.style.display = "none";
    shippingCalculator.style.display = "none";
}

const subscribe = () => {
  const button = document.querySelector(".btn");
  if (button.innerText === "Subscribe") {
    button.classList.add("bg-gray-100", "text-black");
    button.classList.remove("bg-black", "text-white");
    button.innerText = "Subscribed";
  } else {
    button.classList.add("bg-black", "text-white");
    button.classList.remove("bg-gray-100", "text-black");
    button.innerText = "Subscribe";
  }
};


const playgame = () => {
    youTube.style.display = "none"
    rockGame.style.display = 'none'
    rockPaperScissors.style.display = "block"
}


// logic build of rock paper scissors

const rpsGame = (userChoice) => {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Tie!";
    resultTieCount++;
    tieCount.innerText = resultTieCount;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") 
  ) {
    result = "You Win!";
    resultWinCount++;
    winCount.innerText = resultWinCount;
  } else {
    result = "You Lose!";
    resultLoseCount++;
    loseCount.innerText = resultLoseCount;
  }

  resultButton.innerHTML = `
        You chose <strong>${userChoice}</strong> & Computer chose <strong>${computerChoice}</strong>.  
        <h1 class="font-bold">${result}</h1>
    `;
  newGame.addEventListener('click', () => {
    resultButton.style.display = "none"
    newGameButton.innerHTML = `<strong>let's play a new game buddy</strong>`;
    winCount.innerText = "0"
    loseCount.innerText = "0"
    tieCount.innerText = "0"

  })
};


// calculate

const calculateNow = () => {
    youTube.style.display = "none";
    rockGame.style.display = "none";
    shippingCalculator.style.display = "block";
}

// order calculation

orderButton.addEventListener('click', () => {
    let orderCount = orderInput.value;
    let convertedOrderCount = Number(orderInput.value)
    console.log(typeof convertedOrderCount);
    if (convertedOrderCount < 40){
        convertedOrderCount = convertedOrderCount + 10
        totalCost.innerText = convertedOrderCount;
    }
})

clearButton.addEventListener('click', () => {
    orderInput.value = 0;
    totalCost.innerText = 0;
})
