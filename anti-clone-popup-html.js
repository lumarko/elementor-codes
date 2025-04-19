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
    document.body.style.backgroundColor = '#000';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';

    // Recria o conteúdo do body via innerHTML
    document.body.innerHTML = `
        <div style="
            background-color: #202020;
            color: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
            text-align: center;
            font-family: Arial, sans-serif;
        ">
            <h1 style="margin: 0; font-size: 24px;">❌<br>Este site foi clonado indevidamente.</h1>
        </div>
    `;
}

// Código Anti-Clonagem Completo
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Se o domínio estiver correto, não faz nada
    } else {
        setTimeout(function () {
            limparBody();
        }, 1000); // Espera 1 segundo antes de limpar e recriar o conteúdo
    }
});
