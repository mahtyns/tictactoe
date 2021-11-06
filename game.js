const tds = [...document.querySelectorAll("td")];
const showSize = document.querySelector("#show-size");
const biggerBtn = document.querySelector("#bigger");
const smallerBtn = document.querySelector("#smaller");
let size = 200;

let symbol = true;
let userSymbol;


// Game table size

const changeSize = () => {
tds.forEach(td => {
    td.style.height = size + "px";
    td.style.width = size + "px"
 showSize.innerHTML = size + "px";
})
}

changeSize();


// Buttons to change size

biggerBtn.addEventListener("click", () => {
    size += 5;
    changeSize();
    

})

smallerBtn.addEventListener("click", () => {
    size -= 5;
    changeSize();
   
})


// X O symbols

const symbols = {
    symbolX: "picX.jpg",
    symbolO: "picO.jpg",
}

// Game results

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


// Change the functions to create one 

// function symbolX() {
//     symbol = true;
//     userSymbol = symbols.symbolX
//     console.log(symbol)
// }

// function symbolO() {
//     symbol = false;
//     userSymbol = symbols.symbolO;
//     console.log(symbol)

// }

// document.querySelector("#X").addEventListener("click", symbolX);
// document.querySelector("#O").addEventListener("click", symbolO);


userSymbol = symbols.symbolX

// Winning index 

const winning = [
    [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6,7,8]
]

const winningString = winning.map(elem => elem.toString());

// for ( let i = 0; i < winning.length; i++){
//     let winningComb = winning[i].toString();
//     console.log(winningComb);
// } 

function squareSelection() {
// let choicePair = [];
// choicePair.push(this.dataset.vertical);
// choicePair.push(this.dataset.horizontal);
let tdId = tds.indexOf(this, 0)    
this.style.background = `url('${userSymbol}') no-repeat center ` 

console.log(tdId);
game.userChoice.push(tdId);
let choiceSorted = game.userChoice.sort();
choiceSorted.toString();
console.log(game.userChoice.toString());

if (winningString.indexOf(choiceSorted.toString()) !== -1 ) {
    console.log("WIN")
}

// for (let i = 0; i < winningString.length; i++) {
//     if (winningString[i] === choiceSorted.toString()) {
//         console.log("WIN");
//     }
//     else { return}
}







// if (winning.indexOf(game.userChoice, 0) !== -1 ) {
//     console.log("win");}
//     else {
//         console.log("No")
//     }


// console.log(tds.indexOf(this, 0));



tds.forEach(element => element.addEventListener("click", squareSelection))


wins.textContent = gameResult.gameWins;
draws.textContent = gameResult.gameDraws;
losses.textContent = gameResult.gameLosses;
