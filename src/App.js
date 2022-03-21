import {useState} from "react"
import TelaInicial from "./components/TelaInicial.js";
import TelaPrincipal from "./components/TelaPrincipal.js";



export default function App () {
    const [pagina, setPagina] = useState("TelaInicial")
    console.log(pagina)
    return (
        <>
            {pagina === "TelaInicial" && <TelaInicial setPagina={setPagina} />}
            {pagina !== "TelaInicial" && (
                <>
                    {pagina === "TelaPrincipal" && <TelaPrincipal setPagina={setPagina} />}
                </>
            )}
        </>
    )
}