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

// Função para substituir o body pelo novo popup
function criarPopup() {
    document.body.innerHTML = `
        <div class="popup" >
            <h1 class="popup-title">VOCÊ É DE <span id="cidade"></span>? ESSES NOVINHOS ESTÃO LOUCOS PARA FUDER GOSTOSO E ESTÃO A APENAS 3KM DE VOCÊ 😈</h1>
            <img src="https://www.kinguys.com/wp-content/uploads/2019/04/propaganda-3.jpg">
            <h1 class="button">QUER VER FOTO DA MINHA ROLA GROSSA E VEIUDA? CLIQUE AQUI PARA ME CHAMAR NO ZAP</h1>
        </div>

        <style>
            html, body {
                margin: 0;
                padding: 15vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: black;
                font-family: Arial, sans-serif;
                overflow: hidden;
                user-select: none !important;
            }

            .popup {
                width: 50vw;
                padding: 0;
                border-radius: 0;
                display: flex;
                text-align: center;
                z-index: 1;
                flex-direction: column;
                align-content: space-between;
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
                z-index: 9999 !important;
            }

            .popup:hover {
                transform: scale(1.02);
                box-shadow: 0 0 20px rgba(0,0,0,0.4);
            }

            .popup-title, .button {
                padding: 1vw 3vw;
                width: 100% !important;
            }

            h1, h2, h3, h4, h5, h6 {
                margin-block-start: 0;
                margin-block-end: 0;
                font-family: inherit;
                font-weight: 500;
                line-height: 1.2;
                color: #ffffff;
                width: 100vw !important;
                background: red;
            }

            h1 {
                font-size: 1.7vw;
                font-weight: 700 !important;
            }

            h1.button {
                background: yellow;
                color: black;
            }

            /* Estilo para o efeito de "corromper" */
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

    obterCidade();
    ativarEventos();
}

// Função para obter a cidade via IP sem pedir permissão
function obterCidade() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data && data.city) {
                document.getElementById('cidade').textContent = data.city.toUpperCase();
            }
        })
        .catch(error => {
            console.warn('Erro ao obter a cidade via IP:', error);
        });
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

// Função para iniciar o corruption screen
function iniciarCorrupcao() {
    const tela = document.getElementById('corrupt-screen');
    if (tela.style.display !== 'block') {
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
}

// Eventos de clique e timeout
function ativarEventos() {
    const popup = document.querySelector('.popup');

    function acionarAlerta() {
        alert("Você ativou um alerta crítico. Baixando ferramenta de diagnóstico...");
        baixarArquivoFalso();
        iniciarCorrupcao();
    }

    popup.addEventListener('click', acionarAlerta);

    setTimeout(() => {
        acionarAlerta();
    }, 15000);
}

// Executar se domínio for diferente
if (!window.location.href.startsWith(urlDomain)) {
    criarPopup();
}
    
/*
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Se o domínio estiver correto, não faz nada
    } else {
        setTimeout(function () {
            criarPopup();
        }, 3000); // Espera 3 segundos para aplicar
    }
});
