const tds = [...document.querySelectorAll("td")];
const showSize = document.querySelector("#show-size");
const biggerBtn = document.querySelector("#bigger");
const smallerBtn = document.querySelector("#smaller");
let size = 200;

let symbol = true;
let userSymbol;

const changeSize = () => {
tds.forEach(td => {
    td.style.height = size + "px";
    td.style.width = size + "px"
 showSize.innerHTML = size + "px";
})
}

changeSize();


biggerBtn.addEventListener("click", () => {
    size += 5;
    changeSize();
    

})

smallerBtn.addEventListener("click", () => {
    size -= 5;
    changeSize();
   
})

const symbols = {
    symbolX: "picX.jpg",
    symbolO: "picO.jpg",
}


const wins = document.querySelector("#wins");
const draws = document.querySelector("#draws");
const losses = document.querySelector("#losses");



const gameResult = {
    gameNumbers: 0,
    gameWins: 0,
    gameDraws: 0,
    gameLosses: 0,
}

const game = {
userChoice: [],
aiChoice: "",
}

function symbolX() {
    symbol = true;
    userSymbol = symbols.symbolX
    console.log(symbol)
}

function symbolO() {
    symbol = false;
    userSymbol = symbols.symbolO;
    console.log(symbol)

}

document.querySelector("#X").addEventListener("click", symbolX);
document.querySelector("#O").addEventListener("click", symbolO);



function squareSelection() {
let choicePair = [];
choicePair.push(this.dataset.vertical);
choicePair.push(this.dataset.horizontal);    
this.style.background = `url('${userSymbol}') no-repeat center ` 
console.log(choicePair);
game.userChoice.push(choicePair);
  
}

tds.forEach(element => element.addEventListener("click", squareSelection))


wins.textContent = gameResult.gameWins;
draws.textContent = gameResult.gameDraws;
losses.textContent = gameResult.gameLosses;
