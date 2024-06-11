var n1 = 4;
var n2 = 5;

/**
 * Soma dois numeros
 * @author Nathalya
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */
function soma(n1, n2){
    var res = n1 + n2
}

/* function abc(){
    return n1 + n3;
}
    console.log(abc());
    return res;
 */

var res = soma(2,3);

console.log(res);

var mult = function(n1, n2){
    return n1 * n2;
}

console.log(mult(3,5));
console.log(mult);


/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @param {fun} op 
 * @returns 
 */
function calc(n1, n2, op){
    return op(n1 , n2);
}

console.log(calc(2,5,mult))

function Pessoa(){
    this.idade = 23;
}

var nathalya = new Pessoa();
console.log(nathalya)

//js == es
//js 5 -> es6 -> es2015

const nome = "Nathalya";

let idade = 123;
console.log(idade);