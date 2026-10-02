function controllo(cntrl) {
    
let str = cntrl.replace(/\W/g, "");
let strInv = str.split('').reverse().join('');
 if(str == strInv){
    return true;
} else {
    return false;
}
}
console.log(controllo('i topi non avevano nipoti'));


 
