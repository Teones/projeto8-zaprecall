import {useState} from "react"
import CardResposta from "./CardResposta"
import setinha from "../assets/setinha.png"

export default function AbrirCard (props) {
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