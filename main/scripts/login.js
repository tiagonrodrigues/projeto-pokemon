window.localStorage

// check if stored data from register-form is equal to entered data in the   login-form
function validar() {

    // stored data from the register-form
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');

    if(userName.value == storedName && userPw.value == storedPw)
    {
      alert('You are logged in.');
      window.open("../pages/game.html")
    }
    else 
    {
      alert('ERROR.');
    }
}

var timeleft = 70;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 70 - timeleft;
  timeleft -= 1;
}, 1000);
