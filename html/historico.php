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
        let historicos = get('historico', inicial, quantidade);

        tela_historico.classList.remove('fechado');
        tela_atual = tela_historico;
        tabela_historico.innerHTML = '';

        for (let luta of historicos.lutas) {
            const tr_linha = document.createElement('tr');
            const td_resultado = document.createElement('td');
            const td_nome = document.createElement('td');
            const td_nivel = document.createElement('td');
            const td_pontos = document.createElement('td');
            const td_data = document.createElement('td');

            td_resultado.textContent = luta.resultado;
            td_nome.textContent = luta.nome;
            td_nivel.textContent = luta.nivel;
            td_pontos.textContent = luta.pontos;
            td_data.textContent = luta.data;

            tr_linha.appendChild(td_resultado);
            tr_linha.appendChild(td_nome);
            tr_linha.appendChild(td_nivel);
            tr_linha.appendChild(td_pontos);
            tr_linha.appendChild(td_data);

            tabela_historico.appendChild(tr_linha);
        }

        paginacao(historico, paginacao_historico, inicial, quantidade, historicos.total);
    }
</script>