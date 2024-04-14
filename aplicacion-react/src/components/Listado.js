import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {


  const [editar, setEditar] = useState(0);



  //Hook que se carga apenas carga la pagina
  useEffect(() => {

    conseguirPeliculas();

  }, []);



  const conseguirPeliculas = () => {

    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;

  }

  const borrarPeli = (id) => {

    // Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    // Filtrar para que elimine la que no quiero
    let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))
    // Actualizar estado de listado
    setListadoState(nuevo_array_peliculas);
    // Actualizar datos en localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
  }

  return (
    <>
      {listadoState != null ?
        listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() =>  setEditar(peli.id) }>Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

              {/* aparece formulario de editar*/}
              {editar == peli.id && (
                <Editar />
              )}

            </article>
          );
        })

        : <h2>No hay peli para mostrar</h2>
      }

    </>
  )
}
