// storing input from register-form
function store() {
  // Name and Password from the register-form
  var username = document.getElementById("username");
  var pw = document.getElementById("pw");

  var Local_user = localStorage.getItem("username");
  var Local_pw = localStorage.getItem("pw");

  try {
    if (username.value == "" && pw.value == "") throw "Fields empty!";
    if (username.value == "") throw "Username empty!";
    if (pw.value == "") throw "Password empty!";
    if (username.value == Local_user) throw "The username already exists!";

    localStorage.setItem("username", username.value);
    localStorage.setItem("pw", pw.value);
    alert("Success! Account created.");
    window.open("../pages/login.html");
  } catch (err) {
    alert(err);
  }
}

function passwordChanged() {
  var strength = document.getElementById("strength");
  var strongRegex = new RegExp(
    "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pw = document.getElementById("pw");
  if (pw.value.length == 0) {
    strength.innerHTML = "";
  } else if (false == enoughRegex.test(pw.value)) {
    strength.innerHTML = "More Characters";
  } else if (strongRegex.test(pw.value)) {
    strength.innerHTML = '<span style="color:green">Strong!</span>';
  } else if (mediumRegex.test(pw.value)) {
    strength.innerHTML = '<span style="color:orange">Medium!</span>';
  } else {
    strength.innerHTML = '<span style="color:red">Weak!</span>';
  }
}
