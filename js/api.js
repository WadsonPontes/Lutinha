function get(tabela, ...args) {
    return {

    };
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
    if (tipo == 'button') elemento.disabled = desativado;
    if (clique) elemento.onclick = () => clique(...parametros);
    pai.appendChild(elemento);
}

function criarPagina(d, texto, inicial_ou_desativado = false) {
    if (inicial_ou_desativado)
        criar(d.pagicacao, 'button', texto, desativado, attTabela, d.nometabela, d.tabela, d.paginacao, inicial_ou_desativado, d.quantidade);
    else
        criar(d.pagicacao, 'button', texto, true);
}

function addPagina(d) {
    if (d.i == 0) criarPagina(d, '<<', 1);
    else if (d.i == 1) criar(d, '<', Math.max(1, d.inicial - d.quantidade));
    else if (d.i == 2) criar(d, '1', 1);
    else if (d.i == 3 && pagina(d)) criar(d, '...');
    else if (d.i == 9 && pagina(d)) criar(d.pai, 'button', '...', true);
    else if (d.i ==10 && pagina(d)) criar(d.pai, 'button', pagina(d.i), false, attTabela, d.nometabela, ultimo(d), d.quantidade);
    else if (d.i ==11) criar(d.pai, 'button', '>', false, attTabela, d.nometabela, Math.min(ultimo(d), d.inicial + d.quantidade), d.quantidade);
    else if (d.i ==12) criar(d.pai, 'button', '>>', false, attTabela, d.nometabela, ultimo(d), d.quantidade);
    else criar(d.pai, 'button', pagina(d.i), false, attTabela, d.nometabela, primeiro(d.i), d.quantidade);
}

function paginar(nometabela, tabela, pagicacao, inicial, quantidade, total) {
    // << < 1 ... 5 6 |7| 8 9 ... 15 > >>
    for (let i = 0; i < 13; ++i) {
        addPagina({nometabela, tabela, pagicacao, inicial, quantidade, total, i});
    }
}

function attTabela(nometabela, tabela, pagicacao, inicial = 1, quantidade = 10) {
    let resposta = get(nometabela, inicial, quantidade);

    tabela.innerHTML = '';

    for (let linha of resposta.dados) {
        const tr = document.createElement('tr');

        for (let campo in linha) {
            criar(tr, 'td', linha[campo]);
        }

        tabela.appendChild(tr);
    }

    paginar(nometabela, tabela, pagicacao, inicial, quantidade, resposta.total);
}