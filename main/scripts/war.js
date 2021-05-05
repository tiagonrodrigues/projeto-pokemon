var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

function roll_dice(){
    var my_roll = dice.roll();
    var ap_roll = dice.roll();

    var myHP = document.getElementById("myHP").innerHTML;
    var apHP = document.getElementById("apHP").innerHTML;

    var my_damage = my_roll * my_roll;
    var ap_damage = ap_roll * ap_roll;

    var new_myHP = myHP - ap_damage;
    var new_apHP = apHP - my_damage;

    if(new_myHP <= 0){
        document.getElementById("myHP").innerHTML = 0;
        alert("GAME OVER!");
        window.open("../pages/gamemode.html");

    }
    else{
        document.getElementById("myHP").innerHTML = new_myHP;
    }
    if(new_apHP <= 0){
        document.getElementById("apHP").innerHTML = 0;
        var img = document.getElementById('photopika');
        img.src="https://media.giphy.com/media/3oKIPsoRmzEfUUe8JG/giphy.gif";
        alert("You won the battle!");
        window.open("../pages/game.html");
    }
    else{
        document.getElementById("apHP").innerHTML = new_apHP;
    }

    var greenhp = " HP";
    var result = greenhp.fontcolor("#33FF33");

    var reddmg = " Damage"
    var result2 = reddmg.fontcolor("#FF0000")

    document.getElementById("my_message").innerHTML = "Your attack took " + my_damage + result2;
    document.getElementById("ap_message").innerHTML = "You lost " + ap_damage + result;
}