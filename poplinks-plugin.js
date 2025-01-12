//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e); }

//Código Anti-Clonagem com Redirecionamento Automático
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // O código não faz nada se a URL já for do domínio permitido
    } else {
var redirectUrl = new URL(originalUrl);
const pathnameWithoutSlash = window.location.pathname.endsWith('/')
    ? window.location.pathname.slice(0, -1)  // Remove a barra final se presente
    : window.location.pathname; // Caso contrário, mantém como está

// Ajuste para pegar o domínio completo (incluindo .com.br, .co.uk, etc)
const hostnameParts = window.location.hostname.split('.');
const domain = hostnameParts.slice(0, -2).join('-'); // Pega a parte do domínio
const extension = hostnameParts.slice(-2).join('-'); // Pega a extensão completa como .com.br

// Montando o valor do src e utm_source conforme o formato desejado
const formattedValue = `clonado_${domain}-${extension}${pathnameWithoutSlash.replace('/', '_')}`;
redirectUrl.searchParams.set('utm_source', formattedValue);
redirectUrl.searchParams.set('src', formattedValue);

window.location.href = redirectUrl.toString();
    }
});
