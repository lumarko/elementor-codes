//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e); }

//Anti-clone Código
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.indexOf(urlDomain) === 0) {
    } else {
            setTimeout(function() {
            // Adiciona os parâmetros da URL original à URL de redirecionamento
            var redirectUrl = new URL(originalUrl);
            var currentParams = new URLSearchParams(window.location.search);
            currentParams.forEach((value, key) => {
                redirectUrl.searchParams.set(key, value);
            });

            // Adiciona o parâmetro "src=clonado"
            redirectUrl.searchParams.set('src', 'clonado');
            window.location.href = redirectUrl.toString();
        }, 500);
    }
});
