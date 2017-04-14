var menuItems = document.getElementById("footer-text").getElementsByTagName("div");
var x = document.getElementById("car").innerHTML;
var hiddenBox1 = document.getElementById('hidden-box1');
var hiddenBox2 = document.getElementById('hidden-box2');
var hiddenBox3 = document.getElementById('hidden-box3');
var hiddenBox = [hiddenBox1, hiddenBox2, hiddenBox3];
var from = document.getElementById('from');

from.addEventListener("click", openBox);


function openBox () {
  //for (i = 0; hiddenBox.length; i++) {
  document.getElementById('from').style.backgroundColor = "#222";
  document.getElementById('hiding-box1').style.visibility = "visible";
//  }

}
