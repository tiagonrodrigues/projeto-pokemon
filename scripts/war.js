var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

function roll_dice() {
  var my_roll = dice.roll();
  var ap_roll = dice.roll();

  var myHP = document.getElementById("myHP").innerHTML;
  var apHP = document.getElementById("apHP").innerHTML;

  var my_damage = my_roll * my_roll;
  var ap_damage = ap_roll * ap_roll;

  var new_myHP = myHP - ap_damage;
  var new_apHP = apHP - my_damage;

  if (new_myHP <= 0) {
    document.getElementById("myHP").innerHTML = 0;
    alert("GAME OVER!");
    localStorage.setItem("time", document.getElementById("timer").innerHTML);
    window.open("../pages/gamemode.html");
  } else {
    document.getElementById("myHP").innerHTML = new_myHP;
    document.getElementById("my_message").innerHTML =
      "Your attack took " + my_damage + result2;
    document.getElementById("ap_message").innerHTML =
      "You lost " + ap_damage + result;
  }
  if (new_apHP <= 0) {
    document.getElementById("apHP").innerHTML = 0;
    alert("You won the battle!");
    var pok = localStorage.getItem("pokemon");
    var pok_mais = Number(pok) + 1;
    localStorage.setItem("pokemon", pok_mais);
    localStorage.setItem("time", document.getElementById("timer").innerHTML);
    document.getElementById("game").hidden = false;
    document.getElementById("war").hidden = true;
    document.getElementById("myHP").innerHTML = 100;
    document.getElementById("apHP").innerHTML = 100;
  } else {
    document.getElementById("apHP").innerHTML = new_apHP;
    document.getElementById("my_message").innerHTML =
      "Your attack took " + my_damage + result2;
    document.getElementById("ap_message").innerHTML =
      "You lost " + ap_damage + result;
  }

  var reddmg = " Damage";
  var result2 = reddmg.fontcolor("#FF0000");

  var greenhp = " HP";
  var result = greenhp.fontcolor("#33FF33");

  document.getElementById("my_message").innerHTML =
    "Your attack took " + my_damage + result2;
  document.getElementById("ap_message").innerHTML =
    "You lost " + ap_damage + result;
}
