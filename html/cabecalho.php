<header id="tela-cabecalho" class="fechado">
    <button onclick="abrir('historico')">HISTÓRICO DE BATALHAS</button>
    <button onclick="abrir('ficha')">FICHA DE PERSONAGEM</button>
    <button onclick="abrir('inventario')">INVENTÁRIO</button>
    <button onclick="abrir('loja')">LOJA</button>
    <button onclick="abrir('treinamento')">TREINAMENTO</button>
    <button onclick="abrir('arena')">ARENA</button>
    <button onclick="abrir('classificacao')">CLASSIFICAÇÃO</button>
    <button onclick="abrir('sair')">SAIR</button>
</header>

<script>
    let tela_atual = document.querySelector('#tela-historico');

    function abrir(tela_nova) {
        tela_atual.classList.add('fechado');
        window[tela_nova]();
    }
</script>