function init(){
    let botaoFogo = document.getElementById('fireButton');
    botaoFogo.onclick = handleFireButton;

    let palpiteInput = document.getElementById('guessInput');
    palpiteInput.onkeypress = handleKeyPress;
}

function handleKeyPress(e) {
    let botaoFogo = document.getElementById('fireButton');
    if (e.keyCode === 13) {
        botaoFogo.click();
        return false;
    }
}

function handleFireButton() {
    let palpiteInput = document.getElementById('guessInput');
    let palpite = palpiteInput.value;
    controller.palpiteProcessado(palpite);

    palpiteInput.value = '';
}

window.onload = init;

let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function (localizacao) {
        let cell = document.getElementById(localizacao);
        cell.setAttribute('class', 'acerto');
    },
    displayMiss: function (localizacao) {
        let cell = document.getElementById(localizacao);
        cell.setAttribute('class', 'erro');
    }
}


let model = {
    tamanhoGrade: 7,
    numNavios: 3,
    naviosAfundados: 0,
    navioLength: 3,
    navios: [{
            localizacoes: ['00', '01', '02'],
            acertos: ['', '', '']
        },
        {
            localizacoes: ['10', '11', '12'],
            acertos: ['', '', '']
        },
        {
            localizacoes: ['20', '21', '22'],
            acertos: ['', '', '']
        }
    ],
    fogo: function (palpite) {
        for (let i = 0; i < this.numNavios; i++) {
            let navio = this.navios[i];
            let index = navio.localizacoes.indexOf(palpite);
            if (index >= 0) {
                navio.acertos[index] = 'hit';
                view.displayHit(palpite);
                view.displayMessage('HIT');
                if (this.isAfundados(navio)) {
                    view.displayMessage('Você atingiu meu barco!!!!');
                    this.naviosAfundados++;
                }
                return true;
            }
        }
        view.displayMiss(palpite);
        view.displayMessage('Você errou!!!');
        return false;
    },
    isAfundados: function (navio) {
        for (let i = 0; i < this.navioLength; i++) {
            if (navio.acertos[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

let controller = {
    palpites: 0,
    palpiteProcessado: function(palpite) {
        let localizacao = parsePalpite(palpite);
        if (localizacao) {
            this.palpites++
            let acerto = model.fogo(localizacao);
            if (acerto && model.naviosAfundados === model.numNavios) {
                view.displayMessage('Você afundou todos meus navios, em ' + this.palpites + "palpites");
            }
        }
    }
}


function parsePalpite(palpite) {
    let alfalbeto = ['A','B','C','D','F','G'];

    if (palpite === null || palpite.length !== 2) {
        alert('Opa, por favor entre com uma letra e um numero');
    } else {
        let primeiraLetra = palpite.charAt(0);
        let linha = alfalbeto.indexOf(primeiraLetra);
        let coluna = palpite.charAt(1);

        if (isNaN(linha) || isNaN(coluna)) {
            alert('Opa, that isn t on the board.');
        } else if (linha < 0 || linha >= model.tamanhoGrade || coluna < 0 || coluna >= model.tamanhoGrade ) {
            alert('opss, that s off the board');
        } else {
            return linha + coluna;
        }
        return null;
    }
}