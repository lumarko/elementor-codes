function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("execmascara()", 1);
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}

function mascaraCpf(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

function mascaraCnpj(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    return valor;
}

function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

function mascaraMoeda(valor) {
    valor = valor.replace(/\D/g, "");
    if (valor === "") {
        return "";
    }
    valor = parseInt(valor).toString();
    valor = (parseInt(valor) / 100).toFixed(2);
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    return "R$ " + valor;
}

function mascaraCep(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    return valor;
}

function mascaraData(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    return valor;
}

function mascaraHora(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/(\d{2})(\d)/, "$1:$2");
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
            // Verifica se a tecla pressionada não é numérica e não é uma tecla de controle padrão
            if (!/\d/.test(event.key) && !event.ctrlKey && !event.metaKey && !isTeclaPadrao(event)) {
                event.preventDefault(); // Impede a ação padrão
            }
        };
        campo.onkeyup = function() {
            mascara(this, funcaoMascara);
        };
    });
}

function isTeclaPadrao(event) {
    // Array de códigos de teclas padrão permitidas
    const teclasPadraoPermitidas = [
        "Backspace",
        "Tab",
        "Enter",
        "Escape",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Home",
        "End"
    ];

    return teclasPadraoPermitidas.includes(event.key);
}

window.addEventListener( 'elementor/popup/show', ( event )=>{
    configurarMascara('cpf', '.elementor-form input[name="form_fields[cpf]"]', mascaraCpf, 14);
    configurarMascara('cnpj', '.elementor-form input[name="form_fields[cnpj]"]', mascaraCnpj, 18);
    configurarMascara('telefone', '.elementor-form input[name="form_fields[telefone]"]', mascaraTelefone, 15);
    configurarMascara('moeda', '.elementor-form input[name="form_fields[moeda]"]', mascaraMoeda, 20);
    configurarMascara('cep', '.elementor-form input[name="form_fields[cep]"]', mascaraCep, 9);
    configurarMascara('data', '.elementor-form input[name="form_fields[data]"]', mascaraData, 10);
    configurarMascara('hora', '.elementor-form input[name="form_fields[hora]"]', mascaraHora, 8);
});
