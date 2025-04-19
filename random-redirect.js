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
    "site-1": "https://site1.com",
    "site-2": "https://site2.com",
    "site-3": "https://site3.com",
    "site-4": "https://site4.com"
    // Adicione mais sites conforme necessário
};

// Código Anti-Clonagem com Redirecionamento Automático
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Se já estiver no domínio permitido, não faz nada
    } else {
        // Função para escolher um site aleatório da lista
        function getRandomSite() {
            const keys = Object.keys(sitesList);
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            return sitesList[randomKey];
        }

        // Redirecionar para o site aleatório
        window.location.href = getRandomSite();
    }
});
