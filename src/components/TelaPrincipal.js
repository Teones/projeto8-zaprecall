import { useState } from "react"
import logo from "../assets/logo.png"
import Cards from "./Cards"

export default function TelaPrincipal () {
    let [cardsRespondidos, setCardsRespondidos] = useState(0);

    return (
        <div className="tela-principal">
            <Logo />
            <Cards cardsRespondidos={cardsRespondidos} 
                setCardsRespondidos={setCardsRespondidos} />
            <footer cardsRespondidos={cardsRespondidos}  />
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