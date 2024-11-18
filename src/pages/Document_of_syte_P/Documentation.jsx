import "../../styles/Document_of_syte_S/Documentation.css";

export default function Documentation() {
    return (
        <div className="Documentation">
            <h1>Documentação do Site</h1>

            <section>
                <h2>1. Introdução</h2>
                <p>Este site foi desenvolvido para o clã Clã Team como uma ferramenta para melhorar a comunicação, organização e acompanhamento das atividades relacionadas ao jogo <strong>Clash of Clans</strong>.</p>
                <p>A interface é simples e intuitiva, com informações e funcionalidades específicas para os membros do clã.</p>
            </section>

            <section>
                <h2>2. Funcionalidades do Site</h2>
                <ul>
                    <li>
                        <strong>2.1. Exibição de Informações do Clã:</strong> Mostra detalhes como nome, emblema, nível do clã, pontuação e estatísticas gerais.
                    </li>
                    <li>
                        <strong>2.2. Gerenciamento de Membros:</strong> Lista com todos os membros, incluindo cargos e trofeus.
                    </li>
                    <li>
                        <strong>2.3. Status da Guerra:</strong> Acompanhamento em tempo real das guerras e ataques realizados..
                    </li>
                    <li>
                        <strong>2.5. Ferramentas de Busca:</strong> Pesquisa de membros por nome.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. Navegação pelo Site</h2>
                <p>O site possui as seguintes páginas:</p>
                <ul>
                    <li><strong>Página Inicial:</strong> Visão geral do clã com informações básicas.</li>
                    <li><strong>Membros:</strong> Lista completa dos membros e filtros para pesquisa.</li>
                    <li><strong>Guerras:</strong> status das guerras em andamento.</li>
                </ul>
            </section>

            <section>
                <h2>4. Tecnologias Utilizadas</h2>
                <p>As tecnologias empregadas no desenvolvimento do site incluem:</p>
                <ul>
                    <li><strong>Frontend:</strong> React.js para criação de componentes dinâmicos e interativos.</li>
                    <li><strong>Estilização:</strong> CSS para personalização visual.</li>
                    <li><strong>Backend:</strong> Node.js e Express.js para gerenciamento de dados e rotas.</li>
                    <li><strong>API do Clash of Clans:</strong> Para coleta de dados relacionados ao clã e guerras.</li>
                </ul>
            </section>

            <section>
                <h2>6. Contato e Suporte</h2>
                <p>Para dúvidas, problemas ou sugestões, entre em contato com os administradores do site:</p>
                <ul>
                    <li><strong>Desenvolvedor:</strong> Paulo Jabes Lima da Silva</li>
                    <li><strong>Portifolio:</strong><a href="https://jabeslima.github.io/Portifolio/" target="_blank"> Portifolio_Pessoal</a></li>
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5575992251548?text=Ol%C3%A1%2C%20tudo%20bom%3F" target="_blank">Solicitar Entrada no clã</a></li>
                </ul>
            </section>
        </div>
    );
}
