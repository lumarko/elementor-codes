document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.elementor-button'); // Seleciona links e botões

    /**
     * Função para verificar se o botão é uma âncora
     * @param {string} href
     * @returns {boolean}
     */
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


/*(function () {
    const utmParamQueryString = new URLSearchParams(window.location.search);

    function updateUTMsInUrl(url, utmParams) {
        const params = new URLSearchParams(url.search);
        utmParams.forEach((value, key) => {
            params.set(key, value);
        });
        url.search = params.toString();
    }

    function transferUTMs(newUrl) {
        updateUTMsInUrl(newUrl, utmParamQueryString);
        sessionStorage.removeItem('utmParams');
        sessionStorage.removeItem('nextPageUrl');
        window.location.href = newUrl.toString();
    }

    function addClickListenerToLinks(links) {
        links.forEach(function (item) {
            item.addEventListener('click', function (event) {
                const href = item.getAttribute('href');
                if (href.indexOf('#') === -1) {
                    event.preventDefault();
                    if (item.target === '_blank') {
                        sessionStorage.setItem('utmParams', utmParamQueryString.toString());
                    } else {
                        sessionStorage.setItem('nextPageUrl', href);
                        sessionStorage.setItem('utmParams', utmParamQueryString.toString());
                    }
                    transferUTMs(new URL(href));
                }
            });
        });
    }

    function updateUTMsInLinks(links) {
        links.forEach(function (item) {
            if (item.href.indexOf('#') !== -1) {
                const parts = item.href.split('#');
                const newUrl = new URL(parts[0] + '#' + parts[1]);
                updateUTMsInUrl(newUrl, utmParamQueryString);
                item.href = newUrl.toString();
            } else {
                const newUrl = new URL(item.href);
                updateUTMsInUrl(newUrl, utmParamQueryString);
                item.href = newUrl.toString();
            }
        });
    }

    if (utmParamQueryString.toString()) {
        const navLinks = document.querySelectorAll('a');
        updateUTMsInLinks(navLinks);
        sessionStorage.setItem('utmParams', utmParamQueryString.toString());
    } else {
        const utmParams = sessionStorage.getItem('utmParams');
        if (utmParams) {
            const navLinks = document.querySelectorAll('a');
            updateUTMsInLinks(navLinks);
        }
    }

    const allLinks = document.querySelectorAll('a');
    addClickListenerToLinks(allLinks);
})();
