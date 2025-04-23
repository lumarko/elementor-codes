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

// Utilitários de cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie).split(";");
    for (let i = 0; i < cookies.length; i++) {
        const c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
            return c.substring((name + "=").length, c.length);
        }
    }
    return null;
}

// Frases possíveis
const warningTexts = [
    "Este site foi clonado indevidamente.",
    "Cuidado, alerta de golpe!"
];

// Pega a frase do cookie ou sorteia e salva
function getWarningText() {
    const saved = getCookie("warningText");
    if (saved) return saved;

    const random = warningTexts[Math.floor(Math.random() * warningTexts.length)];
    setCookie("warningText", random, 30);
    return random;
}

// Função para limpar o conteúdo do body e adicionar o popup customizado
function limparBody() {
    const selectedText = getWarningText();

    document.body.innerHTML = `
        <div class="window">
            <img src="https://static.vecteezy.com/system/resources/previews/014/203/828/non_2x/warning-caution-sign-on-transparent-background-free-png.png" alt="Alerta">
            <h1>${selectedText}</h1>
            <h2>Por favor, <span style="color: #ad1b1b;">denuncie</span> esse site.</h2>
        </div>

        <style>
            html, body {
                background: #ad1b1b !important;
                margin: 0;
                padding: 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .window {
                background-color: white;
                color: #ad1b1b;
                padding: 10vw;
                border-radius: 2vw;
                text-align: center;
                box-shadow: 0 0 20px rgba(0,0,0,0.5);
                z-index: 9999 !important;
            }

            .window h1 {
                font-size: 2.5vw !important;
                font-family: Inter, sans-serif;
                margin: 2vw 0 0 0;
            }

            .window h2 {
                font-size: 1.25vw;
                margin-top: 1vw;
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: black;
            }

            .window img {
                width: 10vw;
                animation: pisca 1s infinite;
            }

            @keyframes pisca {
                50% { opacity: 0; }
            }
        </style>
    `;
}

// Executa o bloqueio se for um domínio clonado
if (!window.location.href.startsWith(urlDomain)) {
    limparBody();
}
