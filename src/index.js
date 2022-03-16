import ReactDom from "react-dom";
import TelaBoasVindas from "./Tela-Boas-Vindas";
import TelaFlashCards from "./Tela-Flash-Cards";

function App () {
    return (
        <>
            <TelaBoasVindas />
            <TelaFlashCards />
        </>
    )
}


ReactDom.render(<App />, document.querySelector(".root"))