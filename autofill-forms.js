// Criar os cookies
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
  }

  // Obter valores dos cookies
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }

  // Adicionar os valores do formulário nos cookies dinamicamente
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Captura todos os campos com o atributo `name`
      const inputs = form.querySelectorAll("input[name^='form_fields']");
      inputs.forEach(input => {
        const fieldName = input.name.replace('form_fields[', '').replace(']', ''); // Extrai o nome do campo
        setCookie(`form-field-${fieldName}`, input.value, 365);
      });
    });
  });

  // Carregar os valores dos cookies para o formulário dinamicamente
  document.addEventListener("DOMContentLoaded", function() {
    forms.forEach(form => {
      const inputs = form.querySelectorAll("input[name^='form_fields']");
      inputs.forEach(input => {
        const fieldName = input.name.replace('form_fields[', '').replace(']', ''); // Extrai o nome do campo
        input.value = getCookie(`form-field-${fieldName}`) || "";
      });
    });
  });
