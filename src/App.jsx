import './styles/Style_Pages/App.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // todo: Abrir e fechar Menu...
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);


  // todo: Trocando os h1 dinamicamente!
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Team clash';
      case '/Cards':
        return 'Membros';
      case '/Clan/information':
        return 'Informaçoes do clã';
      case '/Clan/Guerra': 
        return 'Guerra de Clã'
      case '/Documentacao':
        return 'Documentaçao'
      default:
        return 'Team Clash';
      
    }
  };

  



  return (
    <div className='Principal'>
      <header>
        <i className="fas fa-bars" onClick={toggleMenu} />
        <h1>{getTitle()}</h1>
      </header>
      {menuOpen && (
        <div className="menu">
          <ul>
            <Link to="/"><button onClick={closeMenu}><li>Home</li></button></Link>
            <Link to="/Cards"><button onClick={closeMenu}><li>Membros</li></button></Link>
            <Link to="/information"><button onClick={closeMenu}><li>Informaçoes do clã</li></button></Link>
            <Link to="/Guerra"><button onClick={closeMenu}><li>Guerras</li></button></Link>
            <Link to="/Documentacao"><button onClick={closeMenu}><li>Documentação</li></button></Link>
          </ul>
        </div>
      )}
      <Outlet/>
    </div>
  );
}

export default App;
