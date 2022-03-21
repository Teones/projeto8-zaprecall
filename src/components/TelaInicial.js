import logo from "../assets/logo.png"

export default function TelaInicial ({setPagina}) {
    return (
        <div className="tela-inicial">
            <Logo />
            <Botao setPagina={setPagina}/>
        </div>
    )
}

function Logo () {
    return (
        <div className="logo-inicial">
            <img src = {logo} alt="logo" />
            ZapRecall
        </div>
    )
}
function Botao ({setPagina}) {
    return (
            <button onClick={() => setPagina("TelaPrincipal")}>Iniciar Recall!</button>
    )
}