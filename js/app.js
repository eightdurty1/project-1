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
    'url(../images/all-moons_01.png)',
    'url(../images/all-moons_02.png)', 
    'url(../images/all-moons_03.png)', 
    'url(../images/all-moons_04.png)', 
    'url(../images/all-moons_05.png)', 
    'url(../images/all-moons_06.png)', 
    'url(../images/all-moons_07.png)', 

];





// const spriteShift = 103;
//declare constant for sprite animation

/*----- app's state (variables) -----*/
let secretWord;//random word from words
let chosenCorrectLetters;//what letters are right and what position
let chosenIncorrectLetters;// hold wrong letters
let totalAllowedTries;

//Set elements on the DOM that will be manipulated
/*----- cached element references -----*/
const wrongLetterCountElement = document.querySelector('#wrong-let-msg');//worded message will return to player

const lunarPhaseElement = document.querySelector('#sprite');//moon phase image will rotate here

const correctLetters = document.querySelector('#correct-letters');//will hold the correct letter guess

const letterButtons = document.querySelectorAll('#letter-options > button');//will select button from inside the letter-options class

const tryAgainButton = document.querySelector('#try-again-butt');//target the try again button




// setup event listeners
/*----- event listeners -----*/
document.querySelector('#letter-options').addEventListener('click', chooseLetter)

document.querySelector('#try-again-butt').addEventListener('click', initialize);




initialize();
/*----- functions -----*/

// The initial controller function sets all the inital state values (model)

function initialize(e){
    // console.log('this is working');



//this function will set the inital value of our state varaibles defined above
//write a variable that will grab a random value from the words array and assign it to the secretword
const random = Math.floor(Math.random() * words.length);
secretWord = words[random];
//initialize empty string
chosenCorrectLetters = '';

//we will then nest an if else statemnt inside of a for loop that check to see if the characters chosen by the player match the secret word. 
for(let letter of secretWord ){

    chosenCorrectLetters += letter === " " ? " " : "_"//






    // if(letter === " "){
    //     letterChosen = letterChosen + " "; 

    // }else{
    //     letterChosen = letterChosen + "_";
    // };

    

};

chosenIncorrectLetters = [];
totalAllowedTries = 6;//changed 9 to 7 to test





//we will then update the state we just assigned and update the dom with new values.
renderOnDom();
}



//I will declare a new function that will render messages 
//function 

function messageToPlayer(playerNumGuesses, playerWin, playerLoss) {
    if(playerWin){
        return '¡Felicidades! Superaste el ciclo lunar.';
    }
    if(playerLoss){
        return '¡Juego terminado! El ciclo lunar está completo.' //Game Over
    }
    //-------> come back to this
    const alertMessage = playerNumGuesses === 1 ? `Te Queda ${playerNumGuesses} Adivinanza ` : `Te Quedan ${playerNumGuesses} Adivinanzas`;

    // const alertMessage = playerNumGuesses === 1 ? `You have ${playerNumGuesses} guess left ` : `You have ${playerNumGuesses} guesses left`;

    return alertMessage;
}

function isPlayerWinner(){

    return chosenCorrectLetters === secretWord;
}


function isPlayerLooser(){

    if(totalAllowedTries - chosenIncorrectLetters.length <= 0){
        return true
    }else{
        return false
    }
}


function renderOnDom() {



    correctLetters.innerText = chosenCorrectLetters;//innerText
    //----->finish here after sprite

    // imageChange.style.backgroundPositionX = `-${spriteWidth * incLetter.length}vmin`


    // imageChange.style.backgroundPositionX = `-${0}px`
    lunarPhaseElement.style.background = imagesArr[chosenIncorrectLetters.length];



    

    // if(incLetter.length === 5){
    //     imageChange.style.width = '125px';
    //     imageChange.style.backgroundPositionX = `-${400}px`;
    // }else{
    //     imageChange.style.width = '110px';
    //     imageChange.style.backgroundPositionX = `-${spriteShift * incLetter.length}px`;
    // }




    // console.log(incLetter)

    //innerText below
    wrongLetterCountElement.innerText = messageToPlayer(totalAllowedTries - chosenIncorrectLetters.length, isPlayerWinner(), isPlayerLooser());
    

    // letterButt.forEach((btns) => {
    //     const letter = btns.innerText;//innerText

    //     if(incLetter.includes(letter)){
    //         btns.className = 'wrong-letter';
    //     }else if(letterChosen.includes(letter)){
    //         btns.className = 'valid-letter';

    //     }else{
    //        btns.className =  '';
    //     };
    // })
}

function chooseLetter(e){
    // console.log(e.target);
    if(e.target.tagName === 'SECTION') return;//here
    

    if(secretWord.includes(e.target.innerText)){//here
        
        
        let updateGuessWord = '';

        for(let i = 0; i < secretWord.length; i++){
            if(secretWord.charAt(i) === e.target.innerText){//here
                updateGuessWord += e.target.innerText//here
            }else{

                updateGuessWord += chosenCorrectLetters.charAt(i);
            }
        }
        chosenCorrectLetters = updateGuessWord

    }else{
        chosenIncorrectLetters.push(e.target.innerText);//here
    }
    renderOnDom();

    console.log(e.target.value);

    // e.target.innerText = '';//here
    
}







