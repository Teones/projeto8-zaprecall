import Card from "./Card";

const DECK = [
    {id: 1, status: "sem-responder", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
    {id: 2, status: "sem-responder", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para letrução de interfaces"},
    {id: 3, status: "sem-responder", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
    {id: 4, status: "sem-responder", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
    {id: 5, status: "sem-responder", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
    {id: 6, status: "sem-responder", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
    {id: 7, status: "sem-responder", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
    {id: 8, status: "sem-responder", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]

DECK.sort(() => Math.random() - 0.5);

export default function Cards (props) {
    let { adicionarResultado } = props;
    
    return (
        <>
            <div className="cards">
                {DECK.map((card, index) => (
                <Card 
                    key={card.id} 
                    pergunta={card.pergunta} 
                    resposta={card.resposta} 
                    questao={`Pergunta ${index + 1}`} 
                    adicionarResultado={adicionarResultado}
                />
            ))}
            </div>
        </>
    )
}