document.addEventListener("DOMContentLoaded", () => {
  const btnIncreaseFont = document.getElementById("btn-increase-font");
  const btnDecreaseFont = document.getElementById("btn-decrease-font");
  const btnToggleContrast = document.getElementById("btn-toggle-contrast");

  function changeFontSize(delta) {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    const newSize = currentSize + delta;

    if (newSize >= 16 && newSize <= 36) {
      body.style.fontSize = `${newSize}px`;
    }
  }

  function toggleContrast() {
    document.body.classList.toggle("light-theme");
  }

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