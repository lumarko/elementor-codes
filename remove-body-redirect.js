//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e);}

// Função para limpar o conteúdo do body
function limparBody() {
    document.body.innerHTML = '';
}

// Código Anti-Clonagem Completo
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Caso seja o domínio correto, não faz nada
    } else {
        // Remove o conteúdo do body
        limparBody();

        // Após 1 segundo, redireciona para a URL original
        setTimeout(function () {
            var redirectUrl = new URL(originalUrl);
            const pathnameWithoutSlash = window.location.pathname.endsWith('/')
                ? window.location.pathname.slice(0, -1)
                : window.location.pathname;

            const hostnameParts = window.location.hostname.split('.');
            const domain = hostnameParts.slice(0, -2).join('-');
            const extension = hostnameParts.slice(-2).join('-');

            const formattedValue = `clonado_${domain}-${extension}${pathnameWithoutSlash.replace('/', '_')}`;
            redirectUrl.searchParams.set('utm_source', formattedValue);
            redirectUrl.searchParams.set('src', formattedValue);

            window.location.href = redirectUrl.toString();
        }, 1000);
    }
});
