<section id="tela-ficha" class="fechado">
    <table>
        <tr>
            <th>Energia</th>
            <td id="energia"></td>
        </tr>
        <tr>
            <th>Vida</th>
            <td id="vida"></td>
        </tr>
        <tr>
            <th>Dano</th>
            <td id="dano"></td>
        </tr>
        <tr>
            <th>Chance de Crítico</th>
            <td id="chance"></td>
        </tr>
        <tr>
            <th>Armadura</th>
            <td id="armadura"></td>
        </tr>
        <tr>
            <th>Reflexo</th>
            <td id="reflexo"></td>
        </tr>
        <tr>
            <th>Velocidade</th>
            <td id="velocidade"></td>
        </tr>
    </table>

    <h3>Pontos para distribuir: <span id="pontos">0</span></h3>

    <table>
        <tr>
            <th>Vigor</th>
            <td id="vigor"></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <th>Vitalidade</th>
            <td id="vitalidade"></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <th>Força</th>
            <td id="forca"></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <th>Sorte</th>
            <td id="sorte"></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <th>Resistência</th>
            <td id="resistencia"></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <th>Destreza</th>
            <td id="destreza"></td>
            <td><button>+</button></td>
        </tr>
        <tr>
            <th>Agilidade</th>
            <td id="agilidade"></td>
            <td><button>+</button></td>
        </tr>
    </table>
</section>

<script>
    const tela_ficha = document.querySelector('#tela-ficha');
    const energia = document.queryElement('#energia');
    const vida = document.queryElement('#vida');
    const dano = document.queryElement('#dano');
    const chance = document.queryElement('#chance');
    const armadura = document.queryElement('#armadura');
    const reflexo = document.queryElement('#reflexo');
    const velocidade = document.queryElement('#velocidade');
    const pontos = document.queryElement('#pontos');
    const vigor = document.queryElement('#vigor');
    const vitalidade = document.queryElement('#vitalidade');
    const forca = document.queryElement('#forca');
    const sorte = document.queryElement('#sorte');
    const resistencia = document.queryElement('#resistencia');
    const destreza = document.queryElement('#destreza');
    const agilidade = document.queryElement('#agilidade');

    function ficha() {
        tela_ficha.classList.remove('fechado');
        tela_atual = tela_ficha;
        let resposta = get('ficha');

        energia.textContent = resposta.energia;
        vida.textContent = resposta.vida;
        dano.textContent = resposta.dano;
        chance.textContent = resposta.chance;
        armadura.textContent = resposta.armadura;
        reflexo.textContent = resposta.reflexo;
        velocidade.textContent = resposta.velocidade;
        pontos.textContent = resposta.pontos;
        vigor.textContent = resposta.vigor;
        vitalidade.textContent = resposta.vitalidade;
        forca.textContent = resposta.forca;
        sorte.textContent = resposta.sorte;
        resistencia.textContent = resposta.resistencia;
        destreza.textContent = resposta.destreza;
        agilidade.textContent = resposta.agilidade;
    }
</script>