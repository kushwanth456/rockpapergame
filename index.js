let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loose: 0,
    ties: 0
};
function selement() {
    document.querySelector('.js-result').innerHTML = `wins ${score.wins} loose ${score.loose}  ties ${score.ties}`;
}
selement();

let computerNumber = '';
function computerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 2) {
        computerNumber = 'rock';
    } else if (randomNumber >= 1 / 2 && randomNumber < 1 / 3) {
        computerNumber = 'papper';
    } else if (randomNumber >= 1 / 3 && randomNumber < 1) {
        computerNumber = 'sciser';
    }
}

function playermove(movename) {


    let result = '';
    if (movename === 'sciser') {
        if (computerNumber === 'rock') {
            result = 'you loose';
        } else if (computerNumber === 'papper') {
            result = 'you won';
        } else if (computerNumber === 'sciser') {
            result = 'tie';
        }
    } else if (movename === 'papper') {
        if (computerNumber === 'rock') {
            result = 'you won';
        } else if (computerNumber === 'papper') {
            result = 'tie';
        } else if (computerNumber === 'sciser') {
            result = 'you loose';
        }
    } else if (movename === 'rock') {
        if (computerNumber === 'rock') {
            result = 'tie';
        } else if (computerNumber === 'papper') {
            result = 'you won';
        } else if (computerNumber === 'sciser') {
            result = 'you loose';
        }
    }
    if (result === 'you won') {
        score.wins += 1;
    } else if (result === 'you loose') {
        score.loose += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    selement();
    function won() {
        document.querySelector('.whowon').innerHTML = result;
    }
    won();
    function re() {
        document.querySelector('.result1').innerHTML = ` you
        <img src="${movename}-emoji.png" alt="">
        <img src="${computerNumber}-emoji.png" alt="">
        computer`
    }
    re();
}