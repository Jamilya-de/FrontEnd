/*let i = 0

while(i < 3) {
    let num1 = +prompt('Enter first number')
    let num2 = +prompt('enter second number')

    let result = num1 + num2

    alert(result)
    i++
}

alert('Finish')*/

/*for(let i = 0; i < 5; i++) {
    alert(i)
    if (i === 3) {
        break
    }
}*/

/*for(let i = 0; i < 5; i++) {
    
    if (i === 2) {
        continue
    }
    alert(i)
}*/

/*while (true) {
    const num = +prompt('Please enter number more then 100')
    if (num > 100) {
        break
    }
}*/

//function min (a,b) {
    //if (a < b) {
    //    return a
    //} else {
    //    return b
    //}
    
    /*if (a < b) {
        return a 
    }
    return b*/

//    return a < b ? a : b
//}

/*function pow (x,n) {
    let result = 1

    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result
}

let x = +prompt('x?', '')
let n = +prompt('n?', '')

if (n < 0) {
    alert ('Bad request')
} else {
    alert(pow(x,n))
}*/

const numbers = [1,2,3,4,5]
const doubleNumbers = []

numbers.forEach(function(num) {
    doubleNumbers.push(num * 2)
})

console.log(doubleNumbers)