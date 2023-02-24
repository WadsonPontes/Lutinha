<section id="tela-historico" class="fechado">
    <table>
        <thead>
            <tr>
                <th>Resultado</th>
                <th>Nome</th>
                <th>Nível</th>
                <th>Pontos</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody id="tabela-historico">
        </tbody>
    </table>

    <footer id="paginacao-historico"></footer>
</section>

<script>
    const tela_historico = document.querySelector('#tela-historico');
    const tabela_historico = document.querySelector('#tabela-historico');
    const paginacao_historico = document.querySelector('#paginacao-historico');

    function historico(inicial = 1, quantidade = 10) {
        tela_historico.classList.remove('fechado');
        TELA_ATUAL = tela_historico;
        attTabela('historico', tabela_historico, paginacao_historico, inicial, quantidade);
    }
</script>