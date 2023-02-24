<section id="tela-capa" class="">
    <h1>Lutinha</h1>

    <h2>Carregar jogo salvo</h2>
    <input id="campo-email-usuario" type="text" placeholder="Email ou Usuário">
    <input id="campo-senha" type="text" placeholder="Senha">
    <button onclick="entrar()">ENTRAR</button>
    <label id="erro-login"></label>

    <h2>Novo jogo</h2>

    <img id="img-cabelo" src="circulo.png">
    <select id="tipo-cabelo">
        <option>Liso</option>
        <option>Crespo</option>
    </select>
    <select id="tamanho-cabelo">
        <option>Curto</option>
        <option>Médio</option>
        <option>Grande</option>
    </select>
    <input id="cor-cabelo" type="color">

    <img id="rosto" src="circulo.png">
    <img id="olhos" src="circulo.png">
    <img id="nariz" src="circulo.png">
    <img id="boca" src="circulo.png">
    <img id="pescoco" src="circulo.png">
    <img id="peitoral" src="circulo.png">
    <img id="braco-esquerdo" src="circulo.png">
    <img id="braco-direito" src="circulo.png">
    <img id="quadril" src="circulo.png">
    <img id="perna-esquerda" src="circulo.png">
    <img id="perna-direita" src="circulo.png">
    <button>PADRÃO</button>
    <button>RANDOMIZAR</button>
    <button onclick="criarPersonagem()">CRIAR</button>
</section>

<script>
    let DADOS = null;

    let tela_capa = document.querySelector('#tela-capa');
    let TELA_ATUAL = tela_capa;
    let campo_email_usuario = document.querySelector('#campo-email-usuario');
    let campo_senha = document.querySelector('#campo-senha');
    let erro_login = document.querySelector('#erro-login');
    let tipo_cabelo = document.querySelector('#tipo-cabelo');

    function abrir(tela_nova) {
        TELA_ATUAL.classList.add('fechado');
        window[tela_nova]();
    }

    function entrar() {
        let resposta = get('usuario', campo_email_usuario.value, campo_senha.value);

        if (resposta.estado == 'sucesso') {
            DADOS = resposta.dados;
            abrir('cabecalho');
        }
        else {
            erro_login.textContent = resposta.mensagem;
        }
    }

    function criarPersonagem() {

    }
</script>