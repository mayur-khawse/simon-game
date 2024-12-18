let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];

const allBtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", startGame);
document.getElementById("reset").addEventListener("click", resetGame);

function startGame() {
    if (!started) {
        console.log("Game has started!");
        started = true;
        levelup();
    }
}

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`#${randcolor}`);
    gameseq.push(randcolor);

    console.log(gameseq);
    gameflash(randBtn);
}

function checkans(idx) {
    if (userseq[idx] !== gameseq[idx]) {
        endGame();
        return;
    }
    
    if (userseq.length === gameseq.length) {
        setTimeout(levelup, 1000);
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    console.log(usercolor);
    checkans(userseq.length - 1);
}

allBtns.forEach((btn) => {
    btn.addEventListener("click", btnPress);
});

function endGame() {
    h2.innerText = `Game Over! Press Any Key to Restart`;
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}

function resetGame() {
    gameseq = [];
    userseq = [];
    level = 0;
    h2.innerText = "Press Any Key to Start";
    started = false;
}
