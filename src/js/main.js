const TOAST_COLORS = {
  info: "linear-gradient(90deg, #7c3aed, #06b6d4)",
  success: "linear-gradient(90deg, #22c55e, #16a34a)",
  error: "linear-gradient(90deg, #ef4444, #b91c1c)",
};
function showToast(msg, type = "info") {
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: TOAST_COLORS[type],
      color: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    },
  }).showToast();
}

function tabuada() {
  const num = document.getElementById("txtn");
  const tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    showToast(
      "Por favor, digite um número(Todo número multiplicado por 0 é igual a 0"
    );
    return;
  }
  const n = Number(num.value);
  tab.innerHTML = ""; //Limpa o select antes de preencher

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("option");
    item.text = `${n} X ${i} = ${n * i}`;
    item.value = `tab${i}`;
    tab.appendChild(item);
  }

  showToast("Tabuada gerada com sucesso", "sucess");
}
