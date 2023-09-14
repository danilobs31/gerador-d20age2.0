function rolarDados(numeroDados, facesDados) {
    let resultados = 0;

    for (let i = 0; i < numeroDados; i++) {
        const resultadoDado = Math.floor(Math.random() * facesDados) + 1;
        resultados = resultados + resultadoDado;
    }

    return resultados;
}

module.exports = rolarDados;