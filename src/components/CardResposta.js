export default function CardResposta (props) {
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