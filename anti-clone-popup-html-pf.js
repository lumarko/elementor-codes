// Bloquear teclado
try {
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) { e.preventDefault(); }
    });
    document.addEventListener('selectstart', function (e) { e.preventDefault(); });
} catch (e) {
    console.warn(e);
}

// Função para limpar o conteúdo do body e adicionar o popup customizado
function limparBody() {
    document.body.innerHTML = `
        <div class="window" >
        <div  class="1242123432"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Pol%C3%ADcia_Federal_do_Brasil.png" class="policia" style="width: 8vw"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/800px-Coat_of_arms_of_Brazil.svg.png" class="gov" style="width: 10vw"></div>
        <h2>OPERAÇÃO CAÇA-RATO</h2><h1>PÁGINA BLOQUEADA</h1>
        <p>O domínio acessado foi bloqueado em decorrência da "Operação CAÇA-RATO", ação integrada, com o intuito de reprimir a pirataria de produtos digitais ilegalmente fornecida pelo detentor da página solicitada e para proteger direitos autorais legítimos.</p><a href="https://www.gov.br/mj/pt-br/assuntos/sua-protecao/sedigi/crimes-digitais">Saiba mais</a></div>

<style>

body {
    height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    background: #ad1b1b;
}

.window {
    background-color: white;
    color: #ad1b1b;
    padding: 5vw;
    border-radius: 0vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    width: 50vw;
    z-index: 9999 !important;
}

h1 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit
    font-size: 2.5rem
}

h2 {
    font-size: 1.7vw;
    color: black;
    margin: 0;
}

p {
    margin-block-start: 0.5vw;margin-block-end: 0;color: black;
    font-weight: 500;
    line-height: 1.3em;
    width: 90%;
}

a {
    background-color: transparent;
    text-decoration: underline;
    color: #4233cc;
    font-weight: 500;
}

.policia {
    width: 8vw !important;
}

.1242123432 {
    gap: 2vw;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vw;
}

</style>
    `;
}

if (!window.location.href.startsWith(urlDomain)) {
    limparBody();
}
