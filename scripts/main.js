var menuItems = document.getElementById("footer-text").getElementsByTagName("div");
var x = document.getElementById("car").innerHTML;
var hiddenBox1 = document.getElementById('hidden-box1');
var hiddenBox2 = document.getElementById('hidden-box2');
var hiddenBox3 = document.getElementById('hidden-box3');
var hiddenBox = [hiddenBox1, hiddenBox2, hiddenBox3];

var from = document.getElementById('from');
var to = document.getElementById('to');
var car = document.getElementById('car');

var close1 = document.getElementById('close-box1');
var close2 = document.getElementById('close-box2');
var close3 = document.getElementById('close-box3');

from.addEventListener("click", openBox1);

function openBox1 () {
  document.getElementById('from').style.backgroundColor = "#222";
  document.getElementById('hiding-box1').style.visibility = "visible";
};

close1.addEventListener("click", closeBox1);

function closeBox1 () {
  document.getElementById('from').style.backgroundColor = "#cccccc";
  document.getElementById('hiding-box1').style.visibility = "hidden";
};

to.addEventListener("click", openBox2);

function openBox2 () {
  document.getElementById('to').style.backgroundColor = "#222";
  document.getElementById('hiding-box2').style.visibility = "visible";
};

close2.addEventListener("click", closeBox2);

function closeBox2 () {
  document.getElementById('to').style.backgroundColor = "#cccccc";
  document.getElementById('hiding-box2').style.visibility = "hidden";
};

car.addEventListener("click", openBox3);

function openBox3 () {
  document.getElementById('car').style.backgroundColor = "#222";
  document.getElementById('hiding-box3').style.visibility = "visible";
};

close3.addEventListener("click", closeBox3);

function closeBox3 () {
  document.getElementById('car').style.backgroundColor = "#cccccc";
  document.getElementById('hiding-box3').style.visibility = "hidden";
};
