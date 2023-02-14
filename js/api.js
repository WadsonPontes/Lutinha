function get(tabela, ...args) {

}

function addBotaoPagina(clique, pai, inicial, quantidade, total, i) {
    if (i == 0 || i == 2) criar(pai, 'button', '<<', false, clique, 1, quantidade);
    else if (i == 1) criar(pai, 'button', '<', false, clique, Math.max(1, inicial - quantidade), quantidade);
    else if (i == 3 && pagina() > 2) criar(pai, 'button', '1', false, clique, 1, quantidade);
}

function pagina() {
    
}

function criar(pai, tipo, texto, desativado, clique, ...parametros) {
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;
    elemento.disabled = desativado;
    elemento.onclick = () => clique(...parametros);
    pai.appendChild(elemento);
}

function paginacao(clique, pai, inicial, quantidade, total) {
    // << < 1 ... 5 6 |7| 8 9 ... 15 > >>
    for (let i = 0; i < 13; ++i) {
        addBotaoPagina(clique, pai, inicial, quantidade, total, i);
    }

    const botao_voltar_tudo = document.createElement('button');
    botao_voltar_tudo.textContent = '<<';
    botao_voltar_tudo.onclick = () => funcao(1, quantidade);

    const botao_voltar = document.createElement('button');
    botao_voltar.textContent = '<';
    botao_voltar.onclick = () => funcao(Math.max(1, inicial - quantidade), quantidade);

    const botao_1 = document.createElement('button');
    botao_1.textContent = '1';
    botao_1.onclick = () => funcao(1, quantidade);

    const botao_reticencias_esquerdo = null;
    const primeiro = Math.max(1, inicial - 2 * quantidade);
    const botao_primeiro = null;
    const valor_primeiro = null;

    if (primeiro > 1 && primeiro <= total) {
        botao_reticencias_esquerdo = document.createElement('button');
        botao_reticencias_esquerdo.textContent = '...';
        botao_reticencias_esquerdo.disabled = true;

        botao_primeiro = document.createElement('button');
        valor_primeiro = (primeiro + quantidade - 1) / Math.max(1, quantidade);
        botao_primeiro.textContent = valor_primeiro.toString();
        botao_primeiro.onclick = () => funcao(valor_primeiro, quantidade);
    }

    const segundo = Math.min(total, inicial - 1 * quantidade);
    const botao_segundo = null;
    const valor_segundo = null;

    if (segundo > 1 && segundo <= total) {
        botao_segundo = document.createElement('button');
        valor_segundo = (segundo + quantidade - 1) / Math.max(1, quantidade);
        botao_segundo.textContent = valor_segundo.toString();
        botao_segundo.onclick = () => funcao(valor_segundo, quantidade);
    }

    const botao_inicial = null;
    const valor_inicial = null;

    if (inicial > 1 && inicial <= total) {
        botao_inicial = document.createElement('button');
        valor_inicial = (inicial + quantidade - 1) / Math.max(1, quantidade);
        botao_inicial.textContent = valor_inicial.toString();
        botao_inicial.onclick = () => funcao(valor_inicial, quantidade);
    }


}