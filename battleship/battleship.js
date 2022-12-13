let localRandom = Math.floor(Math.random() * 5)
let location1 = localRandom    // хранение позиции для каждой клетке корабля
let location2 = location1 + 1   // хранение позиции для каждой клетке корабля
let location3 = location2 + 2   // хранение позиции для каждой клетке корабля
let guess           //номер текущей попытки
let hits = 0        // количество попаданий
let guesses = 0     // количество попыток
let isSunk = false  // потоплен корабль иди нет

while (isSunk === false) {
    guess = prompt('Ready I am fire! (inter a number 0-6:):')
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!')
    } else {
        guesses = guesses + 1
        if (guess === location1 || guess === location2 || guess === location3) {
            alert('Hit!')
            hits = hits + 1
            if (hits === 3) {
                isSunk = true
                alert('You sank my battleship!')
            }
        } else {
            alert('MISS!')
        }
    }
}

let stats = 'You took ' + guesses + ' guesses to sink to battleship, ' + 'which means your shooting accuracy was ' + (3 / guesses);
alert(stats)
