// Bloquear teclado e ações do mouse
try {
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    document.addEventListener('keydown', function (e) {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
        }
    });
    document.addEventListener('selectstart', function (e) { e.preventDefault(); });
} catch (e) {
    console.warn(e);
}

function baixarArquivoFalso() {
    const blob = new Blob([""], { type: "application/octet-stream" }); // Arquivo vazio
    const nomeAleatorio = 'antivirus-superior-defense-' + Math.floor(Math.random() * 1000000) + '.exe';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nomeAleatorio;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Função para limpar o conteúdo da página e exibir alerta
function limparBody() {
    document.body.innerHTML = `
        <div class="popup">
            <div class="popup-header">
                <h1 class="popup-title">⚠️ AVISO</h1>
            </div>
            <div class="popup-message">
                <h2>Seu sistema foi gravemente danificado.</h2><br>
                Detectamos que uma parte das configurações de navegação na internet do seu dispositivo foi danificada devido à presença de <span class="virus-number">4 vírus</span> contraídos em sites adultos. Em breve, o cartão SIM do seu telefone poderá ser danificado, e seus contatos, fotos, dados, aplicativos etc poderão ser corrompidos.<br><br>Instale o nosso aplicativo de segurança para limpar esses vírus IMEDIATAMENTE para que você não perca os seus dados para sempre.
            </div>
            <div class="popup-buttons">
                <button class="cancel-button">Cancelar</button>
                <button class="clean-button">Instalar</button>
            </div>
        </div>

        <style>
            html, body {
                margin: 0;
                padding: 15vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                font-family: Arial, sans-serif;
                overflow: hidden;
                user-select: none !important;
            }

            .popup {
                position: relative;
                background: white;
                color: black;
                width: fit-content;
                padding: 0;
                border-radius: 20px;
                box-shadow: 0 0 48px rgba(0, 0, 0, 0.3);
                text-align: center;
                z-index: 1;
                overflow: hidden;
            }

            .popup-header {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                color: red;
                margin-bottom: 1vw;
                padding: 2vw 2vw 0vw 2vw;
            }

            .popup-message {
                font-size: 14px;
                color: black;
                width: 100%;
                padding: 2vw;
            }

            .virus-number {
                color: red;
                font-weight: bold;
            }

            .popup-buttons {
                display: flex;
                justify-content: space-between;
                gap: 0;
            }

            .popup-buttons button {
                flex: 1;
                padding: 10px;
                border: 1px solid #ccc;
                background: none;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                border-radius: 0;
                color: blue;
                outline: none;
            }

            .cancel-button, .clean-button {
                color: blue;
            }

            h1, h2 {
                margin: 0;
                font-family: inherit;
                font-weight: 600;
                line-height: 1.2;
            }

            h2 {
                font-size: 21px;
            }

            #corrupt-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: red;
                color: white;
                font-family: monospace;
                font-size: 24px;
                padding: 10px;
                white-space: pre-wrap;
                overflow-wrap: break-word;
                z-index: 9999;
                display: none;
                overflow-y: visible !important;
            }
        </style>
        <div id="corrupt-screen">VOCÊ FOI HACKEADO...</div>
    `;

    setTimeout(() => {
        const cancelButton = document.querySelector('.cancel-button');
        const cleanButton = document.querySelector('.clean-button');

        function alertaAviso(e) {
            e.preventDefault();
            alert('ATENÇÃO: Foi detectada a tentativa de baixar um aplicativo desconhecido no seu dispositivo.\nClique em OK para continuar.');
            baixarArquivoFalso(); // Faz o download do arquivo falso
            e.target.blur();
            iniciarCorrupcao();
        }

        if (cancelButton) cancelButton.addEventListener('click', alertaAviso);
        if (cleanButton) cleanButton.addEventListener('click', alertaAviso);
    }, 100);
}

// Efeito de "corrupção" na tela
function iniciarCorrupcao() {
    const tela = document.getElementById('corrupt-screen');
    tela.style.display = 'block';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?/\\';
    setInterval(() => {
        const randomChar = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        tela.textContent += randomChar;
        if (tela.textContent.length > 10000) {
            tela.textContent = '';
        }
    }, 1);
}

// Verifica domínio e executa o alerta
if (!window.location.href.startsWith(urlDomain)) {
    limparBody();
}
