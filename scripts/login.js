window.localStorage;

// check if stored data from register-form is equal to entered data in the   login-form
function validar() {
  // stored data from the register-form
  var storedName = localStorage.getItem("username");
  var storedPw = localStorage.getItem("pw");

  // entered data from the login-form
  var userName = document.getElementById("username");
  var userPw = document.getElementById("password");

  try {
    if (userName.value == "" && userPw.value == "") throw "Fields empty!";
    if (userName.value == "") throw "Username empty!";
    if (userPw.value == "") throw "Password empty!";
    if (userName.value == storedName && userPw.value == storedPw) {
      alert("You are logged in.");
      window.open("../pages/gamemode.html");
      open(location, '_self').close();
    } else {
      throw "Your username or password may be incorrect, please try again.";
    }
  } catch (err) {
    alert(err);
  }
}