// The Initial State of the Game:
// Creating a player object:

let player = {
    name : "Per",
    chips : 145,
    sayHello: function(){
        console.log("Hello...");
    }
}

player.sayHello();

let cards = [];
let isAlive = false;
let sum = 0;
let hasBlackJack = false;
let message = "Let's Play";


let message_el = document.getElementById("message-el");
let cards_el = document.getElementById("cards-el");
let sum_el = document.getElementById("sum-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": Rs." + player.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    console.log("Game has started...")
    
    // cards_el.innerText = "Cards: " + cards;
    cards_el.textContent = "Cards: ";
    for(let i=0; i < cards.length; i++)
    {
        cards_el.textContent += cards[i] + " ";
    }
    sum_el.innerText = "Sum of the cards: " + sum;
    
    if (sum == 21)
    {
        message_el.innerText = "Wohoo! You've got Blackjack!";
        // console.log(message_el);
        hasBlackJack = true;
    } 
    else if (sum <= 20)
    {
        message_el.innerText = "Do you want to draw a new card?";
        // console.log(message_el);
    }
    else
    {
        message_el.textContent = "You're out of the game!";
        // console.log(message_el);
    }
}

function newCard() {
    if(isAlive == true && hasBlackJack == false)
    {
        console.log("Drawing a New Card...");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function getRandomCard() {
    let randomCardGenerated = Math.floor(Math.random() * 13) + 1;
    if (randomCardGenerated > 10)
    {
        return 10
    }
    else if(randomCardGenerated == 1)
    {
       return 11;
    }
    else
    {
        return randomCardGenerated;
    }
}