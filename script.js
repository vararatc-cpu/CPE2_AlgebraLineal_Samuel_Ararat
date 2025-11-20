function copyCode(btn) {
  let code = btn.parentElement.nextElementSibling.innerText;

  navigator.clipboard.writeText(code).then(() => {
    btn.innerText = "Copiado!";
    setTimeout(() => (btn.innerText = "Copiar"), 1300);
  });
}

const btn = document.getElementById("verMasBtn");
const codeBlock = document.getElementById("codigo-matlab");

btn.addEventListener("click", () => {
  codeBlock.style.height = "auto"; // SE EXPANDE COMPLETO
  btn.style.display = "none"; // EL BOTÓN DESAPARECE
});
