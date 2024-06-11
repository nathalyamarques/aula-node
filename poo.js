// caneta bic
//encapsulamento

class Caneta {
    //atributos -> propriedades ->adjetivo
    cor = "azul";
    vazia = false;


    constructor(cor){
        this.cor = cor;
    }

    //metodo -> função ->verbo
    escrever(){
        var vazia = true;
        console.log("escrever bastante")
        this.vazia = true;
    }
}

class Caneta2 extends Caneta {
    botaoApertado = false;

}

//instância
var bic1 = new Caneta("azul");
var bic2 = new Caneta("vermelho");
var bic3 = new Caneta("preto");
var bic4 = bic3; //referência a um objeto
var bic5 = new Caneta("verde");

// bic2.cor = "preta";
// bic4.cor ="vermelha";


if(bic1 == bic2){
    console.log("verdade");
}else{
    console.log("false")
}

//invocando o metodo
bic1.vazia = false;
bic1.escrever();
console.log(bic1, bic2, bic3, bic4)
console.log(bic5);