import '../../styles/Style_Pages/Guerra.css';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Guerra() {
    const [date, setDate] = useState(null);
    const [guerraOn, setGuerraOn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("/api/clans/%232LOV8UVO2/currentwar")
            .then(response => {
                const data = response.data;       
                setDate(data);
                setLoading(false);
                if (data.state === "inWar") {
                    setGuerraOn(true);
                } else if(data.state === "preparation"){
                    setGuerraOn(true);
                } else {
                    setGuerraOn(false);
                }
            })
            .catch(error => {
                console.error("Erro ao buscar os dados:", error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (!date) {
        return <div className="error">Erro ao carregar os dados do clã.</div>;
    }

    return (
        <div className='Guerra'>
            {guerraOn && (
                <div className="Card_guerra">
                    <h1>Atualmente em Guerra</h1>
                    <div className='Logos'><img src={date.clan.badgeUrls.small} alt="logo" /><span className='x'>x</span><img src={date.opponent.badgeUrls.small} alt="logo" /></div>
                    <p><strong>Total de pessoas pra guerra: </strong> {date.teamSize}</p>
                    <p><strong>Ataque por membros: </strong>{date.attacksPerMember || "Ninguém ainda atacou"}</p>
                </div>
            )}

            {!guerraOn && (
                <div className="Card_guerra">
                    <h1>No momento não se encontra em guerra</h1>
                </div>
            )}
        </div>
    );
}
