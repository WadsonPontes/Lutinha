<section id="tela-ficha" class="fechado">
    <table>
        <tr>
            <th>Energia</th>
            <td class="campos-atributo"></td>
        </tr>
        <tr>
            <th>Vida</th>
            <td class="campos-atributo"></td>
        </tr>
        <tr>
            <th>Dano</th>
            <td class="campos-atributo"></td>
        </tr>
        <tr>
            <th>Chance de Crítico</th>
            <td class="campos-atributo"></td>
        </tr>
        <tr>
            <th>Armadura</th>
            <td class="campos-atributo"></td>
        </tr>
        <tr>
            <th>Reflexo</th>
            <td class="campos-atributo"></td>
        </tr>
        <tr>
            <th>Velocidade</th>
            <td class="campos-atributo"></td>
        </tr>
    </table>

    <h3>Pontos para distribuir: <span class="campos-atributo">0</span></h3>

    <table>
        <tr>
            <th>Vigor</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('vigor')">+</button></td>
        </tr>
        <tr>
            <th>Vitalidade</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('vitalidade')">+</button></td>
        </tr>
        <tr>
            <th>Força</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('forca')">+</button></td>
        </tr>
        <tr>
            <th>Sorte</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('sorte')">+</button></td>
        </tr>
        <tr>
            <th>Resistência</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('resistencia')">+</button></td>
        </tr>
        <tr>
            <th>Destreza</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('destreza')">+</button></td>
        </tr>
        <tr>
            <th>Agilidade</th>
            <td class="campos-atributo"></td>
            <td><button class="botoes-distribuir" onclick="distribuir('agilidade')">+</button></td>
        </tr>
    </table>
</section>

<script>
    const tela_ficha = document.querySelector('#tela-ficha');
    const campos_atributo = document.querySelectorAll('.campos-atributo');
    const botoes_distribuir = document.querySelectorAll('.botoes-distribuir');

    function ficha() {
        tela_ficha.classList.remove('fechado');
        tela_atual = tela_ficha;
        let resposta = get('ficha');
        let i = 0;

        for (let atributo of resposta) {
            campos_atributo[i].textContent = resposta[atributo];
            ++i;
        }

        if (resposta.pontos == 0) {
            for (let botao in botoes_distribuir) {
                botao.disabled = true;
            }
        }
    }

    function distribuir(atributo) {
        let resposta = set('atributo', atributo);
        ficha();
    }
</script>