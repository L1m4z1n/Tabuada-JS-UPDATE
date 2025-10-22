//Mapa de cores por tipo de toast, facilita manter um padrão visual nos avisos
const TOAST_COLORS = {
  info: "linear-gradient(90deg, #7c3aed, #06b6d4)",
  success: "linear-gradient(90deg, #22c55e, #16a34a)",
  error: "linear-gradient(90deg, #ef4444, #b91c1c)",
};
function showToast(msg, type = "info") {
  Toastify({
    text: msg, //Conteúdo Textual do toast
    duration: 3000, // Tempo na tela em ms (3s)
    close: true, // Mostra "X" para fechar
    gravity: "top", // "top" ou "bottom"
    position: "right", // "left","center" ou "right"
    stopOnFocus: true, // ao passar o mouse, não some
    style: {
      background: TOAST_COLORS[type],
      color: "#fff", //cor do texto
      borderRadius: "8px", // cantos arredondados
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)", //sombra
    },
  }).showToast(); // exibe o toast
}

// Handler da tabuada (compatível com submit do form)
function tabuada(evt) {
  // o preventDefault impede o recarregamento da página
  if (evt && typeof evt.preventDefault === "function") evt.preventDefault();

  const num = document.getElementById("txtn");
  const tab = document.getElementById("seltab");

  if (!num.value || num.value.trim().length === 0) {
    // verifica se o usuário deixou o campo vazio
    showToast(
      "Por favor, digite um número (todo número multiplicado por 0 é igual a 0)",
      "error"
    );
    return; // sai da função
  }
  // converte o valor em número
  const n = Number(num.value);
  // verifica se não for um número válido
  if (!Number.isFinite(n)) {
    showToast("Valor inválido. Digite um número válido.", "error");
    return;
  }

  // limpa o select antes de preencher
  tab.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("option"); // cria uma <option>
    item.text = `${n} x ${i} = ${n * i}`;
    item.value = `tab${i}`;
    tab.appendChild(item); //adiciona no <select>
  }

  showToast("Tabuada gerada com sucesso!", "success");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-tabuada");
  if (form) form.addEventListener("submit", tabuada);
});
