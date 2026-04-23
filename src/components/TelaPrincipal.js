import { useState } from "react"
import logo from "../assets/logo.png"
import Cards from "./Cards"
import Footer from "./Footer";

export default function TelaPrincipal () {
    const [resultados, setResultados] = useState([]);
    let [gameId, setGameId] = useState(0)
    const totalCards = 8;

    function adicionarResultado(novoStatus, index) {
        setResultados([...resultados, { status: novoStatus, index: index }])
    }

    function reiniciarRecall() {
        setResultados([]) 
        setGameId(gameId + 1)
    }

    return (
        <div className="tela-principal">
            <Logo />
            <Cards key={gameId} adicionarResultado={adicionarResultado} />
            <Footer resultados={resultados} totalCards={totalCards} reiniciarRecall={reiniciarRecall} />
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