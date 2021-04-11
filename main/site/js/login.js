var tentativa = 3; 

function validar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if ( username == "user" && password == "1234"){
        alert ("Login com sucesso!!");
        //window.location = "success.html"; //colocar a pagina depois de fazer o login
        return false;
    }
    else{
        tentativa --;
        alert("Ainda tens "+tentativa+" tentativas");
    
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}