// Bloquear teclado
try {
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) { e.preventDefault(); }
    });
    document.addEventListener('selectstart', function (e) { e.preventDefault(); });
} catch (e) {
    console.warn(e);
}

// Código Anti-Clonagem para Exibir Alerta
(function blockClonedSite() {
    if (window.location.href.indexOf(urlDomain) === 0) {
        // Se já estiver no domínio permitido, não faz nada
    } else {
        // Reescreve todo o conteúdo do body diretamente
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.backgroundColor = '#000';
        document.body.style.height = '100vh';
        document.body.style.display = 'flex';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';

        document.body.innerHTML = `
            <div style="
                background-color: #202020;
                color: #fff;
                padding: 40px;
                border-radius: 8px;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
                text-align: center;
                font-family: Arial, sans-serif;
            ">
                <h1 style="margin: 0; font-size: 24px;">❌<br>Este site foi clonado indevidamente.</h1>
            </div>
        `;
    }
})();
