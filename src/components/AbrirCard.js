import {useState} from "react"
import CardResposta from "./CardResposta"
import setinha from "../assets/setinha.png"

export default function AbrirCard (props) {
    let {pergunta, resposta, setSelecionado} = props
    let [virar, setVirar] = useState(true)
    return (
        <div onClick={() => setVirar(false)}>
            {virar ? <CardPergunta pergunta = {pergunta} /> : <CardResposta resposta = {resposta} setSelecionado={setSelecionado}/>}
        </div>
    )
}

function CardPergunta (props) {
    let {pergunta} = props
    return (
        <>
            {pergunta}
            <img src = {setinha} alt="Logo" />
        </>
    )
}

