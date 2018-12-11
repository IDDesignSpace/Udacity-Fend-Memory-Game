
//  This grabs the list of cards
let cardList = document.querySelectorAll("li.card");

// This spreads the cards out using a spread operator
let cards = [...cardList];

// This grabs the deck 
let deck = document.querySelector('.deck');






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

// This function adds the classes showing where the cards are
function displayCards() {
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].classList.add('open', 'show', 'match');
    }
};



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//  This fires the "Start Game" function
 document.body.onload = startGame();

// This is the function that starts the game
function startGame() {

    //Calls the displayCards function
    displayCards();

    //Cards are shuffled then added to the deck
      let shuffledCards = shuffle(cards);
    
    // This for loop adds each one of the shuffled cards back into the deck
    for(let i = 0;i < shuffledCards.length; i++) {

        // This calls the deck and then appends each one of the shuffled cards back into the deck
        deck.appendChild(shuffledCards[i]); 
    }
    
    //This closes the cards after 5 seconds
    setTimeout( function closeCards() {
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].classList.remove('open', 'show', 'match');
        }
    }, 3000);

}










/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
