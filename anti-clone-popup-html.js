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
        // Define todo o conteúdo do body via innerHTML
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.backgroundColor = '#000';
        document.body.style.height = '100vh';
        document.body.innerHTML = `
            <div style="
                background-color: #202020;
                color: #fff;
                padding: 10vw;
                border-radius: 2vw;
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
                text-align: center;
                font-family: Inter, sans-serif;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            ">
                <h1 style="margin: 0; font-size: 2vw;">❌<br>Este site foi clonado indevidamente.</h1>
            </div>
        `;
    }
})();
