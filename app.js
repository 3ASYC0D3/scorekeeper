 const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btnRes = document.querySelector('#btnRes');
const limit = document.querySelector('#limit');
const counter1 = document.querySelector('#counter1');
const counter2 = document.querySelector('#counter2');

let score1 = 0;
let score2 = 0;
let scoreLimit = 5;

btn1.addEventListener('click', function() {
    keepScore('p1');
    document.querySelector('#counter1').innerText = `${score1}`;
});

btn2.addEventListener('click', function() {
    keepScore('p2');
    document.querySelector('#counter2').innerText = `${score2}`;
});


limit.addEventListener('input', function() {
    gameReset();
    scoreLimit = limit.value;
    console.log(scoreLimit);
});

function gameOver(){
    btn1.setAttribute('disabled', true);
    btn2.setAttribute('disabled', true);
    if (score1 > score2){
        counter1.classList.toggle('winner');
        counter2.classList.toggle('loser');
    } else {
        counter1.classList.toggle('loser');
        counter2.classList.toggle('winner');
    }

}

function keepScore(player) {
    if(player === 'p1') {
        score1++;
        if (score1 == scoreLimit){
            gameOver();
        }
    } else if (player === 'p2') {
        score2++;
        if (score2 == scoreLimit){
            gameOver();
        }
    }
}

function gameReset() {
    score1 = 0;
    counter1.innerText = 0;
    score2 = 0;
    counter2.innerText = 0;
    btn1.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
    counter1.classList.remove('winner', 'loser');
    counter2.classList.remove('winner', 'loser');
}

btnRes.addEventListener('click', gameReset);