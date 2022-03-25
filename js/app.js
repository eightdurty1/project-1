/*----- constants -----*/
const words = [
    'LUNA',
    'CIELO',
    'FASE',
    'ORBITAR',
    'ASTEROIDES',
    'ECLIPSE',
    'LUNA LLENA',
    'MAR LUNA',
    'MAREAS'
];

const imagesArr = [
    'url(images/all-moons_01.png)',
    'url(images/all-moons_02.png)', 
    'url(images/all-moons_03.png)', 
    'url(images/all-moons_04.png)', 
    'url(images/all-moons_05.png)', 
    'url(images/all-moons_06.png)', 
    'url(images/all-moons_07.png)', 

];



/*----- app's state (variables) -----*/
let secretWord;//random word from words
let chosenCorrectLetters;//what letters are right and what position
let chosenIncorrectLetters;// hold wrong letters
let totalAllowedTries;


/*----- cached element references -----*/
const wrongLetterCountElement = document.querySelector('#wrong-let-msg');//worded message will return to player

const lunarPhaseElement = document.querySelector('#sprite');//moon phase image will rotate here

const correctLetters = document.querySelector('#correct-letters');//will hold the correct letter guess

const letterButtons = document.querySelectorAll('#letter-options > button');//will select button from inside the letter-options class

const tryAgainButton = document.querySelector('#try-again-butt');//target the try again button





/*----- event listeners -----*/
document.querySelector('#letter-options').addEventListener('click', chooseLetter)

document.querySelector('#try-again-butt').addEventListener('click', initialize);




initialize();
/*----- functions -----*/
//Initializes game
function initialize(e){
   
//Chooses random word
const random = Math.floor(Math.random() * words.length);
secretWord = words[random];


chosenCorrectLetters = '';

//Adding underline for every character in the secret word
for(let letter of secretWord ){

    chosenCorrectLetters += letter === " " ? " " : "_"


    

};

chosenIncorrectLetters = [];
totalAllowedTries = 6;

renderOnDom();
}


//Tells rendorOnDom what message to tell the player
function messageToPlayer(playerNumGuesses, playerWin, playerLoss) {
    if(playerWin){
        return '¡Felicidades! Superaste el ciclo lunar.';
    }
    if(playerLoss){
        return '¡Juego terminado! El ciclo lunar está completo.';
    }
    
    const alertMessage = playerNumGuesses === 1 ? `Te Queda ${playerNumGuesses} Adivinanza ` : `Te Quedan ${playerNumGuesses} Adivinanzas`;


    return alertMessage;
}

//Checks if their guess matches secret word
function isPlayerWinner(){

    return chosenCorrectLetters === secretWord;
}

//Checks player has tries left
function isPlayerLooser(){

    if(totalAllowedTries - chosenIncorrectLetters.length <= 0){
        return true
    }else{
        return false
    }
}

//This function puts information into the DOM.
function renderOnDom() {



    correctLetters.innerText = chosenCorrectLetters;

    //Updates moon image depending on wrong answers
    lunarPhaseElement.style.background = imagesArr[chosenIncorrectLetters.length];


    wrongLetterCountElement.innerText = messageToPlayer(totalAllowedTries - chosenIncorrectLetters.length, isPlayerWinner(), isPlayerLooser());
    
}

//Checks if character that was clicked on is inside the secretWord. 
function chooseLetter(e){
    if(e.target.tagName === 'SECTION') return;
    

    if(secretWord.includes(e.target.innerText)){
        
        
        let updateGuessWord = '';

        for(let i = 0; i < secretWord.length; i++){
            if(secretWord.charAt(i) === e.target.innerText){
                updateGuessWord += e.target.innerText
            }else{

                updateGuessWord += chosenCorrectLetters.charAt(i);
            }
        }
        chosenCorrectLetters = updateGuessWord

    }else{
        chosenIncorrectLetters.push(e.target.innerText);
    }
    renderOnDom();

    

    
}







