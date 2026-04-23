<img src="src/assets/logo.png" alt="logo" style="width: 150px;"/>

<h1>ZapRecall</h1>

![Status_do_Projeto](https://img.shields.io/badge/status-concluded-green)
![Data_de_Criação](https://img.shields.io/badge/create-april_/_2026-blue)
![Última_Atualização](https://img.shields.io/badge/version-april_/_2026-red)

ZapRecall é um jogo de flashcards focado na memorização de conceitos, desenvolvido para consolidar os fundamentos do React. O projeto utiliza estados complexos, componentização e passagem de propriedades (props) para gerenciar o fluxo do jogo, garantindo uma interface interativa e dinâmica para o usuário.

| <div style="text-align: center;"><img src="INSIRA_AQUI_O_CAMINHO_DA_IMAGEM_MOBILE_1" alt="Tela Inicial" width="150" style="border: none;"/></div> | <div style="text-align: center;"><img src="INSIRA_AQUI_O_CAMINHO_DA_IMAGEM_MOBILE_2" alt="Flashcards em Andamento" width="150" style="border: none;"/></div> | <div style="text-align: center;"><img src="INSIRA_AQUI_O_CAMINHO_DA_IMAGEM_MOBILE_3" alt="Tela de Finalização" width="150" style="border: none;"/></div> |
|:-:|:-:|:-:|

## 🔨 Features

- `Feature 1`: **Lógica de Estado Centralizada (Lifting State Up)**: Os resultados de cada flashcard são elevados para o componente principal, permitindo que o rodapé seja atualizado em tempo real e na ordem exata das perguntas, independentemente da ordem em que foram respondidas.

- `Feature 2`: **Embaralhamento Aleatório**: A cada reinício, o baralho de flashcards é reorganizado aleatoriamente, garantindo que o usuário não memorize as respostas apenas pela posição visual na tela.

- `Feature 3`: **Feedback Condicional de Fim de Jogo**: Ao finalizar todos os cards, o sistema analisa os resultados obtidos e exibe uma mensagem de sucesso ("Parabéns!") ou de incentivo ("Putz...") caso o usuário tenha esquecido de algum conceito.

- `Feature 4`: **Reset Inteligente de Instâncias**: Funcionalidade de reiniciar o recall utilizando a recriação de instâncias do React (através da manipulação da propriedade `key`), limpando o histórico de estados e recomeçando o fluxo instantaneamente sem a necessidade de recarregar a página do navegador.

## 🛠️ Open and run the project

- 📁 O projeto ZapRecall é open source e pode ser acessado pelo link: [https://github.com/Teones/projeto8-zaprecall](https://github.com/Teones/projeto8-zaprecall).
- ▶️ Para rodar o projeto diretamente no navegador, o deploy foi realizado no GitHub Pages: [https://teones.github.io/projeto8-zaprecall/](https://teones.github.io/projeto8-zaprecall/).

## ✔️ Techniques and technologies used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)