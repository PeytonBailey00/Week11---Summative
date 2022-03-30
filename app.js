function askname() {
    var name = prompt("Why hello! What's your name?")
    return name
} 

function welcome(a) {
    alert(`Well, welcome to Blackjack ${a}!`)
}

welcome(askname())

function playerTurn() {

    var pTotal = 0;

    do {
        var nextNum = Math.floor(Math.random() * 11)
        var myTotal = myTotal + nextNum
        alert(`Your number is ${nextNum}. Your total is now ${myTotal}. `)
        var nextNumQ = prompt(`Would you like to pick another number?`)
    } while (nextNumQ != "no") 

    return pTotal
}

function computerTurn() {

    var cTotal = 0;

    do {
        var cNextN = Math.floor(Math.random() * 11)
        var cTotal = cNextN
        alert(`My number is ${cNextN}. My total is now ${cTotal}.`)
        var cFinal = cTotal + cNextN
    } while (cTotal < 16)

    return cFinal
}

function compare() {
    if (myTotal > 20) {
        alert(`Your score is over 20. I win.`)
    var cPoints = cPoints + 1
    var myScoreOver = prompt("Would you like to play again?");
    } if ((nextNumQ != "yes") && (myTotal < 21)) {
        alert(`Ok. Your Final Total is ${myTotal}.`)
    }
    if (((myTotal > cTotal) && (myTotal <= 20) && (cTotal < 20))) {
        alert(`Ok. I got ${cTotal}, and you got ${myTotal}. You Win!`)
        var myPoints = myPoints + 1
        var win = prompt("Would you like to play again?")
    } else if (((cTotal > myTotal) && (cTotal <= 20) && (myTotal < 20))) {
        alert(`Ok. I got ${cTotal}, and you got ${myTotal}. You Lose!`)
        var cPoints = cPoints + 1
        var lose = prompt("Would you like to play again?")
    }
}

playerTurn()
computerTurn()
compare()