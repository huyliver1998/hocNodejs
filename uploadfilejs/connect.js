const express = require('express')
const app = express();
const port = 3000;

const data =[
    {id:1, name:"Johnny", image:"none", age:"25"},
    {id:2, name:"Evans", image:"none", age:"30"},
    {id:3, name:"Emre Can", image:"none", age:"27"},
];

app.get('/', (req, res) => {
    res.send("first app")
});

app.get('/body', (req, res) => {
    res.send(data)
});

app.get("/body/:id", (req, res) => {
    const id = req.params.id;
    const kq = data.filter(item => {
        if(item.id == id) return true;
    })
    res.send(kq)
});

app.listen(port)