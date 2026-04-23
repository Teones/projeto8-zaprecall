export default function CardResposta (props) {
    let {resposta, responder} = props
    return (
        <>
            {resposta}
            <div className="opcoes">
                <div className="nao-lembrei" onClick={() => responder("incorreto")}>Não lembrei</div>
                <div className="quase" onClick={() => responder("demorou")}>Quase não lembrei</div>
                <div className="zap" onClick={() => responder("correto")}>Zap!</div>
            </div>
        </>
    )
}


