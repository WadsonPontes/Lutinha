function get(tabela, ...args) {
    return {
        
    };
}

function addBotaoPagina(d) {
    if (d.i == 0) criar(d.pai, 'button', '<<', false, d.clique, 1, d.quantidade);
    else if (d.i == 1) criar(d.pai, 'button', '<', false, d.clique, Math.max(1, d.inicial - d.quantidade), d.quantidade);
    else if (d.i == 2) criar(d.pai, 'button', '1', false, d.clique, 1, d.quantidade);
    else if (d.i == 3 && pagina(d)) criar(d.pai, 'button', '...', true);
    else if (d.i == 9 && pagina(d)) criar(d.pai, 'button', '...', true);
    else if (d.i ==10 && pagina(d)) criar(d.pai, 'button', '...', true);
    else if (d.i ==11) criar(d.pai, 'button', '>', false, d.clique, Math.min(ultimo(d), d.inicial + d.quantidade), d.quantidade);
    else if (d.i ==12) criar(d.pai, 'button', '>>', false, d.clique, ultimo(d), d.quantidade);
    else criar(d.pai, 'button', pagina(d.i), false, d.clique, primeiro(d.i), d.quantidade);
}

function pagina(d) {
    let p = Math.ceil((Math.max(1, d.inicial + (d.i - 6) * d.quantidade) + d.quantidade - 1) / Math.max(1, d.quantidade));

    if (p < 2 || p * d.quantidade + 1 > d.total) return false;
    return p;
}

function primeiro(d) {
    return pagina(d.i - 1) * d.quantidade + 1;
}

function ultimo(d) {
    return (Math.ceil(d.total / d.quantidade) - 1) * d.quantidade + 1;
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
        addBotaoPagina({clique, pai, inicial, quantidade, total, i});
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