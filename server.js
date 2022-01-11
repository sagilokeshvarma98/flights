const express = require('express');
const app = express();
const PORT = "4888";
const bdP = require('body-parser');
const cors = require('cors');
const fs = require('fs');

app.use(bdP.json());
app.use(cors());
app.listen(PORT,()=>console.log(`Server is running in port ${PORT}`));

app.get('/quotes/:id',(req,res)=>{
    let id = req.params.id;
    fs.readFile("./src/assets/json/quotes.json", (err,data)=>{
        let quotes = JSON.parse(data).quotes;
        quotes.filter((qte)=>{
            if(qte.id == id)
                res.json(qte.quote)
        });
    });
});


app.get('/flights',(req,res)=>{
    fs.readFile('./src/assets/json/flights.json',(err,data)=>{
        res.send(JSON.parse(data).flights);
    })
});
