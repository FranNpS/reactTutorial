import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContexts"

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Mudar para o tema {theme === 'light' ? 'escuro' : 'claro'}
        </button>
    ); 
}

 


export default ThemeToggleButton;