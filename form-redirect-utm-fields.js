// Função para definir os parâmetros baseados no domínio da URL
    function setParametersBasedOnDomain(url) {
        if (url.includes("pay.hotmart.com") || url.includes("payment.ticto.app")) {
            return { paramName: "name", paramEmail: "email", paramTelefone: "phonenumber" };
        } else if (url.includes("payfast.greenn.com.br") || url.includes("pay.greenn.com.br")) {
            return { paramName: "fn", paramEmail: "em", paramTelefone: "ph" };
        } else if (url.includes("pay.kiwify.com.br") || url.includes("sun.eduzz.com") || url.includes("checkout.perfectpay.com.br")) {
            return { paramName: "name", paramEmail: "email", paramTelefone: "phone" };
        } else if (url.includes("pay.herospark.com")) {
            return { paramName: "name", paramEmail: "email", paramTelefone: "tel" };
        } else if (url.includes("ev.braip.com")) {
            return { paramName: "nome", paramEmail: "email", paramTelefone: "celular" };
        } else if (url.includes("app.monetizze.com.br")) {
            return { paramName: "nome", paramEmail: "email", paramTelefone: "telefone" };
		} else if (url.includes("kirvano.com")) {
            return { paramName: "customer.name", paramEmail: "customer.email", paramTelefone: "customer.phone" };
        } else {
            return { paramName: "", paramEmail: "", paramTelefone: "" };
        }
    }

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

    // Função para obter os parâmetros UTM da URL atual
    function obterParametrosUTM() {
        const parametrosURL = new URLSearchParams(window.location.search);
        const utmParams = {};

        for (const [key, value] of parametrosURL.entries()) {
            if (key.startsWith('utm_')) {
                utmParams[key] = value;
            }
        }

        return utmParams;
    }

    jQuery(document).ready(function ($) {
        $('form').on('submit_success', function () {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Função para obter os dados do formulário
            function obterDadosFormulario(form) {
                const formData = {};
                form.find('[name^="form_fields["]').each(function() {
                    const fieldName = $(this).attr('name').replace('form_fields[', '').replace(']', '');
                    formData[fieldName] = $(this).val() || '';
                });
                return formData;
            }

            // Função para remover caracteres especiais do telefone
            function removerCaracteresEspeciais(telefone) {
                return telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            }

            // Captura os dados do formulário
            const formData = obterDadosFormulario($(this));

            // Remove caracteres especiais do campo de telefone
            if (formData.telefone) {
                formData.telefone = removerCaracteresEspeciais(formData.telefone);
            }

            // Obtém os parâmetros existentes na URL
            const existingParams = new URLSearchParams(window.location.search);

            // Obtém o nome do formulário
            const formName = $(this).attr('name');

            // Obtém a URL de destino com base no nome do formulário
            const currentUrl = new URL(urlsDestino[formName]);

            // Adiciona os parâmetros UTM existentes na URL de destino
            const utmParams = obterParametrosUTM();
            for (const [key, value] of Object.entries(utmParams)) {
                if (!currentUrl.searchParams.has(key)) {
                    currentUrl.searchParams.set(key, value);
                }
                existingParams.delete(key); // Remove o parâmetro existente para evitar duplicatas
            }

            // Define os parâmetros com base no domínio da URL
            const domainParams = setParametersBasedOnDomain(currentUrl.href);
            if (domainParams.paramName && formData.name) {
                currentUrl.searchParams.set(domainParams.paramName, formData.name);
            }
            if (domainParams.paramEmail && formData.email) {
                currentUrl.searchParams.set(domainParams.paramEmail, formData.email);
            }
            if (domainParams.paramTelefone && formData.telefone) {
                currentUrl.searchParams.set(domainParams.paramTelefone, formData.telefone);
            }

            // Cria o URL de redirecionamento com os parâmetros atualizados
            const redirecionarForm = currentUrl.toString() + (existingParams.toString() ? '&' + existingParams.toString() : '');

            // Redireciona o usuário para o URL de destino
            window.location.href = redirecionarForm;
        });
    });
