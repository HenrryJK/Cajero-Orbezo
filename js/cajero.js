class Usuario{
    constructor(password){
        this.password= password;
    };
    verificacion(){
        /*alert(this.password);*/
        if (this.password=="080120") {
            return("La sesion se ha iniciado..")
        }else{
          return("La contraseña es incorrecta...")     
        }
    };
};


function cancel(){
    var elemento = document.getElementById("datos");
    elemento.value = "";
}
function logueo() {
    var usuario= new Usuario(document.getElementById("datos").value);
    var seguro=usuario.verificacion();
    if (seguro=="La sesion se ha iniciado..") {
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
    }else{
        document.getElementById("mensaje").innerHTML=seguro;
       
    }
}
function retiros() {
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}
function retiros2() {
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}

document.getElementById("num1").addEventListener("click", num1);
function num1(){
    let sumado=document.getElementById("num1").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num2").addEventListener("click", num2);
function num2(){
    let sumado=document.getElementById("num2").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num3").addEventListener("click", num3);
function num3(){
    let sumado=document.getElementById("num3").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num4").addEventListener("click", num4);
function num4(){
    let sumado=document.getElementById("num4").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num5").addEventListener("click", num5);
function num5(){
    let sumado=document.getElementById("num5").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num6").addEventListener("click", num6);
function num6(){
    let sumado=document.getElementById("num6").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num7").addEventListener("click", num7);
function num7(){
    let sumado=document.getElementById("num7").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num8").addEventListener("click", num8);
function num8(){
    let sumado=document.getElementById("num8").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num9").addEventListener("click", num9);
function num9(){
    let sumado=document.getElementById("num9").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num0").addEventListener("click", num0);
function num0(){
    let sumado=document.getElementById("num0").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("nump").addEventListener("click", nump);
function nump(){
    let sumado=document.getElementById("nump").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}