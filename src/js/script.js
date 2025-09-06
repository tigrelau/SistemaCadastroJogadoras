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

//#region Initialization and Event Listeners
const playersGrid = document.getElementById("playersGrid");
const newPlayerForm = document.querySelector("#newPlayerForm");

window.onload = function () {
  loadPlayers();
  displayPlayers();

  document
    .querySelector("#openFormBtn")
    .addEventListener("click", handleAddNewPlayerClick);

  document
    .querySelector("#closeFormBtn")
    .addEventListener("click", toggleNewPlayerForm);

  newPlayerForm.addEventListener("submit", SavePlayer);
  playersGrid.addEventListener("click", handlePlayerGridClick);
};

function handleAddNewPlayerClick() {
  document.getElementById("formTitle").innerText = "Cadastrar Nova Jogadora";
  document.getElementById("savePlayerBtn").innerText = "Cadastrar Jogadora";
  document.getElementById("savePlayerBtn").dataset.index = "";

  toggleNewPlayerForm();
}

function handlePlayerGridClick(event) {
  const clickedElement = event.target.closest("button");
  if (!clickedElement) return;

  const action = clickedElement.dataset.action;
  const index = clickedElement.dataset.index;

  if (action === "delete") {
    deletePlayer(index);
  } else if (action === "edit") {
    handleEditPlayerClick(index);
  } else if (action === "favorite") {
    toggleFavorite(index);
  }
}
//#endregion

//#region Data Management and Display
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
    playerCard.innerHTML = createPlayerCard(player, index);
    playersGrid.appendChild(playerCard);
  });
}

function createPlayerCard(player, index) {
  return `<div class="card-header">
            <button class="favorite-btn ${
              player.favorita ? "active" : ""
            }" data-action="favorite" data-index="${index}">
              <i class="fas fa-heart"></i>
            </button>
            <div class="card-actions">
              <button class="action-btn edit-btn" data-action="edit" data-index="${index}">
                <i class="fas fa-edit"></i>
              </button>
              <button class="action-btn delete-btn" data-action="delete" data-index="${index}">
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

function handleEditPlayerClick(index) {
  let player = players[index];

  document.getElementById("nameInput").value = player.nome;
  document.getElementById("positionInput").value = player.posicao;
  document.getElementById("teamInput").value = player.clube;
  document.getElementById("photoInput").value = player.foto;
  document.getElementById("goalsInput").value = player.gols;
  document.getElementById("assistsInput").value = player.assistencias;
  document.getElementById("matchesInput").value = player.jogos;

  document.getElementById("formTitle").innerText = "Editar Jogadora";
  document.getElementById("savePlayerBtn").innerText = "Salvar Alterações";
  document.getElementById("savePlayerBtn").dataset.index = index;

  toggleNewPlayerForm();
}
//#endregion

//#region CRUD Operations
function SavePlayer(event) {
  event.preventDefault();

  const index = document.getElementById("savePlayerBtn").dataset.index;

  let name = document.getElementById("nameInput").value;
  let position = document.getElementById("positionInput").value;
  let team = document.getElementById("teamInput").value;
  let photo = document.getElementById("photoInput").value;
  let goals = document.getElementById("goalsInput").value;
  let assists = document.getElementById("assistsInput").value;
  let matches = document.getElementById("matchesInput").value;

  let player = {
    nome: name,
    posicao: position,
    clube: team,
    foto: photo,
    gols: goals,
    assistencias: assists,
    jogos: matches,
    favorita: false,
  };

  if (index !== "") {
    players[index] = player;
  } else {
    players.push(player);
  }

  savePlayers();
  displayPlayers();

  newPlayerForm.reset();
  toggleNewPlayerForm();

  index !== ""
    ? window.alert("Jogadora editada com sucesso!")
    : window.alert("Jogadora adicionada com sucesso!");
}

function deletePlayer(index) {
  players.splice(index, 1);
  savePlayers();
  displayPlayers();
  window.alert("Jogadora removida com sucesso!");
}

function toggleFavorite(index) {
  players[index].favorita = !players[index].favorita;
  savePlayers();
  displayPlayers();
}
