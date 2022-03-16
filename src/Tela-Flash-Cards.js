export default function TelaFlashCards () {
    return (
        <div className="tela-flash-cards" >
            <Logo />
            <Perguntas />
        </div>
    )
}

function Logo () {
    return (
        <div className = "logo-pequeno">
            <img src = "assets/logo.png" />
            ZapRecall
        </div>
    )
}

function Perguntas () {
    const perguntas = [
        {capa: "pergunta 1", questao: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {capa: "pergunta 2", questao: "O React é __ ", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {capa: "pergunta 3", questao: "Componentes devem iniciar com __", resposta: "luetra maiúscula"},
        {capa: "pergunta 4", questao: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {capa: "pergunta 5", questao: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {capa: "pergunta 6", questao: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {capa: "pergunta 7", questao: "Usamos props para __ ", resposta: "passar diferentes informações para componentes "},
        {capa: "pergunta 8", questao: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]
    return (
        <div className = "perguntas">
        </div>
    )
}
