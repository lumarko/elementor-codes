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

// Função para limpar o conteúdo do body e adicionar o popup
function limparBody() {
    // Estiliza o body
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';

    // Recria o conteúdo do body via innerHTML
    document.body.innerHTML = `
        <div class="window">
        <img src="https://static.vecteezy.com/system/resources/previews/014/203/828/non_2x/warning-caution-sign-on-transparent-background-free-png.png">
        <h1 style="">Este site foi clonado indevidamente.</h1>
        </div>

        <style>
        html,body{
    background: #ad1b1b !important;
}

.window {
    background-color: white;
    color: #ad1b1b;
    padding: 10vw;
    border-radius: 2vw;
    text-align: center;
}

.window h1 {
    font-size: 3vw !important;
    font-family: Inter, sans-serif
}

img{
    width: 10vw;
    animation: pisca 1s  infinite;
}

@keyframes pisca {
 50% {opacity: 0;}
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
        }, 000); // Espera 1 segundo antes de limpar e recriar o conteúdo
    }
});
