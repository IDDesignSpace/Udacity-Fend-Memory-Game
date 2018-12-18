
//  This grabs the list of cards
let cardList = document.querySelectorAll("li.card");

// This spreads the cards out using a spread operator
let cards = [...cardList];

// This grabs the deck 
let deck = document.querySelector('.deck');

//Opened card array
let openCards = [];

//Matched cards
let matchedCards = [];

//Grabs "moves" class from HTML
let movesCounter = document.querySelector('.moves');

//Moves counter
let moves = 0;

//Grabs restart button 
let restartButton = document.querySelector('.restart');

// Grabs star list
let starList  = document.querySelectorAll('.fa-star');
let stars = [...starList];


let minutes = document.querySelector('li.minutes');
let seconds = document.querySelector('li.seconds');
let interval;

// Sets up time
let sec = 0;
let min = 0;

//Grabs elements for Congratulations modal

let modal = document.querySelector('div.modal');
let finalStars = document.querySelector('.final-stars');
let finalMoves = document.querySelector('.final-moves');
let finalMin = document.querySelector('.final-min');
let finalSec = document.querySelector('.final-sec');  
let finalstarRating = 3;


//  This fires the "Start Game" function
document.body.onload = startGame(), restartGame();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Restart game function 
function restartGame() {
    restartButton.addEventListener('click', function restart() {
        location.reload();
    });   
    setTimeout(stopWatch, 1000);
}
//Updates stars based on number of moves
function updateStars() {
    if (moves < 8 && matchedCards.length < 16) {
        for(let i = 0; i < stars.length; i++) {
        stars[i].classList.add('yellow-star');
        finalstarRating = 3;
        }

    } else if (moves < 16 && matchedCards.length < 16) {
        stars[0].classList.remove('yellow-star');
        stars[1].classList.add('yellow-star'); 
        finalstarRating = 2;

    } else if (moves < 24 && matchedCards.length < 16) {
        stars[0].classList.remove('yellow-star');
        stars[1].classList.remove('yellow-star');
        finalstarRating = 1;
    } else {
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.remove('yellow-star');
            finalstarRating = 0;
        }
        return;
    }

}


// Stopwatch function
function stopWatch() {
  interval= setInterval(function () {
        minutes.innerHTML = min;
        seconds.innerHTML = sec;
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            min = 0;
            sec = 0;
        }
    }, 1000);
}

// Display Card Function
function displayCards() {
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].classList.add('open', 'show', 'match');
    }
}

//Upates the HTML with the move counter
function updateMoves() {
    moves++;
    movesCounter.innerHTML = moves;
}

//Adds to open cards
function addOpenCard (card) {
    openCards.push(card);
}

//Clear Open Cards Function
function clearOpenCards() {
    openCards = [];
}

//Adds matched cards to matchedCard array
function addMatchedCards() {
    for (let i = 0; i < openCards.length; i++) {
        openCards[i].classList.add('match', 'show');
        openCards[i].removeEventListener('click', function () {
            openCards[i].classList.add('show', 'open');
            openCards[i].onclick = targetClick(event);
        });
        matchedCards.push(openCards[i]);
        congratsModal();
    }
  
}

function checkOpenCards() {

    // calls update moves function
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        addMatchedCards();
        clearOpenCards();
        
    } else {
        for (let i = 0; i < openCards.length; i++) {
            openCards[i].classList.remove('open', 'show');   
        }
        clearOpenCards();
    }
   
}

//Function creates congratulations modal

function congratsModal() {
    // removes hidden CSS properties
    if (matchedCards.length === 16) {
        modal.classList.remove('hide');
        // Updates final stars
        finalStars.innerHTML = finalstarRating;
        //Updates final moves
        finalMoves.innerHTML = moves;
        //Updates time and clears out timer
        finalSec.innerHTML = sec;
        finalMin.innerHTML = min;

        modal.classList.add('pop');
        clearInterval(interval);
    }

    return;
}


// This is the function that starts the game
function startGame() {

    
    //Cards are shuffled then added to the deck
    let shuffledCards = shuffle(cards);
    
    // This for loop adds each one of the shuffled cards back into the deck
    for(let i = 0;i < shuffledCards.length; i++) {        
        //This calls the deck and then appends each one of the shuffled cards back into the deck
        deck.appendChild(shuffledCards[i]);    
    }
    
    //Calls to displayCards function
    displayCards();

    //This closes the cards after 5 seconds
    setTimeout(function closeCards() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('open', 'show', 'match');
        }
    }, 1200);

    // Adds a click event to each one of the cards and on click card is added to Opened cards 
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click',function () { 
            console.log(cards[i].classList);

           //Upon clicking a card the length of the openCards array is checked  
           if (openCards.length < 2 ) {
               
              cards[i].classList.add('show','open');
              addOpenCard(cards[i]);
        //    cards[i].onclick = targetClick(event);

           } else {
               checkOpenCards();
               updateMoves();
               updateStars();
           }

        });

        // Calls to updateStarsFunction
        updateStars();

        
    }

}

