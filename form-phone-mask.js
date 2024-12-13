function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("execmascara()", 1);
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}

function removerMascara(valor) {
    return valor.replace(/\D/g, ""); // Remove tudo que não for número
}

// Máscaras específicas
function mascaraCpf(valor) {
    valor = removerMascara(valor);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

function mascaraCnpj(valor) {
    valor = removerMascara(valor);
    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    return valor;
}

function mascaraTelefone(valor) {
    valor = removerMascara(valor);
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

function mascaraMoeda(valor) {
    valor = removerMascara(valor);
    if (valor === "") return "";
    valor = parseInt(valor).toString();
    valor = (parseInt(valor) / 100).toFixed(2);
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return "R$ " + valor;
}

function mascaraCep(valor) {
    valor = removerMascara(valor);
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    return valor;
}

function mascaraData(valor) {
    valor = removerMascara(valor);
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    return valor;
}

function mascaraHora(valor) {
    valor = removerMascara(valor);
    valor = valor.replace(/(\d{2})(\d)/, "$1:$2");
    return valor;
}

window.onload = function() {
    configurarMascara('cpf', '.elementor-form input[name="form_fields[cpf]"]', mascaraCpf, 14);
    configurarMascara('cnpj', '.elementor-form input[name="form_fields[cnpj]"]', mascaraCnpj, 18);
    configurarMascara('telefone', '.elementor-form input[name="form_fields[telefone]"]', mascaraTelefone, 15);
    configurarMascara('moeda', '.elementor-form input[name="form_fields[moeda]"]', mascaraMoeda, 20);
    configurarMascara('cep', '.elementor-form input[name="form_fields[cep]"]', mascaraCep, 9);
    configurarMascara('data', '.elementor-form input[name="form_fields[data]"]', mascaraData, 10);
    configurarMascara('hora', '.elementor-form input[name="form_fields[hora]"]', mascaraHora, 8);
};

function configurarMascara(tipo, seletor, funcaoMascara, tamanhoMax) {
    let campos = document.querySelectorAll(seletor);
    campos.forEach(function(campo) {
        campo.setAttribute('maxlength', tamanhoMax);
        campo.onkeydown = function(event) {
            if (!/\d/.test(event.key) && !event.ctrlKey && !event.metaKey && !isTeclaPadrao(event)) {
                event.preventDefault();
            }
        };
        campo.onkeyup = function() {
            mascara(this, funcaoMascara);
        };
        campo.onblur = function() {
            // Remove a máscara e deixa apenas valores numéricos
            const rawValue = removerMascara(this.value);
            this.setAttribute('data-raw-value', rawValue); // Salva o valor puro no atributo "data-raw-value"
        };
    });
}

function isTeclaPadrao(event) {
    const teclasPadraoPermitidas = [
        "Backspace", "Tab", "Enter", "Escape", 
        "ArrowLeft", "ArrowRight", "Delete", 
        "Home", "End"
    ];
    return teclasPadraoPermitidas.includes(event.key);
}

window.addEventListener('elementor/popup/show', (event) => {
    configurarMascara('cpf', '.elementor-form input[name="form_fields[cpf]"]', mascaraCpf, 14);
    configurarMascara('cnpj', '.elementor-form input[name="form_fields[cnpj]"]', mascaraCnpj, 18);
    configurarMascara('telefone', '.elementor-form input[name="form_fields[telefone]"]', mascaraTelefone, 15);
    configurarMascara('moeda', '.elementor-form input[name="form_fields[moeda]"]', mascaraMoeda, 20);
    configurarMascara('cep', '.elementor-form input[name="form_fields[cep]"]', mascaraCep, 9);
    configurarMascara('data', '.elementor-form input[name="form_fields[data]"]', mascaraData, 10);
    configurarMascara('hora', '.elementor-form input[name="form_fields[hora]"]', mascaraHora, 8);
});
