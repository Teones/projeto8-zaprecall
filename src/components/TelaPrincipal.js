import {useState} from "react"
import logo from "../assets/logo.png"
import setinha from "../assets/setinha.png"

export default function TelaPrincipal () {
    return (
        <div className="tela-principal">
            <Logo />
            <Cards />
            <Footer />
        </div>
    )
}

function Logo () {
    return (
        <div className="logo-principal">
            <img src = {logo} alt="Logo" />
            ZapRecall
        </div>
    )
}

function Cards () {
    const cards = [
        {questao: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {questao: "Pergunta 2", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {questao: "Pergunta 3", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {questao: "Pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {questao: "Pergunta 5", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {questao: "Pergunta 6", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {questao: "Pergunta 7", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {questao: "Pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ]
    return (
        <div className="cards">
            {cards.map(card => <Card questao={card.questao} pergunta={card.pergunta} resposta={card.resposta}/>)}
        </div>
    )
}

function Card (props) {
    const {questao, pergunta, resposta} = props
    const [selecionado, setSelecionado] = useState(false)
    const css = `card ${selecionado ? "selecionado" : ""}`
    
    return (
        <div className={css} onClick={() => setSelecionado(true)}>
            {selecionado ? <AbrirCard pergunta = {pergunta} resposta = {resposta} /> : <CardFechado questao = {questao}/>}
        </div>
    )
}

function CardFechado (props) {
    const {questao} = props
    return (
        <>
            {questao}
            <ion-icon name="play-outline"></ion-icon>
        </>
    )
}
function AbrirCard (props) {
    const {pergunta, resposta} = props
    const [virar, setVirar] = useState(true)
    return (
        <div onClick={() => setVirar(false)}>
            {virar ? <CardPergunta pergunta = {pergunta} /> : <CardResposta resposta = {resposta} />}
        </div>
    )
}

function CardPergunta (props) {
    const {pergunta} = props
    return (
        <>
            {pergunta}
            <img src = {setinha} alt="Logo" />
        </>
    )
}
function CardResposta (props) {
    const {resposta} = props
    return (
        <>
            {resposta}
            <div className="opcoes">
                <div className="nao-lembrei">Não lembrei</div>
                <div className="quase">Quase não lembrei</div>
                <div className="zap">Zap!</div>
            </div>
        </>
    )
}

function Footer () {
    return (
        <footer>
            0/8 CONCLUIDOS
        </footer>
    )
}