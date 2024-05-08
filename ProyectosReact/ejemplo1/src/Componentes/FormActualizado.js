import React, {useState} from "react";

function FormActualizado(){
    const [formData, setFormData] = useState({id:'', newName:''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await fetch(`http://localhost:3001/api/user/${formData.id}`,{
            method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({newName: formData.newName}),
          }) ;
          const data = await response.json();
            console.log(data);
        } catch (error){
            console.error('Enviar el error '+error)
        }
    };

    return(
        <div>
            <h2>Formulario PUT</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input type="number" id="id" name="id" value={formData.id} onChange={handleChange}required/>
                <label htmlFor="newName">Nuevo nombre:</label>
                <input type="text" id="newName" name="newName" value={formData.newName} onChange={handleChange} required/>
                <br/>
                <br/>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
export default FormActualizado;