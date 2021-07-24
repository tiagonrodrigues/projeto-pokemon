function favTutorial() {
  var mylist = document.getElementById("myList");
  localStorage.setItem("modo", mylist.options[mylist.selectedIndex].text);
}

function mode() {
  var mode = localStorage.getItem("modo");
  if (mode == "Speedrun") {
    window.close();
    window.open("../pages/speedrun.html");
  }
  if (mode == "Ninja") {
    window.close();
    window.open("../pages/ninja.html");
  }
  if (mode == "The Conqueror") {
    window.close();
    window.open("../pages/conqueror.html");
  }
}

window.onload = function () {
  var user = localStorage.getItem("username");
  var pok = localStorage.getItem("pokemon");
  var time = localStorage.getItem("time");

  document.getElementById("welcome").innerHTML = "Welcome back, " + user + "!";

  document.getElementById("USER").innerHTML = user;
  document.getElementById("POKEMON").innerHTML = pok;
  document.getElementById("TIME").innerHTML = time;
}