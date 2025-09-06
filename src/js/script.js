let players = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

const playersGrid = document.getElementById("playersGrid");
const newPlayerForm = document.querySelector("#newPlayerForm");

window.onload = function () {
  loadPlayers();
  displayPlayers();

  document
    .querySelector("#openFormBtn")
    .addEventListener("click", toggleNewPlayerForm);

  document
    .querySelector("#closeFormBtn")
    .addEventListener("click", toggleNewPlayerForm);
};

function loadPlayers() {
  const storedPlayers = localStorage.getItem("players");
  if (storedPlayers) {
    players = JSON.parse(storedPlayers);
  } else {
    savePlayers();
  }
}

function savePlayers() {
  localStorage.setItem("players", JSON.stringify(players));
}

function displayPlayers() {
  playersGrid.innerHTML = "";

  players.forEach((player, index) => {
    const playerCard = document.createElement("div");
    playerCard.className = "player-card";
    playerCard.innerHTML = createPlayerCard(player);
    playersGrid.appendChild(playerCard);
  });
}

function createPlayerCard(player) {
  return `<div class="card-header">
            <button class="favorite-btn ${player.favorita ? "active" : ""}">
              <i class="fas fa-heart"></i>
            </button>
            <div class="card-actions">
              <button class="action-btn edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="action-btn delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>

          <img
            src="${player.foto}"
            alt="${player.nome}"
            class="player-photo"
          />

          <div class="player-info">
            <div class="player-name">${player.nome}</div>
            <div class="player-position">${player.posicao}</div>
            <div class="player-team">${player.clube}</div>
          </div>

          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-value">${player.gols}</div>
              <div class="stat-label">Gols</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${player.assistencias}</div>
              <div class="stat-label">Assistências</div>
            </div>
            <div class="stat-box">
              <div class="stat-value">${player.jogos}</div>
              <div class="stat-label">Jogos</div>
            </div>
          </div>`;
}

function toggleNewPlayerForm() {
  newPlayerForm.style.display == "none"
    ? (newPlayerForm.style.display = "flex")
    : (newPlayerForm.style.display = "none");
}
