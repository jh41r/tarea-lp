import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Especialidad from './Especialidad';

function App(){
  return(
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/usuarios">Usuario</Link></li>
          <li><Link to="/especialidades">Especialidad</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/about" element={<AcercaDe/>}/>
        <Route path="/contact" element={<Contacto/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path="/especialidades" element={<Especialidad/>}/>
      </Routes>
    </Router>
  );
}
// import Contador from './contador';

// function App() {
  // return (
    // <div className="App">
      // <h1>Pracitca: Manejo de Eventos en React</h1>
      // <Contador />
    // </div>
  // );
// }

export default App;
