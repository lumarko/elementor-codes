 document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (link.getAttribute('href').startsWith('#')) {
                return;
            }
            event.preventDefault();

            const clickedURL = link.getAttribute('href');
            const urlParams = new URLSearchParams(window.location.search);

            const separator = clickedURL.includes('?') ? '&' : '?';

            const redirectURL = clickedURL + separator + urlParams.toString();

            window.location.href = redirectURL;
        });
    });
});

        function obterParametrosUTM() {
            const parametrosURL = new URLSearchParams(window.location.search);
            const utmParams = {};

            for (const [key, value] of parametrosURL.entries()) {
                utmParams[key] = value;
            }

            return utmParams;
        }

        jQuery(document).ready(function ($) {
            $('form').on('submit_success', function () {
                const formName = $(this).attr('name');
                const currentUrl = new URL(urlsDestino[formName]);
                const utmParams = obterParametrosUTM();

                Object.entries(utmParams).forEach(([key, value]) => {
                    if (value) {
                        currentUrl.searchParams.set(key, value);
                    }
                });

                const redirecionar = currentUrl.toString();
                window.location.href = redirecionar;
            });
        });

	   jQuery(document).on('elementor/popup/show', () => {
	        document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (link.getAttribute('href').startsWith('#')) {
                return;
            }
            event.preventDefault();

            const clickedURL = link.getAttribute('href');
            const urlParams = new URLSearchParams(window.location.search);

            const separator = clickedURL.includes('?') ? '&' : '?';

            const redirectURL = clickedURL + separator + urlParams.toString();

            window.location.href = redirectURL;
        });
    });
});

        function obterParametrosUTM() {
            const parametrosURL = new URLSearchParams(window.location.search);
            const utmParams = {};

            for (const [key, value] of parametrosURL.entries()) {
                utmParams[key] = value;
            }

            return utmParams;
        }

        jQuery(document).ready(function ($) {
            $('form').on('submit_success', function () {
                const formName = $(this).attr('name');
                const currentUrl = new URL(urlsDestino[formName]);
                const utmParams = obterParametrosUTM();

                Object.entries(utmParams).forEach(([key, value]) => {
                    if (value) {
                        currentUrl.searchParams.set(key, value);
                    }
                });

                const redirecionar = currentUrl.toString();
                window.location.href = redirecionar;
            });
        });
});
