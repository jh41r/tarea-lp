import React, { useState, useEffect} from "react";

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse => reponse.json())
        .then(data => setUsuarios(data));
    },[]);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuarios.map(usuarios =>(
                    <li key={usuarios.id}>{usuarios.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Usuarios;