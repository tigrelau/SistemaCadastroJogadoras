# ⚽ Checkpoint 4: Gerenciamento de Jogadoras do Futebol Feminino

Este projeto é uma aplicação web desenvolvida para a disciplina de WebDev, com o objetivo de gerenciar informações de jogadoras de futebol feminino. A aplicação permite realizar operações de **CRUD** (Create, Read, Update, Delete) de forma interativa, além de oferecer funcionalidades de busca, filtro e ordenação.

## Funcionalidades Principais

- **Listagem (Read):** Exibe todas as jogadoras em formato de cards, mostrando foto, nome, posição, clube e estatísticas.
- **Favoritar Jogadoras:** Um ícone de estrela ou coração nos cards permite marcar jogadoras como favoritas, salvando essa preferência no **LocalStorage**.
- **Cadastro (Create):** Um formulário permite adicionar novas jogadoras à base de dados. Um alerta de feedback é exibido após o sucesso da operação.
- **Edição (Update):** É possível modificar os dados de uma jogadora existente, incluindo a foto. Um alerta de feedback é exibido após a edição.
- **Remoção (Delete):** Permite excluir uma jogadora da lista. Um alerta de feedback confirma a remoção.
- **Busca:** Campo de busca dinâmico para encontrar jogadoras por nome ou posição.
- **Filtro:** Permite filtrar a lista de jogadoras por time.
- **Ordenação:** Botões para ordenar a lista de jogadoras por nome ou posição.

## Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

- **HTML:** Para a estrutura da página.
- **CSS:** Para a estilização e o design responsivo da interface.
- **JavaScript:** Para a lógica de programação, manipulação do DOM e gerenciamento dos dados no **LocalStorage**.

## Estrutura de Dados

A base de dados inicial das jogadoras é armazenada em um arquivo **JSON**. Na primeira execução da aplicação, esses dados são salvos no **LocalStorage** do navegador, garantindo que as alterações feitas pelo usuário sejam persistidas.

## Estrutura do Projeto

A seguir, a estrutura de pastas e arquivos do projeto para fácil navegação.

.
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.html
├── license.md
└── README.md

## Acesso ao Projeto

Você pode acessar a versão hospedada do projeto no GitHub Pages através do link abaixo:

**Link do GitHub Pages:** `[INSIRA O LINK AQUI]`

## Participantes

Este projeto foi desenvolvido por:

- **Nome:** `Áurea Sardinha Carminato` | **RM:** `563837`
- **Nome:** `Henrique Castro de Matos` | **RM:** `564560`
- **Nome:** `Laura Tigre Amaral` | **RM:** `565281`
