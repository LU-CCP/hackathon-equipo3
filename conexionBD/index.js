const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const SorteoService = require('./src/services/index')

const app = express();


//CONEXION BASE DE DATOS
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_sort"
});

connection.connect(err =>{
    if(err){
        return err;
    }
})

let _ganadores= [];

//API

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
res.send('/users para listar usuarios /crear para iniciar sorteo /getId/:nombre para buscar id de aprticipante')
})

app.get('/users', SorteoService.getUsers);

app.post('/users/add', (req, res) => {
    SorteoService.addUser(req, res)
})

app.post('/crear', SorteoService.crearSorteo) 

app.get("/getId/:nombre", (req, res)=>{
  SorteoService.getUserIdByName(req, res);
})

//Endpoint devuelve ultimo sorteo
app.get("/getSorteo", SorteoService.getSorteo)

app.listen(4000, () => {
    console.log('server running on port 4000')
})

// app.get("/generateDraw", (req, res) => {
// const sorteado = SorteoService.generateDraw();
// console.log("sorteado externo="+ sorteado)
//   res.send(SorteoService.showDraw(sorteado))
// })

app.post("/ganadores", (req, res)=> {
    _ganadores.push(SorteoService.getGanador(req, res))
    console.log(_ganadores);
    res.send(200);
})

app.get("/nombres", (req,res)=> {
    SorteoService.dataToObject(req, res);
})

app.get("/getQR", (req, res) => {
  res.status(200).send(SorteoService.qrGenerate());
})

module.exports = app;