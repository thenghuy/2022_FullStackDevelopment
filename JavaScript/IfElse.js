function Billfee(x){
    if(x>0){
    if ((x>1)&&(x<16)){
       document.getElementById("total").innerHTML=x*2.34;
    }else if ((x>16)&&(x<25)){
        document.getElementById("total").innerHTML=x*2.98;
     }else if ((x>26)&&(x<35)){
        document.getElementById("total").innerHTML=x*3.2405;
     }else if ((x>36)&&(x<100)){
        document.getElementById("total").innerHTML=x*3.6237;
     }else if ((x>101)&&(x<150)){
        document.getElementById("total").innerHTML=x*	3.2484;
     }else if ((x>151)&&(x<400)){
        document.getElementById("total").innerHTML=x*4.2218;
     }else{
        document.getElementById("total").innerHTML=x*4.4217;
     }}else if(x<0){
        document.getElementById("total").innerHTML="No negative value";
     }

}