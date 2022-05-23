const password = document.getElementById('password')
const copy = document.getElementById('copy')
const length = document.getElementById('length')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const generate = document.getElementById('generate')
let alert = document.querySelector('.alert')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+='

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(){
    const myLength = length.value;
    let pword = ''

    for (let i = 0; i < myLength; i++) {
        const x = generateX()
        if (x){
            pword += x
        }else{
            alert.style.display = "block"
            setTimeout(function() {
                alert.style.display = "none"
            }, 1500)
        }
    }

    password.innerText = pword
}

function generateX(){
    const y = []
    if (upper.checked) {
        y.push(getUpperCase())
    }

    if (lower.checked) {
        y.push(getLowerCase())
    }

    if (number.checked) {
        y.push(getNumber())
    }

    if(symbol.checked){
        y.push(getSymbol())
    }

    return y[Math.floor(Math.random() * y.length)]
}

generate.addEventListener('click', generatePassword)
copy.addEventListener('click', function(){
    console.log(password.innerText)
    navigator.clipboard.writeText(password.innerText).then(function() {
        alert.innerText = "Copied to clipboard!"
        alert.style.display = "block"
        setTimeout(function() {
            alert.style.display = "none"
        }, 1000)
    }, function() {
        alert.innerText = "Unable to copy to clipboard!"
        alert.style.display = "block"
        setTimeout(function() {
            alert.style.display = "none"
        }, 1000)
    });
})
