import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloForm = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion:''
    });

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de pelicula a guardar
        const peli ={
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //Guardar estado
        setPeliState(peli);
        
        //Actualizar estado 
        setListadoState(elementos => {
            return [...elementos, peli]
        });


        //Guardar en el alamcenamiento local
        GuardarEnStorage("pelis",peli);


    };

    
    return (
        <div className="add">
            <h3 className="title">{tituloForm}</h3>

            <form onSubmit={conseguirDatosForm}>
                <input  type="text"
                        placeholder="Titulo"
                        name='titulo'
                        id="title" 
                />

                <textarea 
                        id="description"
                        name='descripcion'
                        placeholder="Descripcion">

                </textarea>

                <input  type="submit" 
                        value="Guardar" 
                        id="save" 
                />
            </form>
            
        </div>
    );
};
