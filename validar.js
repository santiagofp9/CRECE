function validarEmail(){
    var valorEmail=document.getElementById("email").value;
    console.log (valorEmail);
    var expresionRegular=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3,4})+$/;  

        
    
  //  var email=convertirMinusculas(valorEmail.value);
   // email=comprobarAtEmail(email);
    if (expresionRegular.test(valorEmail)) {
        emailOk=true;
        document.getElementById('mensajecorreo').innerHTML = " ";
       // estilo2(valorEmail);
    }
    else {
        emailOk=false;
      //  estiloRojo(valorEmail);
      document.getElementById('mensajecorreo').innerHTML = "CORREO INVALIDO";
    }

}
function validarPassword(){
    var p1 = document.getElementById("passwd").value;
    var p2 = document.getElementById("passwd2").value;
    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
          espacios = true;
        cont++;
      }
         
      if (espacios) {
        alert ("La contraseña no puede contener espacios en blanco");
        return false
      }
    }
    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
      }
      if (p1 != p2) {}
