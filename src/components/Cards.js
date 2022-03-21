import {useState} from "react"
import AbrirCard from "./AbrirCard"

export default function Cards () {
    const cards = [
        {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]
    cards.sort(embaralhar)

    function embaralhar() {
        return Math.random() - 0.5;
    }
    function entitular () {
        for(let i = 0; i < cards.length; i++) {
            cards[i].questao = `pergunta ${i+1}`
        }
    } entitular()

    return (
        <div className="cards">
            {cards.map(card => <Card pergunta={card.pergunta} resposta={card.resposta} questao={card.questao}/>)}
        </div>
    )
}

function Card (props) {
    const {pergunta, resposta, questao} = props
    const [selecionado, setSelecionado] = useState(false)
    const css = `card ${selecionado ? "selecionado" : ""}`
    
    return (
        <div className={css} onClick={() => setSelecionado(true)}>
            {selecionado ? <AbrirCard pergunta = {pergunta} resposta = {resposta} /> : <CardFechado questao = {questao} />}
        </div>
    )
}

function CardFechado ({questao}) {
    return (
        <>
            {questao}
            <ion-icon name="play-outline"></ion-icon>
        </>
    )
}