<header id="cabecalho" class="fechado">
    <a href="historico.php">HISTÓRICO DE BATALHAS</a>
    <a href="ficha.php">FICHA DE PERSONAGEM</a>
    <a href="inventario.php">INVENTÁRIO</a>
    <a href="loja.php">LOJA</a>
    <a href="treinamento.php">TREINAMENTO</a>
    <a href="arena.php">ARENA</a>
    <a href="classificacao.php">CLASSIFICAÇÃO</a>
    <a href="sair.php">SAIR</a>
</header>

<script>
    let tela_atual = document.querySelector('#historico');

    function abrir(tela_nova) {
        tela_atual.classList.add('fechado');

        window[tela_nova]();
    }
</script>