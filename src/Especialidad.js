import React, { useState, useEffect} from "react";

function Especialidad(){
    const [especialidades, setEspecialidad] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/especialidad')
        .then(reponse => reponse.json())
        .then(data => setEspecialidad(data));
    },[]);

    return (
        <div>
            <h2>Lista de Especialidades</h2>
            <ul>
                {especialidades.map(especialidad =>(
                    <li key={especialidad.id}>{especialidad.nombre}</li>
                ))}
            </ul>
        </div>
    )
}

export default Especialidad;