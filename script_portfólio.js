document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").textContent =
    "Mensagem enviada com sucesso! Entrarei em contacto em breve.";
  this.reset();
});