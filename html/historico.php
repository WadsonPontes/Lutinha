<section id="historico" class="fechado">
    <table id="tabela-historico">
        <tr>
            <th>Resultado</th>
            <th>Nome</th>
            <th>Nível</th>
            <th>Pontos</th>
            <th>Data</th>
        </tr>
    </table>
</section>

<script>
    const tela_historico = document.querySelector('#historico');
    const tabela_historico = document.querySelector('#tabela-historico');

    function historico() {
        let historico = get('historico');

        tela_historico.classList.remove('fechado');
        tela_atual = tela_historico;
        tabela_historico.innerHTML = '';

        const tr_cabecalho = document.createElement('tr');
        const th_resultado = document.createElement('td');
        const th_nome = document.createElement('td');
        const th_nivel = document.createElement('td');
        const th_pontos = document.createElement('td');
        const th_data = document.createElement('td');

        th_resultado.textContent = 'Resultado';
        th_nome.textContent = 'Nome';
        th_nivel.textContent = 'Nível';
        th_pontos.textContent = 'Pontos';
        th_data.textContent = 'Data';

        tr_cabecalho.appendChild(th_resultado);
        tr_cabecalho.appendChild(th_nome);
        tr_cabecalho.appendChild(th_nivel);
        tr_cabecalho.appendChild(th_pontos);
        tr_cabecalho.appendChild(th_data);

        tabela_historico.appendChild(tr_cabecalho);

        for (let luta of historico) {
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
    }
</script>