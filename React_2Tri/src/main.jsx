import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Filmes from './pages/Filmes.jsx'
import Sobre from './pages/Sobre.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Filme from './pages/Filme.jsx'
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      children: [
        {index:true,element:<Home/>},
        {path: "filmes",element:<Filmes/>},
        {path: "filme/:id",element:<Filme/>},
        {path: "sobre",element:<Sobre/>},
        {path: "contato",element:<Contato/>},
        {path: "*",element:<PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
