function username() {
  document.getElementById("welcome").innerHTML = "Welcome back, " + localStorage.getItem("username") + "!";
}

function favTutorial() {  
  var mylist = document.getElementById("myList");  
  localStorage.setItem("modo", mylist.options[mylist.selectedIndex].text );  
  }  

function mode(){
  var mode = localStorage.getItem("modo");
  if(mode == "Speedrun"){
    window.open("../pages/speedrun.html");
  }
  if(mode == "Ninja"){
    window.open("../pages/ninja.html");
  }
  if(mode == "The Conqueror"){
    window.open("../pages/conqueror.html");
  }
}
