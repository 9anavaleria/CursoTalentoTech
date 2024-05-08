const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto =3001;

// Para evaluar servidor iniciado
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
app.get('/home', (req, res) => {
    res.send('Esto es home');
});

// Servidor en esperta de instruccion
app.listen(puerto,()=>{
    console.log(`escuchando en http://localhost:${puerto} `);
});

// Uso del GET
app.get('/nuevo', (req, res) => {
    res.send( {mensaje : "Mensaje cargando"});
});
app.get('/api', (req, res) => {
    res.send( {mensaje : "Hola desde el servidor"});
});
// Middleaware para parsear el body de la solicitud -- Transcripción
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//arreglo de datos
let users=[
    {id:1, name: 'Carlos', age: 10},
    {id:2, name: 'Juan', age: 15},
    {id:3, name: 'Mateo', age: 19},

]
// Uso del POST
app.post('/api/user', (req, res) => {
    const {name, age} = req.body;
    const edad = parseInt(age);
    console.log(req.body);
    console.log('Nombre: ', name);
    console.log('Edad: ', age);
    res.json({mensaje: 'Datos recibidos correctamente'});
    users.push({id: users.length+1, name, age: edad});
    console.log(users);
});

// Uso del PUT 
app.put('/api/user/:id', (req, res)=> {
    const {id} = req.params;
    const {newName} = req.body;

    const userIndex = users.findIndex(users => users.id === parseInt(id));
    if (userIndex === -1){
        return res.status(404).json({error: 'Usuario no encontrado'});
    }
    users[userIndex].name = newName;
    console.log(users);
    res.json({message: 'Nombre actualizado correctamente'})
});