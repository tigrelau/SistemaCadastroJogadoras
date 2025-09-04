// Funções básicas para demonstração
function toggleModal() {
  const modal = document.getElementById("playerModal");
  modal.classList.toggle("hidden");
}

function editPlayer() {
  const modal = document.getElementById("playerModal");
  const title = modal.querySelector(".modal-title");
  const submitBtn = modal.querySelector(".btn-save");

  title.textContent = "Editar Jogadora";
  submitBtn.textContent = "Salvar Alterações";

  modal.classList.remove("hidden");
}

// Toggle favoritos
document.addEventListener("click", function (e) {
  if (e.target.closest(".favorite-btn")) {
    const btn = e.target.closest(".favorite-btn");
    const icon = btn.querySelector("i");

    btn.classList.toggle("active");

    if (btn.classList.contains("active")) {
      icon.className = "fas fa-heart";
    } else {
      icon.className = "far fa-heart";
    }
  }
});

// Fechar modal clicando fora
document.addEventListener("click", function (e) {
  const modal = document.getElementById("playerModal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Animação de entrada dos cards
const cards = document.querySelectorAll(".player-card");
cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});
