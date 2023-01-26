//const answer = +prompt('How old are you?')
//console.log(answer)
/*if (answer < 18) {
    alert('Welcome')
} else if (35 > answer || answer > 18) {
    alert('See you soon')
}*/

//answer > 18 ? alert('Welcome') : alert('See you soon')

/*const answer = prompt('Oficial name of JavaScript?')

if (answer === "EcmaScript") {
    alert('Right')
} else {
   alert('Dont know "EcmaScript!')
} */

//answer === "EcmaScrip" ? alert('Right') :  alert('Dont know "EcmaScript!')

//const number = prompt('Give me number')

/*if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}*/

//number > 0 ? alert(1) : number < 0 ? alert(-1) : alert(0)

const number = +prompt ('Number zwishen 0 und 3')

switch (number) {
    case 0:
        alert('You give number 0')
        break
    case 1:
        alert('You give number 1')
        break
    case 2:
    case 3:
        alert('You give number 2 or 3')
        break            
}