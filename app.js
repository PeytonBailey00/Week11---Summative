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

console.log(rulesQ())

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

console.log(starter1())

function starter2() {
    alert("Too bad.")
}

function myStart() {
    alert("I'll let you go first. We aren't following Casino rules in case you haven't noticed.")
}

if (rulesQ() == "yes") {
    knowledge()
} else if (rulesQ() == "no") {
    education1()
    education2()
    education3()
    starter1()
}

if (starter1() == "no") {
    starter2()
} 