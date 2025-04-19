// Bloquear teclado
try {
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) { e.preventDefault(); }
    });
    document.addEventListener('selectstart', function (e) { e.preventDefault(); });
} catch (e) { console.warn(e); }

// Lista de sites para redirecionamento aleatório
const sitesList = {
    "site-1": "https://google.com",
    "site-2": "https://youtube.com",
    "site-3": "https://x.com",
    "site-4": "https://instagram.com"
    // Adicione mais sites conforme necessário
};

// Função para escolher um site aleatório da lista
function getRandomSite() {
    const keys = Object.keys(sitesList);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return sitesList[randomKey];
}

// Função principal de verificação e redirecionamento
(function redirectIfCloned() {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Se já estiver no domínio permitido, não faz nada
    } else {
        window.location.href = getRandomSite();
    }
})();
