//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e);}

// Função para limpar o conteúdo do body e adicionar o aviso
function substituirPorAviso() {
    // Remove todo o conteúdo existente no body
    document.body.innerHTML = '';

// Código Anti-Clonagem Completo
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.indexOf(urlDomain) === 0) {

    } else {
        substituirPorAviso();
    }
});