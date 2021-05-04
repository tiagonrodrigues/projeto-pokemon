function username() {
  var Local_user = localStorage.getItem("username");

  document.getElementById("welcome").innerHTML = "Welcome back, " + Local_user + "!";
}

function favTutorial() {  
  var mylist = document.getElementById("myList");  
  localStorage.setItem("modo", mylist.options[mylist.selectedIndex].text )  
  }  