export default function CardResposta (props) {
    let {resposta, setSelecionado} = props
    return (
        <>
            {resposta}
            <div className="opcoes">
                <div className="nao-lembrei" onClick={() => setSelecionado("incorreto")}>Não lembrei</div>
                <div className="quase" onClick={() => setSelecionado("demorou")}>Quase não lembrei</div>
                <div className="zap" onClick={() => setSelecionado("correto")}>Zap!</div>
            </div>
        </>
    )
}


