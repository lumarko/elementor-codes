document.addEventListener('DOMContentLoaded', function () {
            const elements = document.querySelectorAll('.elementor-button'); // Seleciona links e botões

            elements.forEach(function (element) {
                let href = element.getAttribute('href');

                // Verifica se é um link com href válido
                if (!href || href.startsWith('#')) {
                    return;
                }

                // Obtém os parâmetros UTM da URL atual
                const urlParams = new URLSearchParams(window.location.search);

                if (urlParams.toString()) {
                    const separator = href.includes('?') ? '&' : '?';
                    const newHref = href + separator + urlParams.toString();

                    // Atualiza o href do botão com os parâmetros UTM
                    element.setAttribute('href', newHref);
                }
            });
        });

        // Aplica a mesma lógica quando um popup do Elementor é exibido
        jQuery(document).on('elementor/popup/show', function () {
            const elements = document.querySelectorAll('.elementor-button');

            elements.forEach(function (element) {
                let href = element.getAttribute('href');

                // Verifica se é um link com href válido
                if (!href || href.startsWith('#')) {
                    return;
                }

                // Obtém os parâmetros UTM da URL atual
                const urlParams = new URLSearchParams(window.location.search);

                if (urlParams.toString()) {
                    const separator = href.includes('?') ? '&' : '?';
                    const newHref = href + separator + urlParams.toString();

                    // Atualiza o href do botão com os parâmetros UTM
                    element.setAttribute('href', newHref);
                }
            });
        });
