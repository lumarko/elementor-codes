//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e); }

//Anti-clone Código
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.indexOf(urlDomain) === 0) {
    } else {
            const redirectUrl = new URL(window.location.origin);
            redirectUrl.searchParams.set('src', `clonado+${window.location.hostname}+${domain}+${pathSlug}`);

            window.location.href = redirectUrl.toString();
        }, 3000); // Delay de 3 segundos antes de redirecionar
    }
});
