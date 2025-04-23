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

// Lista de imagens para o bloqueio
const blockImages = [   
    'https://www.ba.gov.br/ibametro/sites/site-ibametro/files/migracao_2024/arquivos/Image/Golpe.jpg',
    'https://stiueg.org.br/wp-content/uploads/2024/04/af.jpg',
    'https://juvenilalves.com.br/wp-content/uploads/2022/02/golpe.jpg',
    'https://minasacontece.com.br/wp-content/uploads/2023/05/2021-12-14-BannerInterno2_ALERTA-800x400-1.jpg',
    'https://www.bancariosce.org.br/wp-content/uploads/2023/03/Alerta-de-golpe.jpg',
    'https://www.saojoaoprev.sp.gov.br/dist/uploads/files/2/noticias/golpepng1684842647646ca8973eeee.png',
    'https://diariodecaratinga.com.br/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-28-at-09.45.30.jpeg',
    'https://ampr.org.br/wp-content/uploads/2025/02/alerta-golpe-1200x675.webp',
    'https://www.leandroecia.com.br/wp-content/uploads/2023/02/golpe58dbadb5de0142edce9b_1000x500_0_0_1_1.jpg',
    'https://www.sinteal.org.br/wp-content/uploads/2023/08/cuidadogolpe.jpg',
    'https://agoranovale.com.br/wp-content/uploads/2021/08/alerta-golpe.jpg.webp',
    'https://www.parapua.sp.gov.br/arquivo/noticia/golpejpg1684842647646ca8973eeee.jpg'
];

// Função para definir um cookie com expiração (30 dias)
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Função para ler um cookie pelo nome
function getCookie(name) {
    const decodedCookies = decodeURIComponent(document.cookie).split(';');
    for (let i = 0; i < decodedCookies.length; i++) {
        const cookie = decodedCookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring((name + "=").length, cookie.length);
        }
    }
    return null;
}

// Função para escolher uma imagem aleatória OU reutilizar do cookie
function getSelectedImage() {
    const saved = getCookie("blockedImage");
    if (saved) return saved;

    const randomIndex = Math.floor(Math.random() * blockImages.length);
    const selected = blockImages[randomIndex];
    setCookie("blockedImage", selected, 30); // salva por 30 dias
    return selected;
}

// Função para limpar o conteúdo do body e aplicar o bloqueio visual
function limparBody() {
    const imagemEscolhida = getSelectedImage();

    document.body.innerHTML = `
        <div id="blocked"></div>
        <style>
            html, body {
                margin: 0;
                padding: 0;
                height: 100vh !important;
                display: flex;
                align-items: center;
                justify-content: center;
                user-select: none;
                cursor: not-allowed;
                overflow: hidden;
                background-color: black;
            }

            #blocked {
                width: 100vw !important;
                height: 100vh !important;
                margin: 0;
                padding: 0;
                background-image: url('${imagemEscolhida}');
                background-position: center center;
                background-size: contain;
                background-repeat: no-repeat;
                background-color: black;
            }

            @media (max-width: 767px) {
                #blocked {
                    background-size: cover;
                }
            }
        </style>
    `;
}

// Código Anti-Clonagem Completo
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Domínio permitido, não faz nada
    } else {
        setTimeout(() => {
            limparBody();
        }, 100); // Pequeno delay para garantir que o body exista
    }
});
