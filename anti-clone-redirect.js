//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e); }

//Anti-clone Código
document.addEventListener("DOMContentLoaded", function() {
        if (window.location.href.indexOf(urlDomain) === 0) {
            setTimeout(function() {
                window.location.href = originalUrl;
            }, 500);
        }
});
