function get(tabela, ...args) {

}

function paginacao(funcao, elemento, inicial, quantidade, total) {
    const primeiro = Math.max(1, inicial - 2 * quantidade);
    const segundo = Math.min(total, inicial - 1 * quantidade);

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
    const botao_primeiro = null;
    const label_primeiro = null;

    if (primeiro > 1) {
        botao_reticencias_esquerdo = document.createElement('button');
        botao_reticencias_esquerdo.textContent = '...';
        botao_reticencias_esquerdo.disabled = true;

        botao_primeiro = document.createElement('button');
        label_primeiro = (primeiro + quantidade - 1) / Math.max(1, quantidade);
        botao_primeiro.textContent = label_primeiro.toString();
        botao_primeiro.onclick = () => funcao(label_primeiro, quantidade);
    }

    const botao_segundo = null;
    const label_segundo = null;

    if (segundo > 1) {
        botao_segundo = document.createElement('button');
        label_segundo = (segundo + quantidade - 1) / Math.max(1, quantidade);
        botao_segundo.textContent = label_segundo.toString();
        botao_segundo.onclick = () => funcao(label_segundo, quantidade);
    }
}