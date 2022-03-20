import logo from "../assets/logo.png"

export default function TelaInicial () {
    return (
        <div className="tela-inicial">
            <Logo />
            <Botao />
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
function Botao () {
    return (
            <button>Iniciar Recall!</button>
    )
}