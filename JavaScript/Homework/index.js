function getUpper(x){
   let text = String(x);
   let res = text.toUpperCase();
   document.getElementById("res").innerHTML=res;
}
function removeEle(x,y){
    let text = String(x);
    let n = Number(y);
    let res = text.substring(0,text.length-n)
    document.getElementById("res").innerHTML=res;
}
function checkNum(x){
    let num = Number(x);
    let res = (num%2==0)?"It is even":"It is odd";
    document.getElementById("res").innerHTML=res;
}
function Addition(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    window.alert("Total= "+(num1+num2));

}
function check(x,y){
    let id = Number(x);
    let pwd = String(y);
    if (pwd.length<4){
       alert("Password must me 4 digit")
    }else{
        onsubmit();
        console.log(id);
    }
}