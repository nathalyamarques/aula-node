const csv = require("csv-parse");
const fs = require("fs");

fs.readFile("alunos.csv", "utf8", function(erro, dados){
    csv.parse(dados, function(erro, valores){

        let ult = valores.length - 1;

        for(let linha = 1; linha <= ult; linha ++){
            let n1 = valores[linha][1];
            let n2 = valores[linha][2];
            let media = (parseInt(n1) + parseInt(n2) ) /2;

            console.log("A media do aluno: "+ valores[linha][0] + " é: "+ media);
        }   
    })
})

