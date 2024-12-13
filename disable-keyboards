try {
    // Desativar o clique direito do mouse
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Impedir o uso de atalhos de teclado para abrir o DevTools
    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i')) {
            e.preventDefault();
        }
    });

    // Impedir a seleção de texto na página
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Desabilitar o uso do botão direito do mouse em todos os elementos, exceto inputs e textareas
    document.addEventListener('keydown', function (e) {
        if (!e.target.matches("input") && !e.target.matches("textarea")) {
            e.preventDefault();
        }
    });
} catch (e) {
    console.warn(e);
}

// Loop infinito que tenta causar um erro no console do navegador
(function t(n = 0) {
    try {
        if (("" + n / n).length === 1 && n !== 0) {
            (function () {}).constructor("debugger")();
        }
        t(++n);
    } catch (error) {
        setTimeout(() => t(n), 0);
    }
})();
