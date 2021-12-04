let readyPassword = document.querySelector('.password')
let generateButton = document.querySelector('.button')

let inputNumbers = document.querySelector('.numbers')
let toogleNumbers = false;

let inputLowerCase = document.querySelector('.lowerCase')
let toogleLower = false;

let inputSymbols = document.querySelector('.symbols')
let toogleSymbols = false;

let randomArr = [];
let allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let allNumber = [1,2,3,4,5,6,7,8,9,0]
let allSymbols = ['!','@','#','$','%','^','&','*','(',')','-',',','.','/',':',';','<','+','=','>','?']


function numbers() {
    let length = document.querySelector('.length').value;
    for(let i = 0; i < length; i++) {
        randomArr.push(allNumber[Math.floor(Math.random() * allNumber.length)])
    }
}

function lower() {
    let length = document.querySelector('.length').value;
    for(let i = 0; i < length; i++) {
        randomArr.push(allLetters[Math.floor(Math.random() * allLetters.length)])
    }
}

function symbols() {
    let length = document.querySelector('.length').value;
    for(let i = 0; i < length; i++) {
        randomArr.push(allSymbols[Math.floor(Math.random() * allSymbols.length)])
    }
}

function numbersLower() {
    let length = document.querySelector('.length').value;
    let newArr = allLetters.concat(allNumber)
    for(let i = 0; i < length; i++) {
        randomArr.push(newArr[Math.floor(Math.random() * newArr.length)])
    }
}

function numbersSymbols() {
    let length = document.querySelector('.length').value;
    let newArr = allNumber.concat(allSymbols)
    for (let i = 0; i < length; i++) {
        randomArr.push(newArr[Math.floor(Math.random() * newArr.length)])
    }
}

function lowerSymbols() {
    let length = document.querySelector('.length').value;
    let newArr = allSymbols.concat(allLetters) 
    for (let i = 0; i < length; i++) {
        randomArr.push(newArr[Math.floor(Math.random() * newArr.length)])
    }
}

function numbersLowerSymbols() {
    let length = document.querySelector('.length').value;
    let newArr = allNumber.concat(allLetters).concat(allSymbols)
    for (let i = 0; i < length; i++) {
        randomArr.push(newArr[Math.floor(Math.random() * newArr.length)])
    }
}


function clearPassword() {
    randomArr.splice(0, randomArr.length)
}

inputNumbers.addEventListener('click', () => {
    toogleNumbers = !toogleNumbers;
    (toogleNumbers) ? inputNumbers.setAttribute('checked', '') : inputNumbers.removeAttribute('checked')
})

inputLowerCase.addEventListener('click', () => {
    toogleLower = !toogleLower;
    (toogleLower) ? inputLowerCase.setAttribute('checked', '') : inputLowerCase.removeAttribute('checked')
})

inputSymbols.addEventListener('click', () => {
    toogleSymbols = !toogleSymbols;
    (toogleSymbols) ? inputSymbols.setAttribute('checked', '') : inputSymbols.removeAttribute('checked')
})


generateButton.addEventListener('click', () => {
    if (inputNumbers.hasAttribute('checked') == true  && inputLowerCase.hasAttribute('checked') == false && inputSymbols.hasAttribute('checked') == false) {
        numbers()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    if (inputLowerCase.hasAttribute('checked') == true && inputSymbols.hasAttribute('checked') == false && inputNumbers.hasAttribute('checked') == false) {
        lower()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    if (inputSymbols.hasAttribute('checked') == true && inputNumbers.hasAttribute('checked') == false && inputLowerCase.hasAttribute('checked') == false) {
        symbols()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    if(inputNumbers.hasAttribute('checked') == true && inputLowerCase.hasAttribute('checked') == true) {
        numbersLower()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    if (inputNumbers.hasAttribute('checked') == true && inputSymbols.hasAttribute('checked') == true) {
        numbersSymbols()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    if (inputSymbols.hasAttribute('checked') == true && inputLowerCase.hasAttribute('checked') == true) {
        lowerSymbols()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    if (inputSymbols.hasAttribute('checked') == true && inputLowerCase.hasAttribute('checked') == true && inputNumbers.hasAttribute('checked') == true) {
        numbersLowerSymbols()
        readyPassword.innerHTML = randomArr.join('')
        clearPassword()
    }

    //error
    if (inputSymbols.hasAttribute('checked') == false && inputLowerCase.hasAttribute('checked') == false && inputNumbers.hasAttribute('checked') == false) {
        clearPassword()
        readyPassword.innerHTML = randomArr.join('')
    }
})




