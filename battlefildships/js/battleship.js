function init() {
    let fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;

    let guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;

    model.generateShipsLocations();
}

function handleKeyPress(e) {
    let fireButton = document.getElementById('fireButton');
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function handleFireButton() {
    let guessInput = document.getElementById('guessInput');
    let guess = guessInput.value;
    controller.processGuess(guess);

    guessInput.value = '';
}

window.onload = init;

let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'erro');
    }
}


let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: [0, 0, 0],
            hits: ['', '', '']
        },
        {
            locations: [0, 0, 0],
            hits: ['', '', '']
        },
        {
            locations: [0, 0, 0],
            hits: ['', '', '']
        }
    ],
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {

            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);

            if (index >= 0) {

                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('HIT');

                if (this.isSunk(ship)) {

                    view.displayMessage('Você atingiu meu barco!!!!');
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage('Você errou!!!');
        return false;
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },
    generateShipsLocations: function () {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    generateShip: function () {
        let direction = Math.floor(Math.random() * 2);
        let row,
            col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        let newShipLocations = [];

        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    collision: function (locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = model.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};

let controller = {
    guesses: 0,
    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++
                let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('Você afundou todos meus ships, em ' + this.guesses + "guesses");
            }
        }
    }
}


function parseGuess(guess) {
    let alfalbeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    if (guess === null || guess.length !== 2) {
        alert('Opa, por favor entre com uma letra e um numero');
    } else {
        let primeiraletra = guess.charAt(0);
        let linha = alfalbeto.indexOf(primeiraletra);
        let coluna = guess.charAt(1);

        if (isNaN(linha) || isNaN(coluna)) {
            alert('Opa, that isn t on the board.');
        } else if (linha < 0 || linha >= model.boardSize || coluna < 0 || coluna >= model.boardSize) {
            alert('opss, that s off the board');
        } else {
            return linha + coluna;
        }
        return null;
    }
}