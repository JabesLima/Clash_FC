import { useNavigate } from "react-router-dom";
import "../../styles/Siyle_Not_found_Page/ErroPage.css";

export default function ErroPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="ErroPage">
            <h1>404 - Página não encontrada!</h1>
            <p>Desculpe, a página que você está tentando acessar não existe.</p>
            <button onClick={handleGoHome} className="btn-home">Voltar para a Página Inicial</button>
        </div>
    );
}
