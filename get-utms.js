document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.elementor-button'); // Seleciona links e botões

    function isAnchorLink(href) {
        return href.startsWith('#') || href === '';
    }

    elements.forEach(function (element) {
        let href = element.getAttribute('href');

        // Verifica se o link é uma âncora ou não tem href
        if (!href || isAnchorLink(href)) {
            return;
        }

        // Obtém os parâmetros UTM da URL atual
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.toString()) {
            // Verifica se a URL já contém os parâmetros UTM
            const currentUrlParams = new URLSearchParams(href.split('?')[1]);

            urlParams.forEach((value, key) => {
                if (!currentUrlParams.has(key)) {
                    currentUrlParams.set(key, value);
                }
            });

            // Atualiza o href do botão com os parâmetros UTM
            const newHref = href.split('?')[0] + '?' + currentUrlParams.toString();
            element.setAttribute('href', newHref);
        }
    });
});
