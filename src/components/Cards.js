import Card from "./Card";
import incorreto from "../assets/incorreto.png"
import quase from "../assets/quase.png"
import zap from "../assets/zap.png"

export default function Cards () {
    let cards = [
        {status: "sem-responder", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {status: "sem-responder", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para letrução de interfaces"},
        {status: "sem-responder", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {status: "sem-responder", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {status: "sem-responder", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {status: "sem-responder", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {status: "sem-responder", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {status: "sem-responder", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
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
        <>
            <div className="cards">
                {cards.map(card => <Card pergunta={card.pergunta} resposta={card.resposta} questao={card.questao} status={card.status}/>)}
            </div>

            <footer>
                <div className="total">
                    {0}/8 CONCLUIDLOS
                </div>
                <div className="icones">
                    {cards.map(icon => <Icon status={icon.status} /> )}
                </div>
            </footer>
        </>
    )
}

function Icon ({status}) {
    return(
        <>
            {status === "incorreto" && <img src={incorreto} />}
            {status === "quase" && <img src={quase} />}
            {status === "correto" && <img src={zap} />}
        </>

    )
}