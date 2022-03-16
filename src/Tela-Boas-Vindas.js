export default function TelaBoasVindas () {
    return (
        <div className = "tela-boas-vindas">
            <Logo />
            <Botao />
        </div>
    )
}

function Logo () {
    return (
        <div className = "logo-grande">
            <img src = "assets/logo.png" />
            ZapRecall
        </div>
    )
}

function Botao () {
    function iniciarRecall () {
        alert("Mudar para Tela 2 ==> Tela de Flash Cards")
        // let tela1 = document.querySelector(".tela-boas-vindas")
        // tela1.classList.add("esconder-tela")
        // let tela2 = document.querySelector(".tela-flash-cards")
        // tela2.classList.remove("esconder.tela")
    }
    return (
        <>
            <button className = "iniciar-recall" onClick = {() => iniciarRecall() }>iniciar Recall!</button>    
        </>
    )
}
