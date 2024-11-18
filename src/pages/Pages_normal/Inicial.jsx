import "../../styles/Style_Pages/Inicial.css"

export default function Inicial(){
    return(
        <div className="Home">
        <div className="Menssagens">
          <div className="BemVindo">
            <h1>🏰 Bem-vindo ao nosso clã 🎉</h1>
            <p>
              Estamos muito felizes em tê-lo conosco! Aqui, no nosso clã,
              acreditamos que cada membro traz algo especial para a nossa
              comunidade. Prepare-se para construir, lutar e se divertir
              enquanto trabalhamos juntos para dominar os campos de batalha!
            </p>
          </div>

          <div className="Regras_do_cla">
            <h1>Regras do Clâ</h1>
            <p>Faça os jogos de clã, no minimo 1 mil pontos.</p>
            <p>Ataque em todas as guerras de clãs.</p>
            <p>Ataque na liga de clâ, é super obrigatorio.</p>
            <p>Trate a todos com respeito.</p>
            <h4>
              ⚠️Se não poder fazer alguma das regras acima, diga o motivo para
              algum dos lideres, caso contrario sera expuso⚠️
            </h4>
            <hr />
          </div>
        </div>

        <div className="Consiferacoes_final">
          <p>
            Sinta-se à vontade para fazer perguntas e compartilhar suas
            experiências. Estamos aqui para ajudar! Vamos juntos conquistar
            novas aldeias e nos divertir ao máximo!
          </p>
        </div>

        <footer>
          <p>⚔️ Boa sorte e divirta-se! ⚔️</p>
        </footer>
        </div>
    )
}