//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e); }

// Anti-clone Código
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // O código não faz nada se a URL já for do domínio permitido
    } else {
        setTimeout(function() {
            const redirectUrl = new URL(window.location.origin);
            // Construindo a URL com a estrutura desejada
            redirectUrl.searchParams.set('src', `clonado+${window.location.hostname.split('.').slice(0, -1).join('.')}+${window.location.hostname.split('.').pop()}+${window.location.pathname.replace('/', '')}`);
            window.location.href = redirectUrl.toString();
        }, 3000); // Delay de 3 segundos antes de redirecionar
    }
});
