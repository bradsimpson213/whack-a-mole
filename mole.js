let score = 0;
let moleCount = 5;

window.addEventListener('DOMContentLoaded', () => {

    const moles = document.querySelectorAll('.wgs__mole-head');
    moles.forEach(mole => {
        mole.addEventListener('click', () => {
            scoreUpdate();
            mole.classList.add('wgs__mole-head--hidden')
        });
    });

    let newGameButton = document.getElementsByClassName("navbar__button");
    newGameButton[0].addEventListener("click", () => {
        score = 0;
        moleCount = 30;
        let scoreChange = document.getElementsByClassName("navbar__score")
        scoreChange[0].innerHTML = `Score: ${score}`;
        scoreChange[0].classList.remove("navbar__score--gameover");
        let moleChange = document.getElementsByClassName("navbar__moles")
        moleChange[0].innerHTML = `Moles Left: ${moleCount}`;
        moleChange[0].classList.remove("navbar__score--gameover");
        setTimeout(popUpRandomMole, 0);
        let newGameButton = document.getElementsByClassName("navbar__button");
        newGameButton[0].disabled = true;
    });
});

function popUpRandomMole() {
    const moles = document.querySelectorAll('.wgs__mole-head');
    const randomNumber = Math.floor(Math.random() * moles.length);
    moleUpdate();
    const moleHead = moles[randomNumber];
    moleHead.classList.remove('wgs__mole-head--hidden')
    const timer = setTimeout(() => hideMole(moleHead), 1500);
}

function hideMole(moleHead) {
    moleHead.classList.add('wgs__mole-head--hidden');
    
    if(moleCount < 5){
        let moleChange = document.getElementsByClassName("navbar__moles")
        moleChange[0].classList.add("navbar__score--gameover");
    }
    if (moleCount > 0) {
        setTimeout(popUpRandomMole, 1500);
    } else {
        let scoreChange = document.getElementsByClassName("navbar__score")
        scoreChange[0].classList.add("navbar__score--gameover");
        scoreChange[0].innerHTML = `GAME OVER FINAL SCORE: ${score}`;
        let newGameButton = document.getElementsByClassName("navbar__button");
        newGameButton[0].disabled = false;
    }
}

function scoreUpdate() {
    score++;
    let scoreChange = document.getElementsByClassName("navbar__score")
    scoreChange[0].innerHTML = `Score: ${score}`;
}

function moleUpdate() {
    moleCount--;
    let scoreChange = document.getElementsByClassName("navbar__moles")
    scoreChange[0].innerHTML = `Moles Left: ${moleCount}`;
}

