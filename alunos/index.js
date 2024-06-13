const express = require("express");
const app = express();

app.get("/contato"), function(req){
    res.send("página de contato");
};

app.get("/", function(req,res){
    res.send("pagina inicial")
})

app.listen(3003, function(){
    console.log("servidor iniciado");
});