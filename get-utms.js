(function () {
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
