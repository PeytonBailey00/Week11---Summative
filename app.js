function askname() {
    var name = prompt("Why hello! What's your name?")
    return name
} 

function welcome(a) {
    alert(`Well, welcome to Blackjack ${a}!`)
}

welcome(askname())

function rulesQ() {
    var ques1 = prompt("Do you know how to play Blackjack?")
    return ques1
}

var rules = rulesQ()

function knowledge() {
    alert("Awesome! Let's get started!")
}

function education1() {
    alert("Ok. So what we're going to do is we're both going to draw cards.")
}

function education2() {
    alert("I will stop once I reach 17 or higher, but you can go as high as you want.")
}

function education3() {
    alert("But remember, try to stay under 21.")
}

function starter1() {
    var ready = prompt("Are you ready?")
    return ready
}

var readyQ = starter1()

function starter2() {
    alert("Too bad.")
}

function myStart() {
    alert("I'll let you go first. We aren't following Casino rules.")
}

// Player's Turn Starts Here

function myPoint() {
    var myPoints = 0
    return myPoints
}

function cPoint() {
    var cPoints = 0
    return cPoints
}

function myMath1() {
    var myNumA = Math.floor(Math.random() * 11)
    return myNumA
}

var myNum1 = myMath1()

function myNumAlert1() {
    alert(`Your First card is ${myNum1}`)
}

function myMath2() {
    var myNumB = Math.floor(Math.random() * 11)
    return myNumB
}

var myNum2 = myMath2()

function myNumAlert2() {
    alert(`Your Second card is ${myNum2}`)
}

function myStartTotal() {
    var myTotal = myNum1 + myNum2
    return myTotal
}

var myT = myStartTotal()

function myStartAlert() {
    var nextNum = prompt(`Your total is ${myT}. Would you like to draw another card?`)
    return nextNum
}

// Drawing Cards Do While Loop Functions Start Here

function doNum() {
    var nextNum = Math.floor(Math.random() * 11)
    return nextNum
}

var nNum = doNum()

function doNumA() {
    alert(`Your next card is ${nNum}.`)
}

var nextT = nNum + myT

function nextTotal() {
    var numAgain = prompt(`Your total is now ${nextT}. Would you like to draw another card?`)
    return numAgain
}

function myScoreOver() {
    alert("Your score is over 20. I win.")
}

function losePoint() {
    var cPoints = cPoints + 1
    return cPoints
}

function playAgainA() {
    var lose = prompt("Would you like to play again?")
    return lose
}










if (rules == "yes") {
    knowledge()
} else if (rules == "no") {
    education1()
    education2()
    education3()
    starter1()
}

if (readyQ == "no") {
    starter2()
} else if (readyQ == "yes") {
    myStart()
}

myPoint()
cPoint()
myMath1()
myNumAlert1()
myMath2()
myNumAlert2()
myStartTotal()
myStartAlert()

do {
    doNum()
    doNumA()
    nextTotal()
} while ((nextNum == "yes") && (numAgain == "yes"))

