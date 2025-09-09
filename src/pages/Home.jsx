import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";

const Home = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <h2>Bem vindo a pagina inicial</h2>
            <p>Bem viondo a pagina inicial da aplicação</p>
        </div>
    );

}

export default Home;