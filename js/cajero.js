class User{
    constructor(password,monto,nombre){
        this.password=password;
        this.monto=monto;
        
    };
};
var datos=[];
function verificar() {
    var user=new User("080120",9900);
    datos.push(user);
}
function logueo() {
    verificar();
    if (document.getElementById("datos").value==datos[0].password) {
        document.getElementById("datos").value=""
        document.getElementById("pantalla1").style.display="none";
        document.getElementById("pantalla2").style.display="block";
    } else {
        document.getElementById("inicio").innerHTML="La contraseña es incorrecta";
    }
}
function retiro_edit() {
    var retiro=document.getElementById("montos").value,montoactual=datos[0].monto;
    if (retiro=="") {
        document.getElementById("pantalla-error").innerHTML="Ingresar Monto";
    } else {
        if (retiro%10==0) {
            if (montoactual>retiro) {
                datos[0].monto=montoactual-retiro;
                document.getElementById("montos").value=""
                document.getElementById("pantalla5").style.display="none";
                document.getElementById("pantalla6").style.display="block";
            } else {
                document.getElementById("pantalla-error").innerHTML="Saldo Insuficiente";
            }
        } else {
            document.getElementById("pantalla-error").innerHTML="Multiplos de 10";
        }
    }
}
function cancel(){
    var elemento = document.getElementById("datos");
    elemento.value = "";
}
function cancel2() {
    var elemento = document.getElementById("montos");
    elemento.value = "";
}
function retiros() {
    document.getElementById("pantalla2").style.display="none";
    document.getElementById("pantalla3").style.display="block";
}
function retiros2() {
    document.getElementById("pantalla3").style.display="none";
    document.getElementById("pantalla4").style.display="block";
}
function retiros3() {
    document.getElementById("pantalla4").style.display="none";
    document.getElementById("pantalla5").style.display="block";
    document.getElementById("teclado1").style.display="none";
    document.getElementById("teclado2").style.display="block";
}
function retirofinish() {
    document.getElementById("pantalla6").style.display="none";
    document.getElementById("pantalla7").style.display="block";
}
function retiro_d_menu(){
    document.getElementById("pantalla7").style.display="none";
    document.getElementById("pantalla2").style.display="block";
}
function retiro_otravez(){
    document.getElementById("pantalla6").style.display="none";
    document.getElementById("pantalla5").style.display="block";
}
document.getElementById("num1").addEventListener("click",num1);
function num1(){ 
    let sumado=document.getElementById("num1").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
 }
document.getElementById("num1_1").addEventListener("click",num1_1);
function num1_1(){ 
    let sumado=document.getElementById("num1_1").innerHTML;
    var elemento=document.getElementById("montos");
    var value=elemento.value;
    elemento.value=value + sumado;
}

 var elemento=document.getElementById("montos");
document.getElementById("num2").addEventListener("click",num2);
function num2(){ 
    let sumado=document.getElementById("num2").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
 document.getElementById("num2_2").addEventListener("click",num2_2);
function num2_2(){ 
    let sumado=document.getElementById("num2_2").innerHTML;
    var elemento=document.getElementById("montos");
    var value=elemento.value;
    elemento.value=value + sumado;
}
document.getElementById("num3").addEventListener("click",num3);
function num3(){ 
    let sumado=document.getElementById("num3").innerHTML;
    var elemento=document.getElementById("datos");
    var value=elemento.value;
    elemento.value =value+sumado;
}
 document.getElementById("num3_3").addEventListener("click",num3_3);
function num3_3(){ 
    let sumado=document.getElementById("num3_3").innerHTML;
    var elemento=document.getElementById("monto");
    var value=elemento.value;
    elemento.value =value+sumado;
}
document.getElementById("num4").addEventListener("click",num4);
function num4(){ 
    let sumado = document.getElementById("num4").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
 document.getElementById("num4_4").addEventListener("click",num4_4);
function num4_4(){ 
    let sumado = document.getElementById("num4_4").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num5").addEventListener("click",num5);
function num5(){ 
    let sumado = document.getElementById("num5").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
 document.getElementById("num5_5").addEventListener("click",num5_5);
function num5_5(){ 
    let sumado = document.getElementById("num5_5").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num6").addEventListener("click",num6);
function num6(){ 
    let sumado = document.getElementById("num6").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num6_6").addEventListener("click",num6_6);
function num6_6(){ 
    let sumado = document.getElementById("num6_6").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num7").addEventListener("click",num7);
function num7(){ 
    let sumado = document.getElementById("num7").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 document.getElementById("num7_7").addEventListener("click",num7_7);
function num7_7(){ 
    let sumado = document.getElementById("num7_7").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
document.getElementById("num8").addEventListener("click",num8);
function num8(){ 
    let sumado = document.getElementById("num8").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num8_8").addEventListener("click",num8_8);
function num8_8(){ 
    let sumado = document.getElementById("num8_8").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num9").addEventListener("click",num9);
function num9(){ 
    let sumado = document.getElementById("num9").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 document.getElementById("num9_9").addEventListener("click",num9_9);
function num9_9(){ 
    let sumado = document.getElementById("num9_9").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 document.getElementById("num0").addEventListener("click",num0);
function num0(){ 
    let sumado = document.getElementById("num0").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("num0_0").addEventListener("click",num0_0);
function num0_0(){ 
    let sumado = document.getElementById("num0_0").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("nump").addEventListener("click",nump);
function nump(){ 
    let sumado = document.getElementById("nump").innerHTML;
    var elemento = document.getElementById("datos");
    var value = elemento.value;
    elemento.value = value + sumado;
}
document.getElementById("nump_p").addEventListener("click",nump_p);
function nump_p(){ 
    let sumado = document.getElementById("nump_p").innerHTML;
    var elemento = document.getElementById("montos");
    var value = elemento.value;
    elemento.value = value + sumado;
}