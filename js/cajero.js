var num = document.getElementById("datos");
function add(n) {
    var x = num.value;
    num.value = x + n;
}
function cancel() {
    num.value="";
    document.getElementById("mensaje").innerHTML=""
}
function cambiar() {
    document.getElementById("m1").innerHTML = "<h1>MENU PRINCIAL</h1>";
}
function login(){
    var pass = document.getElementById("datos").value;
    if (pass == "080120") {
        document.getElementById("m1").style.display="nome";
        document.getElementById("cambiar();").style.display="block";
       
        
    }else{
    
        document.getElementById("mensaje").innerHTML="La contraseña es Incorrecta!!!!"
    }
}
