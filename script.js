let table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//00 01 02   10 11 12   20 21 22
let x = true;
let vic = 0;

let p = localStorage.getItem('p');


function clique(l, c, t) {

    //alert(p);
    let vezde = document.getElementById('vezde');

    if (vic == 0) {
        if (p == 1) {
            if (table[l][c] == 0) {
                x = !x;
                if (x) {
                    vezde.innerText = "X"
                    t.innerText = "O"
                    table[l][c] = 2;
                } else {
                    vezde.innerText = "O"
                    t.innerText = "X"
                    table[l][c] = 1;
                }
            }
        } else if (p == 0) {
            if (table[l][c] == 0) {

                if (x) {
                    t.innerText = "X"
                    table[l][c] = 1;
                } else {
                    do {
                        n1 = Math.floor(Math.random() * 3);
                        n2 = Math.floor(Math.random() * 3);
                    } while (table[n1][n2] != 0);
                    table[n1][n2] = 2;

                }
            }
            x = !x;
        }
    }


    let res = vitoria();

    if (res == 1) {
        vezde.innerText = "X venceu!"
        vic = 1;
    } else if (res == 2) {
        //alert("O venceu!")
        vezde.innerText = "O venceu!"
        vic = 1;
    }

    let empate = detectDraw();

    if (empate == 1) {
        vezde.innerText = "Empate!"
        //alert("Empate!");
    }


    //let input = document.getElementById('temp')
    //input.value = table;


}

function vitoria() {

    for (let i = 0; i <= 2; i++) {
        if (table[i][0] != 0 &&
            table[i][0] == table[i][1] &&
            table[i][1] == table[i][2]) {

            return table[i][0]; //retorna 1 ou 2
        }
    }

    for (let i = 0; i <= 2; i++) {
        if (table[0][i] != 0 &&
            table[0][i] == table[1][i] &&
            table[1][i] == table[2][i]) {

            return table[0][i];
        }
    }

    if (table[0][0] != 0 &&
        table[0][0] == table[1][1] &&
        table[1][1] == table[2][2]) {

        return table[0][0];
    }

    if (table[0][2] != 0 &&
        table[0][2] == table[1][1] &&
        table[1][1] == table[2][0]) {

        return table[0][2];
    }
}

function pvp() {
    localStorage.setItem('p', 1);
}

function pvai() {
    localStorage.setItem('p', 0);
}

function detectDraw() {
    let count = 0;
    if (vic==0) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (table[i][j] != 0) {
                    count++;
                }
            }
        }
        if (count == 9) {
            return 1;
        }
    }


}
