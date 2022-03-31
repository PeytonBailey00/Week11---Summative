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
        var pTotal = nextNum + pTotal
        alert(`Your number is ${nextNum}.`)
        alert(`Your total is now ${pTotal}`)
        var nextNumQ = prompt(`Would you like to pick another number?`)
    } while (nextNumQ != "no") 

    return pTotal
}

var playerT = playerTurn()

function computerTurn() {

    var cTotal = 0;

    do {
        var cNextN = Math.floor(Math.random() * 11)
        var cTotal = cTotal + cNextN
        alert(`My number is ${cNextN}.`)
        alert(`My total is now ${cTotal}`)
    } while (cTotal < 16)

    return cTotal

}

function compare() {
    if (playerT > 20) {
        alert(`Your score is over 20. I win.`)
    var cPoints = cPoints + 1
    var myScoreOver = prompt("Would you like to play again?")

    return myScoreOver
    } if ((nextNumQ != "yes") && (playerT < 21)) {
        alert(`Ok. Your Final Total is ${pTotal}.`)
    }
    if (((playerT > cTotal) && (playerT <= 20) && (cTotal < 20))) {
        alert(`Ok. I got ${cTotal}, and you got ${playerT}. You Win!`)
        var myPoints = myPoints + 1
        var win = prompt("Would you like to play again?")

        return win
    } else if (((cTotal > playerT) && (cTotal <= 20) && (playerT < 20))) {
        alert(`Ok. I got ${cTotal}, and you got ${playerT}. You Lose!`)
        var cPoints = cPoints + 1
        var lose = prompt("Would you like to play again?")

        return lose
    }
}

playerTurn()

compare()