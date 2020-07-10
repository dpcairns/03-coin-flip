import { makeCatBox } from './utils.js';

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

const cats = [
    {
        name: 'Tabby',
        weight: 4,
        url: 'http://placekitten.com/300/300' 
    },
    {
        name: 'Rabby',
        weight: 2,
        url: 'http://placekitten.com/400/300' 
    },
    {
        name: 'Labby',
        weight: 1,
        url: 'http://placekitten.com/300/100' 
    },
    {
        name: 'Yabby',
        weight: 5,
        url: 'http://placekitten.com/200/200' 
    },
    {
        name: 'Crabby',
        weight: 5,
        url: 'http://placekitten.com/500/500' 
    },
    {
        name: 'Prabby',
        weight: 5,
        url: 'http://placekitten.com/900/900' 
    },
    {
        name: 'Wabby',
        weight: 5,
        url: 'http://placekitten.com/900/900' 
    }
];

const catsDiv = document.getElementById('cats');

for (let i = 0; i < cats.length; i++) {
    const currentCat = cats[i];
    const box = makeCatBox(currentCat);   
    
    catsDiv.append(box);
}