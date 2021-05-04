function username() {
  var Local_user = localStorage.getItem("username");

  document.getElementById("welcome").innerHTML = "Welcome back, " + Local_user + "!";
}

function favTutorial() {  
  var mylist = document.getElementById("myList");  
  document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
  }  