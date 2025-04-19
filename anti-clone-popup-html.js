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
        <div class="window">
            <div class="logos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Pol%C3%ADcia_Federal_do_Brasil.png" class="policia" alt="Polícia Federal">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/800px-Coat_of_arms_of_Brazil.svg.png" class="gov" alt="Governo do Brasil">
            </div>
            <h2>OPERAÇÃO CAÇA-RATO</h2>
            <h1>PÁGINA BLOQUEADA</h1>
            <p>O domínio acessado foi bloqueado em decorrência da "Operação CAÇA-RATO", ação integrada, com o intuito de reprimir a pirataria de produtos digitais ilegalmente fornecida pelo detentor da página solicitada e para proteger direitos autorais legítimos.</p>
            <a href="https://www.gov.br/mj/pt-br/assuntos/sua-protecao/sedigi/crimes-digitais" target="_blank">Saiba mais</a>
        </div>

        <style>
            html, body {
                margin: 0;
                padding: 0;
                height: 100vh !important;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ad1b1b;
                font-family: Arial, sans-serif;
            }

            .window {
                background-color: white;
                color: #ad1b1b;
                padding: 5vw;
                border-radius: 0;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                align-items: center;
                gap: 1vw;
                width: 50vw;
            }

            .logos {
                gap: 2vw;
                display: flex;
                flex-direction: row;
                align-content: center;
                justify-content: center;
                align-items: center;
                margin-bottom: 2vw;
            }

            .policia, .gov {
                width: 8vw;
            }

            h1 {
                font-family: inherit;
                font-weight: 500;
                line-height: 1.2;
                color: inherit;
                font-size: 2.5rem;
                margin: 0;
            }

            h2 {
                font-size: 1.7vw;
                color: black;
                margin: 0;
            }

            p {
                margin-block-start: 0.5vw;
                margin-block-end: 0;
                color: black;
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
        </style>
    `;
}

// Verificação do domínio e execução imediata
if (window.location.href.indexOf(urlDomain) === 0) {
    // Se o domínio for o correto, não faz nada
} else {
    limparBody(); // Substitui o body imediatamente
}
