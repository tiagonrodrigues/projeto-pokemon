function username(){
    var Local_user = localStorage.getItem("username");

    document.getElementById("welcome").innerHTML = "Welcome back, " + Local_user;
}