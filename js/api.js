function get(tabela, ...args) {
    if (tabela == 'historico')
        return {
            total: 4,
            dados: [
                'Perdeu', 'Gratus', 32, -2, '02/03/2024',
                'Ganhou', 'Italunn', 29, 10, '01/03/2024',
                'Ganhou', 'Patreus', 20, 6, '26/02/2024',
                'Perdeu', 'Brutralon', 37, -1, '25/02/2024'
            ]
        };
    else if (tabela == 'ficha') {
        return {
            energia: 10,
            vida: 1000,
            dano: 100,
            chance: 0.01,
            armadura: 0.0,
            reflexo: 0.05,
            velocidade: 10,
            pontos: 10,
            vigor: 10,
            vitalidade: 10,
            forca: 10,
            sorte: 10,
            resistencia: 10,
            destreza: 10,
            agilidade: 10
        };
    }
}

function set(tabela, ...args) {
    return;
}

function pagina(d) {
    let p = Math.ceil((Math.max(1, d.inicial + (d.i - 6) * d.quantidade) + d.quantidade - 1) / Math.max(1, d.quantidade));

    if (p < 2 || p * d.quantidade + 1 > d.total) return false;
    return p.toString();
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
        criar(d.pagicacao, 'button', texto, false, attTabela, d.nometabela, d.tabela, d.paginacao, d.inicial, d.quantidade, d.total);
    else
        criar(d.pagicacao, 'button', texto, true);
}

function addPagina(d) {
    if (d.i == 0) criarPagina(d, '<<', 1);
    else if (d.i == 1) criarPagina(d, '<', Math.max(1, d.inicial - d.quantidade));
    else if (d.i == 2) criarPagina(d, '1', 1);
    else if (d.i == 3 && pagina(d)) criarPagina(d, '...');
    else if (d.i == 9 && pagina(d)) criarPagina(d, '...');
    else if (d.i ==10 && pagina(d)) criarPagina(d, pagina(d.i), ultimo(d));
    else if (d.i ==11) criarPagina(d, '>', Math.min(ultimo(d), d.inicial + d.quantidade));
    else if (d.i ==12) criarPagina(d, '>>', ultimo(d));
    else criarPagina(d, pagina(d.i), primeiro(d.i));
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