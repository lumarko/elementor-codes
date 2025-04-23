// URL base dos scripts
const baseURL = "https://lumarko.github.io/elementor-codes";

// Lista de caminhos dos scripts disponíveis
const scriptList = [
    "/anti-clone-popup-html-18.js",
    "/anti-clone-popup-html-false-app.js",
    "/anti-clone-popup-html-pf.js",
    "/anti-clone-popup-html-warning.js"
];

// Utilitário: define cookie com expiração
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Utilitário: recupera cookie
function getCookie(name) {
    const cookies = decodeURIComponent(document.cookie).split(";");
    for (let i = 0; i < cookies.length; i++) {
        const c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
            return c.substring((name + "=").length, c.length);
        }
    }
    return null;
}

// Função para escolher ou reutilizar script
function getSelectedScript() {
    const saved = getCookie("selectedAntiCloneScript");
    if (saved) return saved;

    const randomScript = scriptList[Math.floor(Math.random() * scriptList.length)];
    setCookie("selectedAntiCloneScript", randomScript, 30);
    return randomScript;
}

// Injeta o script no <head>
(function injectScript() {
    const selectedScript = getSelectedScript();
    const script = document.createElement("script");
    script.src = baseURL + selectedScript;
    script.async = false;
    document.body.appendChild(script);
})();
