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
    'https://pbs.twimg.com/media/Frd3FLkXoAYkQ7w.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4cuqgG4U-ssrId-fuY5HwjM_g7VY-fkhtz9evJTO14N6uWDkLABk6nHnYy00RI7wkrc&usqp=CAU',
    'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img63b22eafdc93b0.18938207.jpg?lastEdited=1672621756&w=600&h=600&f=webp',
    'https://i.pinimg.com/1200x/09/a3/fb/09a3fbbc186f2577137a6669ac3ec526.jpg',
    'https://preview.redd.it/d1gvjyiqs8l61.jpg?auto=webp&s=271f9ba24759d30d87fc274ec61b05b4fd94bc99',
    'https://www.gamevicio.com/static/imagens_up/big/82/mario-mostrando-o-dedo-do-meio-usuarios-aproveitam-o-novo-sistema-de-verificacao-do-twitter-para-brincar-com-os-jogadores-081445.jpg',
];

// Função para escolher uma imagem aleatória da lista
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * blockImages.length);
    return blockImages[randomIndex];
}

// Função para limpar o conteúdo do body e adicionar o popup customizado
function limparBody() {
    const imagemEscolhida = getRandomImage();

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
        // Se o domínio estiver correto, não faz nada
    } else {
        setTimeout(function () {
            limparBody();
        }, 100); // Espera 100ms antes de limpar e recriar o conteúdo
    }
});
