// import functions and grab DOM elements
const button = document.querySelector('#guess-button');
const current = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const total = document.querySelector('#total');

// initialize state
let winsData = 0;
let totalGuesses = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    totalGuesses++;
    // how do i get the value of the currently selected radio button
    // hint: querySelector
    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;

    // generate a random correct answer: heads or tails
    const numberLessThan50 = Math.random() < .5;

    const correctFlip = numberLessThan50 ? 'heads' : 'tails';

    // compare the user guess to the correct answer
    if (correctFlip === userGuess) {
        current.textContent = 'YOU WON';

        winsData++;
    } else {
        current.textContent = 'YOU LOST';
    }

    const lossesData = totalGuesses - winsData;

    total.textContent = 'total: ' + totalGuesses;
    wins.textContent = 'wins: ' + winsData;
    losses.textContent = 'losses: ' + lossesData;
});