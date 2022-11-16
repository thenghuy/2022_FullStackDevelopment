function addition(x,y) {
    document.getElementById("plus").innerHTML=x+y;
}
function substract(x,y) {
    document.getElementById("substract").innerHTML=x-y;
}
function multiply(x,y) {
    document.getElementById("multiply").innerHTML=x*y;
}
function division(x,y){
    z=parseFloat(x/y).toFixed(2);
    document.getElementById("division").innerHTML=z;
}