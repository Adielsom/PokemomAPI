PokemomAPI - Projeto de Consumo de API

# Explorar pokemom — Consumo de API com PHP

Este projeto foi desenvolvido como parte da disciplina de **Programação para Internet I** do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (ADS).

## Objetivo
O objetivo da aplicação é demonstrar o consumo de uma API pública utilizando PHP no back-end, integrando-se a uma interface front-end dinâmica e responsiva.

## API Escolhida
Para este projeto, foi utilizada a **PokeAPI** ([https://pokeapi.co/](https://pokeapi.co/)), uma interface completa com dados sobre o universo Pokémon.

## Descrição do Projeto
O **Explorar pokemom** permite que o usuário busque informações sobre qualquer Pokémon pelo nome. A aplicação realiza as seguintes funções:
- **Consumo de Dados:** O PHP (via cURL) busca dados de imagem, ID, tipo, peso e altura diretamente da PokeAPI.
- **Interface Dinâmica:** O JavaScript manipula o DOM para exibir os resultados sem recarregar a página.
- **Design Responsivo:** Layout adaptável para dispositivos móveis e desktop, desenvolvido com CSS puro.
- **Diferenciais:** - Cores de fundo que mudam dinamicamente conforme o tipo do Pokémon (ex: fundo vermelho para tipo Fogo).
  - Animações de entrada (Fade In) ao carregar os dados.
  - Tratamento de erros para buscas não encontradas.

## Tecnologias Utilizadas
- **Back-end:** PHP (cURL)
- **Front-end:** HTML5, CSS3 (Variáveis e Grid)
- **Scripting:** JavaScript
- **Servidor Local:** Wampserver

## Estrutura de Arquivos
- `index.html`: Estrutura principal da página.
- `style.css`: Estilização e responsividade.
- `script.js`: Lógica de requisição ao PHP e animações.
- `api.php`: Script responsável pela comunicação com a PokeAPI.
