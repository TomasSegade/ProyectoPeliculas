import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPeliculas</h1>
      </header>

      {/*Barra de navegacion*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido Principal*/}
      <section className="content">
        {/*aqui va el listado de peliculas*/}
        <Listado listadoState={listadoState} setListadoState = {setListadoState}/>

      </section>

      {/*Barra Lateral*/}

      <aside className="lateral">
        <Buscador />

        <Crear setListadoState ={setListadoState}/>

      </aside>

      {/*Pie de pagina*/}
      <footer className="footer">
        &copy; Tomas Martin Segade
      </footer>

    </div>
  );
}

export default App;
