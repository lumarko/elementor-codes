//Bloquear teclado
try {document.addEventListener('contextmenu', function (e) {e.preventDefault();});document.addEventListener('keydown', function (e) {if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {e.preventDefault();}});document.addEventListener('selectstart', function (e) {e.preventDefault();});} catch (e) {console.warn(e); }

//Anti-clone Código
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.href.indexOf(urlDomain) === 0) {
        aviso.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        // Adiciona o aviso ao HTML
        document.body.insertAdjacentHTML('afterbegin', `
         <div class="fixed">    
            <div class="aviso">
                <p><span class="bold-aviso">PARA NÃO CAIR EM GOLPES:</span> Certifique-se de que esse é o site oficial com o endereço <span id="domain-URL"></span></p>
            </div></div>
            <style>
            
                .fixed {z-index: 999 !important;
    position: sticky;
    width: 100%;
    height: fit-content;
    top: 0;
                }
                
                .aviso {
                    text-align: center;
                    background-color: #f44336;
                    color: white;
                    padding: 1vw;
                    z-index: 999 !important;
                    position: relative !important;
                    pointer-events: none !important;
                    font-family: 'Inter', sans-serif;
                    height: fit-content;
                    display: flex !important;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
            
                .aviso p {
                    pointer-events: none !important;
                    user-select: none !important;
                    -webkit-user-select: none !important;
                    font-size: 0.75vw;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    gap: 0.25vw;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                    overflow: visible !important;
                    font-weight: 600;
                    font-family: "Inter", sans-serif;
                    margin: 0;
                }
            
                .bold-aviso {
                    font-weight: 800;
                    color: black;
                }
            
                #domain-URL {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    padding: 0.5vw 1vw;
                    border-radius: 999px;
                    border: 0.2vw solid white;
                    font-weight: 700;
                    margin-left: 0.5vw;
                }
            
                
                @media(max-width:767px){

    .aviso {
    padding: 5vw;
}
                
    .aviso p {
    pointer-events: none !important;
    font-size: 3vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2vw !important;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.bold-aviso {
font-size: 4vw;
}

#domain-URL {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5vw 3vw;
    border-radius: 999px;
    border: 0.5vw solid white;
    font-weight: 700;
}

                }                
                
            </style>
        `);

        // Insere o valor da variável urlDomain no span
        document.getElementById("domain-URL").textContent = mainDomain;

        // Adiciona o estilo ao documento para garantir que o aviso seja exibido
        var style = document.createElement('style');
        style.innerHTML = ".aviso{display:block!important}";
        document.head.appendChild(style);

        setTimeout(function() {
            alert('Acesso não autorizado pois essa página foi clonada indevidamente. Aperte em "OK" para ser redirecionado para o site oficial.');

            document.body.innerHTML = `
                <h2 style="color:black; padding: 0 10vw; text-align: center; width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center;">
                    Aguarde enquanto estamos te redirecionando...
                </h2>
                <style>
                    html, body {
                        overflow: hidden !important;
                    }
                    @media(max-width: 767px) {
                        h2 {
                            font-size: 6vw;
                            font-weight: 700;
                            margin-top: -5vw;
                        }
                    }
                </style>`;

            var redirectUrl = new URL(originalUrl);
            const pathnameWithoutSlash = window.location.pathname.endsWith('/')
                ? window.location.pathname.slice(0, -1)  // Remove a barra se presente
                : window.location.pathname; // Caso contrário, mantém como está
            
            // Ajuste para pegar o domínio completo (incluindo .com.br, .co.uk, etc)
            const hostnameParts = window.location.hostname.split('.');
            const domain = hostnameParts.slice(0, -2).join('.'); // Pega a parte do domínio
            const extension = hostnameParts.slice(-2).join('.'); // Pega a extensão completa como .com.br

            const srcValue = `clonado_${domain}.${extension}-${pathnameWithoutSlash.replace('/', '')}`;
            redirectUrl.searchParams.set('src', srcValue);
            window.location.href = redirectUrl.toString();
    }, 3000);
  }
});
