function modificador(numero) {
    if (numero === 3) {
        return -3;
    } else if (numero >= 4 && numero <= 5) {
        return -2;
    } else if (numero >= 6 && numero <= 8) {
        return -1;
    } else if (numero >= 9 && numero <= 12) {
        return 0;
    } else if (numero >= 13 && numero <= 15) {
        return 1;
    } else if (numero >= 16 && numero <= 17) {
        return 2;
    } else if (numero === 18) {
        return 3;
    } else {
        return "Valor inválido";
    }
}

module.exports = modificador;