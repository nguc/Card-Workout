// First Letter represents the suit
// Second value represent the value
var DECK = [
    "AH", "AD", "AC", "AS",
    "2H", "2D", "2C", "2S",
    "3H", "3D", "3C", "3S",
    "4H", "4D", "4C", "4S",
    "5H", "5D", "5C", "5S",
    "6H", "6D", "6C", "6S",
    "7H", "7D", "7C", "7S",
    "8H", "8D", "8C", "8S",
    "9H", "9D", "9C", "9S",
    "10H", "10D", "10C", "10S",
    "JH", "JD", "JC", "JS",
    "QH", "QD", "QC", "QS",
    "KH", "KD", "KC", "KS",
]

var WORKOUT_DECK;
var cardsDrawn = 0;

function draw() {


    var numberToDraw = document.getElementById("cards-to-draw").value;
    drawCards(numberToDraw);

    if (cardsDrawn - 1 != 0 && numberToDraw > 0) {
        document.getElementById("cards-to-draw").value--;
        firstCard = false;
    }

}

// document.getElementById("draw").onclick = function () {
//     alert("drawing!");
// };
// This draws the indicated number of cards from the top of a shuffled deck
function drawCards(number) {
    var shuffledDeck = shuffle(DECK);
    WORKOUT_DECK = shuffledDeck.slice(0, number);
    flipCard();
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    var shuffled = array;
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function flipCard() {

    if (cardsDrawn >= WORKOUT_DECK.length)
        return;

    document.getElementById("flipped-card").src = "img/Card Faces/" + WORKOUT_DECK[cardsDrawn] + ".png";
    cardsDrawn++;
}