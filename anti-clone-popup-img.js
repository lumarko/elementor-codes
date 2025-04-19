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
        <div id="blocked"><div>
<style>

body {
    height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    user-select: none;
    cursor: not-allowed;
    overflow: hidden;
}

#blocked {
width: 100vw !important;
height: 100vh !important;
margin: 0;
padding: 0;
background-image: url('https://pbs.twimg.com/media/Frd3FLkXoAYkQ7w.jpg');
background-position: center center;
background-size: fit;
background-repeat: no-repeat;
}

@media (max-width: 767px){
#blocked {
width: 100vw !important;
height: 100vh !important;
margin: 0;
padding: 0;
background-image: url('https://pbs.twimg.com/media/Frd3FLkXoAYkQ7w.jpg');
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
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
        }, 100); // Espera 1 segundo antes de limpar e recriar o conteúdo
    }
});
