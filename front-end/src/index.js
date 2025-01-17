import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import App from "./App.js"

import Home from './pages/Home'
import Survey from './pages/Survey'
import Admin from './pages/Admin'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Error from "./components/Error"

//import du themeProvider au plus haut niveau de l application
import { ThemeProvider, SurveyProvider } from './utils/Context'



// IMPORT DU STYLE DE BASE SUR TOUTES LES ROUTES ET CONTENU DES PAGES ET COMPOSANTS
import GlobalStyle from './bases/GlobalStyle'

//ReactDOM v18 ne supporte plus ReactDOM.render, il faut createRoot et root.render
//const root = ReactDOM.createRoot(document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App >
        {/* children*/}
        <ThemeProvider>
          <SurveyProvider>
            <GlobalStyle /> {/*style globale appliqué a toutes les routes et a toutes le contenu des pages et composants*/}
            <Header />
            <main>
              {/*Ajouter la prop exact pour que home s affiche sur ce path exactement et non sur un path contenant "/" , 
c'est a dire que home ne doit pas s afficher dans le path du composant Survey qui commence par "/"*/}
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/admin/*" element={<Admin />} />{ /* permet d acceder a la sous route/*" */}
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="*" element={<Error />} />{/* on precise un path dans la "Routes" en dernier  contrairement a l utilisation de switch de la v6*/}
              </Routes >
            </main>
            <Footer />
          </SurveyProvider>
        </ThemeProvider>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();