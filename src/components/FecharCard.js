import incorreto from "../assets/incorreto.png"
import quase from "../assets/quase.png"
import zap from "../assets/zap.png"

export default function FecharCard (props) {
    let {selecionado, questao, status} = props
    return (
        <>
            {selecionado === "incorreto" ? <Incorreto selecionado= {selecionado} questao={questao} status={status}/> : <></>}
            {selecionado === "demorou" ? <Quase selecionado= {selecionado} questao={questao} status={status}/> : <></>}
            {selecionado === "correto" ? <Zap selecionado= {selecionado} questao={questao} status={status}/> : <></>}
        </>
    )
}

function Incorreto ({selecionado, questao, status}) {
    status = `incorreto`
    return (
        <div className={`${selecionado}`} >
            {questao}
            <img src={incorreto}/>
        </div>
    )
}
function Quase ({selecionado, questao, status}) {
    status = `quase`
    return (
        <div className={`${selecionado}`} >
            {questao}
            <img src={quase}/>
        </div>
    )
}
function Zap ({selecionado, questao, status}) {
    status = `zap`
    return (
        <div className={`${selecionado}`} >
            {questao}
            <img src={zap}/>
        </div>
    )
}