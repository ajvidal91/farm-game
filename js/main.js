alert("farm");
/*Ths is a game where the user expects the animal images on the screen to move
and make a noise when clicked
*/

var cow = document.getElementById("cow");

var chicken = document.getElementById("chicken");

var pig = document.getElementById("pig");

var mooSound = document.getElementById("mooSound");

var roosterSound = document.getElementById("roosterSound");

var snortSound = document.getElementById("snortSound");

 //the animal event listeners that allow them to move when clicked
  pig.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  pig.style.top = x + 'px';
  pig.style.left = y + 'px';
  snortSound.play();
};


  cow.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  cow.style.top = x + 'px';
  cow.style.left = y + 'px';
  mooSound.play();
};

  chicken.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  chicken.style.top = x + 'px';
  chicken.style.left = y + 'px';
  roosterSound.play();
};
