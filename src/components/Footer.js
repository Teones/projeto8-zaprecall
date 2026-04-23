import incorreto from "../assets/incorreto.png"
import quase from "../assets/quase.png"
import zap from "../assets/zap.png"

export default function Footer({ resultados, totalCards, reiniciarRecall}) {
    const finalizou = resultados.length === totalCards;
    
    const teveErro = resultados.some(r => r.status === "incorreto");
    const resultadosOrdenados = [...resultados].sort((a, b) => a.index - b.index);

    return (
        <footer className="footer-concluidos">
            
            {finalizou && (
                <div className="mensagem-final">
                    {teveErro ? (
                        <>
                            <div className="titulo-final">
                                <span>😥 Putz...</span> 
                            </div>
                            <div className="texto-final">
                                Ainda faltam alguns...<br />Mas não desanime!
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="titulo-final">
                                <span>🥳 Parabéns!</span>
                            </div>
                            <div className="texto-final">
                                Você não esqueceu de<br />nenhum flashcard!
                            </div>
                        </>
                    )}
                </div>
            )}

            <div className="total">
                {resultados.length}/{totalCards} CONCLUÍDOS
            </div>
            
            <div className="icones">
                {resultadosOrdenados.map((item, i) => (
                    <IconeResultado key={i} status={item.status} />
                ))}
            </div>

            {finalizou && (
                <button className="botao-reiniciar" onClick={reiniciarRecall}>
                    REINICIAR RECALL
                </button>
            )}
        </footer>
    );
}

function IconeResultado({ status }) {
    // CORREÇÃO 2: Agora os ícones renderizam baseados nas palavras exatas do seu CardResposta
    if (status === "incorreto") return <img src={incorreto} alt="erro" />;
    if (status === "demorou") return <img src={quase} alt="quase" />;
    if (status === "correto") return <img src={zap} alt="zap" />;
    return null;
}