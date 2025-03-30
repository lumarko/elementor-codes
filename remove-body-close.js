// Bloquear teclado e ações de inspeção
try {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'I')
        ) {
            e.preventDefault();
        }
    });

    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });
} catch (e) {
    console.warn(e);
}

// Função para limpar o conteúdo do body
function limparBody() {
    document.body.innerHTML = '';
}

// Código Anti-Clonagem Completo
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.indexOf(urlDomain) === 0) {
        return;
    }

    limparBody();

    setTimeout(function () {
        window.close();

        // Caso o navegador bloqueie o fechamento
        setTimeout(function () {
            window.location.replace('about:blank');
        }, 500);
    }, 1000);
});
