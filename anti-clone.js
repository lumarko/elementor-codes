// Bloquear teclado e ações indesejadas
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    e.preventDefault();
  }
});
document.addEventListener('selectstart', (e) => e.preventDefault());

// Anti-clone Código
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href.startsWith(urlDomain)) {
    document.querySelectorAll(aviso).forEach((element) => {
      element.style.display = 'none';
    });
  } else {
    // Adiciona o aviso ao HTML
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="fixed">
        <div class="aviso">
          <p><span class="bold-aviso">PARA NÃO CAIR EM GOLPES:</span> Certifique-se de que esse é o site oficial com o endereço <span id="domain-URL"></span></p>
        </div>
      </div>
      <style>
        .fixed {
          z-index: 999 !important;
          position: sticky;
          width: 100%;
          top: 0;
        }
        .aviso {
          text-align: center;
          background-color: #f44336;
          color: white;
          padding: 1vw;
          font-family: 'Inter', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .aviso p {
          font-size: 0.75vw;
          font-weight: 600;
          margin: 0;
        }
        .bold-aviso {
          font-weight: 800;
          color: black;
        }
        #domain-URL {
          padding: 0.5vw 1vw;
          border-radius: 999px;
          border: 0.2vw solid white;
          font-weight: 700;
        }
        @media(max-width: 767px) {
          .aviso {
            padding: 5vw;
          }
          .aviso p {
            font-size: 3vw;
          }
          .bold-aviso {
            font-size: 4vw;
          }
          #domain-URL {
            padding: 1.5vw 3vw;
            border: 0.5vw solid white;
          }
        }
      </style>
    `);

    // Insere o valor da variável urlDomain no span
    document.getElementById("domain-URL").textContent = mainDomain;

    // Garante que o aviso seja exibido
    const style = document.createElement('style');
    style.textContent = ".aviso { display: block !important; }";
    document.head.appendChild(style);

    // Redirecionamento após 3 segundos
    setTimeout(() => {
      alert('Acesso não autorizado, pois essa página foi clonada indevidamente. Clique em "OK" para ser redirecionado ao site oficial.');

      document.body.innerHTML = `
        <h2 style="color: black; padding: 0 10vw; text-align: center; display: flex; justify-content: center; align-items: center; height: 100vh;">
          Aguarde enquanto estamos te redirecionando...
        </h2>
        <style>
          html, body { overflow: hidden !important; }
          @media(max-width: 767px) {
            h2 { font-size: 6vw; font-weight: 700; margin-top: -5vw; }
          }
        </style>
      `;

      const redirectUrl = new URL(window.location.origin);
      redirectUrl.searchParams.set('src', `clonado+${window.location.hostname}+${domain}+${pathSlug}`);
      window.location.href = redirectUrl.toString();
    }, 3000);
  }
});
