/*----- constants -----*/
const words = [
    'SEMILLA',
    'REGAR',
    'PLANTA',
    'FRUTOS',
    'TALLO',
    'RAIZ',
    'PETALO',
    'HOJA',
    'FLOR',
    'REGAR',
    'SEMBRAR',
    'ARBOL',
    'POLEN',
    'GIRASOL',
    'ROSA',
    'PINO',
    'REGADERA',
    'MACETA',
    'RASTRILLO',
]


const wrongChanceTotal = 9;

/*----- app's state (variables) -----*/
let secretWord;
let letterChosen;
let incLetter;

//Set elements on the DOM that will be manipulated
const wrongLetCount = document.querySelector('#wrong-let-msg');

const imageChange = document.querySelector('#plant');

const corLetters = document.querySelector('#correct-letters');

const letterButt = document.querySelector('#letter-options');

const tAgainButt = document.querySelector('#try-again-butt');




// setup event listeners
const elLetButtons = document.querySelectorAll('letter-options');
const elTryAgButt = document.querySelector('try-again-butt');
elLetButtons.addEventListner('click', tryAgainClick);
elTryAgButt.addEventListener('click', inital);



// The initial controller function sets all the inital state values (model)

function inital(){
    console.log('this is working');

//this function will set the inital value of our state varaibles defined above
//write a variable that will grab a random value from the words array and assign it to the secretword
let random = Math.floor(Math.random() * words.length);
secretWord = words[random];
//initialize empty string
let letterChosen = '';

//we will then nest an if else statemnt inside of a for loop that check to see if the characters chosen by the player match the secret word, then 




//we will then assign an array to the variable that will store the incorrect letters.




//we will then update the state we just assigned and update the dom with new values.
}



//I will declare a new function that will render messages 

