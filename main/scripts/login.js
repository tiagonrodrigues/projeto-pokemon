var tentativa = 3;

function validar() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "user" && password == "1234") {
    alert("Login com sucesso!!");
    window.open("../pages/game.html");
    return false;
  } else {
    tentativa--;
    alert("Ainda tens " + tentativa + " tentativas");

    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

var timeleft = 10;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);
