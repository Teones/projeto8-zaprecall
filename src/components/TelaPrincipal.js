import logo from "../assets/logo.png"
import Cards from "./Cards"

export default function TelaPrincipal () {
    return (
        <div className="tela-principal">
            <Logo />
            <Cards />
            {/* <Footer /> */}
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

// function Footer () {
//     let [total, setTotal] = useState(0)
//     return (
//         <footer>
//             {total}/8 CONCLUIDOS
//         </footer>
//     )
// }