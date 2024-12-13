// Criar os cookies
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Adicionar os valores do formulário nos cookies
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      setCookie("form-field-name", form.querySelector("input[name='form_fields[name]']").value, 365);
      setCookie("form-field-email", form.querySelector("input[name='form_fields[email]']").value, 365);
      setCookie("form-field-confirm", form.querySelector("input[name='form_fields[confirm]']").value, 365);
      setCookie("form-field-telefone", form.querySelector("input[name='form_fields[telefone]']").value, 365);
    });
  });

  // Obter valores dos cookies
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Carregar os valores dos cookies para o formulário
  document.addEventListener("DOMContentLoaded", function() {
    forms.forEach(form => {
      const nameInputs = form.querySelectorAll("input[name='form_fields[name]']");
      const emailInputs = form.querySelectorAll("input[name='form_fields[email]']");
      const confirmInputs = form.querySelectorAll("input[name='form_fields[confirm]']");
      const telefoneInputs = form.querySelectorAll("input[name='form_fields[telefone]']");

      nameInputs.forEach(input => {
        input.value = getCookie("form-field-name") || "";
      });

      emailInputs.forEach(input => {
        input.value = getCookie("form-field-email") || "";
      });

      confirmInputs.forEach(input => {
        input.value = getCookie("form-field-confirm") || "";
      });

      telefoneInputs.forEach(input => {
        input.value = getCookie("form-field-telefone") || "";
      });
    });
  });
