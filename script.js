document.addEventListener("DOMContentLoaded", () => {
  // Seleção dos elementos do DOM
  const btnIncreaseFont = document.getElementById("btn-increase-font");
  const btnDecreaseFont = document.getElementById("btn-decrease-font");
  const btnToggleContrast = document.getElementById("btn-toggle-contrast");

  // Função para alterar o tamanho da fonte
  function changeFontSize(delta) {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    const newSize = currentSize + delta;

    // Define limites de tamanho para a fonte (entre 18px e 40px)
    if (newSize >= 18 && newSize <= 40) {
      body.style.fontSize = `${newSize}px`;
    }
  }

  // Função para alternar o tema de alto contraste (Escuro / Claro)
  function toggleContrast() {
    document.body.classList.toggle("light-theme");
  }

  // Atribuição dos eventos de clique
  if (btnIncreaseFont) {
    btnIncreaseFont.addEventListener("click", () => changeFontSize(2));
  }

  if (btnDecreaseFont) {
    btnDecreaseFont.addEventListener("click", () => changeFontSize(-2));
  }

  if (btnToggleContrast) {
    btnToggleContrast.addEventListener("click", toggleContrast);
  }
});