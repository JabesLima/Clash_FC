import "../../styles/Style_Pages/Cards.css";
import { useEffect, useState } from 'react';
import axios from "axios";


// todo: Imagens centro de vila
import C1 from "../../imgs/Centros_de_vila/c1.png";
import C2 from "../../imgs/Centros_de_vila/c2.png";
import C3 from "../../imgs/Centros_de_vila/c3.png";
import C4 from "../../imgs/Centros_de_vila/c4.png";
import C5 from "../../imgs/Centros_de_vila/c5.png";
import C6 from "../../imgs/Centros_de_vila/c6.png";
import C7 from "../../imgs/Centros_de_vila/c7.png";
import C8 from "../../imgs/Centros_de_vila/c8.png";
import C9 from "../../imgs/Centros_de_vila/c9.png";
import C10 from "../../imgs/Centros_de_vila/c10.png";
import C11 from "../../imgs/Centros_de_vila/c11.png";
import C12 from "../../imgs/Centros_de_vila/c12.png";
import C13 from "../../imgs/Centros_de_vila/c13.png";
import C14 from "../../imgs/Centros_de_vila/c14.png";
import C15 from "../../imgs/Centros_de_vila/c15.png";
import C16 from "../../imgs/Centros_de_vila/c16.png";

const townHallImages = {
  1: C1,
  2: C2,
  3: C3,
  4: C4,
  5: C5,
  6: C6,
  7: C7,
  8: C8,
  9: C9,
  10: C10,
  11: C11,
  12: C12,
  13: C13,
  14: C14,
  15: C15,
  16: C16,
};

export default function Cards() {
    const [date, setDate] = useState("Carregrando...");
    const [procurar, setProcurar] = useState("")
    const [loading, setLoading] = useState(true);
    // const clanTag = '#LOV8UVO2';
    // const encodedTag = encodeURIComponent(clanTag);
    const VITE_API_KEY ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU5ZDRlNTJmLTc5YWUtNGI3Yy05Y2RmLTFlOTFiNmVlMGExZSIsImlhdCI6MTczMTc3OTk0NCwic3ViIjoiZGV2ZWxvcGVyLzRhOTk3YWE3LTEzMjgtMzY0Zi0zNWJhLTYxNzczYzg3ODdmNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjIwMC4yMTUuMTY0LjgxIl0sInR5cGUiOiJjbGllbnQifV19.X01Epz8mbACCGaYb1xVDNEQQMYj6OsQBNdU_FJumpHYfyLzYjcPfQueApglNfMm-_4OJNCbTxZWkMqsQrJ5UCA"

    useEffect(() => {
      axios.get(`https://api.clashofclans.com/v1/clans/%232LOV8UVO2/members`, {
        headers: {
            Authorization: `Bearer ${VITE_API_KEY}`
        }
      })
        .then(response => {
          setDate(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao buscar os dados:", error);
          setLoading(false);
        });
    }, []);    

    // todo: Procurar por membro!
    const filterMembros = date.items?.filter(member =>
        member.name.toLowerCase().includes(procurar.toLowerCase()) ||
        member.tag.toLowerCase().includes(procurar.toLowerCase())
    )

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (!date || typeof date !== 'object') {
        return <div className="error">Erro ao carregar os dados do clã.</div>; // Verificação extra
    }

    return(
        <div className="Membros">
            <div className="Procurar">
                <input type="text" placeholder="Pesquisar Membro" value={procurar} onChange={(e) => setProcurar(e.target.value)}/>
                <hr />
            </div>

            <div className='div_cards'>
                {filterMembros && filterMembros.map((member, index) => (
                    <div key={index} className="card">
                        <img src={townHallImages[member.townHallLevel]} alt="CV" />

                        <div className='Infors'>
                        <span>Nome: <p>{member.name}</p></span>
                        <span>Tag: <p>{member.tag}</p></span>
                        <span>Função: <p>{member.role.charAt(0).toUpperCase() + member.role.slice(1).toLowerCase()}</p></span>
                        <span className="Liga"><p>Liga: {member.trophies} </p> | <img src={member.league.iconUrls.tiny} alt="league" /></span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}