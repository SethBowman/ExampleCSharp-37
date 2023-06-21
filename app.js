

function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Seth")

function multiply(x, y) {
    return x * y;
}

// let mult = multiply(2, 2)
// console.log(mult)

function printMultTable(number) {
    for(let i = 1; i <= 10; i++) {
        let result = multiply(number, i);
        console.log(`${number} x ${i} = ${result}`)
    }
}

printMultTable(12)

