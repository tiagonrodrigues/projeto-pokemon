function username() {
  document.getElementById("welcome").innerHTML = "Welcome back, " + localStorage.getItem("username") + "!";
}

function favTutorial() {  
  var mylist = document.getElementById("myList");  
  localStorage.setItem("modo", mylist.options[mylist.selectedIndex].text );  
  }  