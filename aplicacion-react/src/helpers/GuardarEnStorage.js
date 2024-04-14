export const GuardarEnStorage = (clave, elemento) =>{

    //Conseguir los elementos que ya tenemos en LocalStorage
    let elementos = JSON.parse(localStorage.getItem(clave))

    //Comprobar si es array
    if (Array.isArray(elementos)) {
        //Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con lo que ya tengo
        elementos = [elemento];
    }

    //Guardar en el almacenamiento local
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver objeto guardado
    return elemento;

}

