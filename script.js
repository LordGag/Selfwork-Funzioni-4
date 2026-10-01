let frase = prompt('Inserisci una frase: ');
function controllo(cntrl) {
    
let str = cntrl.replace(/\W/g, "");
let strInv = str.split('').reverse().join('');
 if(str == strInv){
    return true;
} else {
    return false;
}
}
console.log(controllo(frase));

let frase2 = prompt('Inserisci una frase: ');
console.log(controllo(frase2));

 