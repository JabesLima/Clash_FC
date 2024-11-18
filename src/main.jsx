import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Global.css';
import App from './App.jsx'


// todo: Configurando router

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cards from './pages/Pages_normal/Cards.jsx';
import Inicial from './pages/Pages_normal/Inicial.jsx';
import InformCla from './pages/Pages_normal/InformCla.jsx';
import Guerra from './pages/Pages_normal/Guerras.jsx';
import ErroPage from './pages/Page_not_found/ErroPage.jsx';
import Documentation from './pages/Document_of_syte_P/Documentation.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage />,
    children: [
      {
        index: true,
        element: <Inicial/>
      },
      {
        path: "Cards",
        element: <Cards/>
      },
      {
        path: "information",
        element: <InformCla/>
      },
      {
        path: "Guerra",
        element: <Guerra/>
      },
      {
        path: "Documentacao",
        element: <Documentation/>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
