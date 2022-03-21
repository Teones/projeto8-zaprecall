import {useState} from "react"
import AbrirCard from "./AbrirCard"
import FecharCard from "./FecharCard"

export default function Card (props) {
    let {pergunta, resposta, questao, status} = props
    let [selecionado, setSelecionado] = useState(0)
    let css
    if (selecionado === 0) {
        css = "card"
    } else if (selecionado > 0) {
        css = "card selecionado"
    } else {
        css = `card respondido ${selecionado}`
    }
    
    return (
        <div className={css}>
            {selecionado > 0 && <AbrirCard pergunta = {pergunta} resposta = {resposta} questao = {questao} setSelecionado={setSelecionado} />}
            {selecionado === 0 && <CardFechado questao = {questao} setSelecionado = {setSelecionado} selecionado={selecionado} />}
            {typeof(selecionado) === "string" && <FecharCard questao={questao} selecionado={selecionado} status={status}/>}
        </div>
    )
}

function CardFechado (props) {
    let {questao, setSelecionado, selecionado} = props
    return (
        <>
            {questao}
            <ion-icon name="play-outline" onClick={() => setSelecionado((parseInt(selecionado) + 1))}></ion-icon>
        </>
    )
}