function itensAleatorios(arrayOriginal, quantidade) {
    const resultado = [];
    const maximoIndice = arrayOriginal.length;

    while (resultado.length < quantidade) {
        const indiceAleatorio = Math.floor(Math.random() * maximoIndice);
        const itemAleatorio = arrayOriginal[indiceAleatorio];

        if (!resultado.includes(itemAleatorio)) {
            resultado.push(itemAleatorio);
        }
    }

    return resultado;
}

module.exports = itensAleatorios;