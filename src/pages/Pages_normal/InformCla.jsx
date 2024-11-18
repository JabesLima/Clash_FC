import { useEffect, useState } from 'react';
import axios from "axios";
import '../../styles/Style_Pages/InformCla.css'; 

export default function InformCla() {
    const [date, setDate] = useState("carregando...");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/clans/%232LOV8UVO2")
            .then(response => {
                setDate(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar os dados:", error);
                setLoading(false);
            });
    }, []);  

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (!date || typeof date !== 'object') {
        return <div className="error">Erro ao carregar os dados do clã.</div>; // Verificação extra
    }


    return(
        <div className='Informacoes'>
            <div className="basic_infors">
                <h1>{date.name} <img src={date.badgeUrls.small} alt="Emblema do clã" /></h1>
                <p>{date.description}</p>
                <div className="clan-details">
                    <p><strong>Nível do Clã:</strong> {date.clanLevel}</p>
                    <p><strong>Pontuação do Clã:</strong> {date.clanPoints}</p>
                    <p><strong>Localização:</strong> {date.location.name}</p>
                    <p><strong>Total de Membros:</strong> {50 - date.members}</p>
                    <p><strong>Tipo de Clã:</strong> {date.type}</p>
                    <p><strong>Nivel de vila pra entrar no clã:</strong> {date.requiredTownhallLevel}</p>
                </div>
            </div>
        </div>
    );
}
