const tds = [...document.querySelectorAll("td")];
const showSize = document.querySelector("#show-size");
const biggerBtn = document.querySelector("#bigger");
const smallerBtn = document.querySelector("#smaller");
let size = 200;


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

const wins = document.querySelector("#wins");
const draws = document.querySelector("#draws");
const losses = document.querySelector("#losses");



const game = {
    gameNumbers: 0,
    gameWins: 0,
    gameDraws: 0,
    gameLosses: 0,
}

const user = {

}

const computer = {


}

wins.textContent = game.gameWins;
draws.textContent = game.gameDraws;
losses.textContent = game.gameLosses;
