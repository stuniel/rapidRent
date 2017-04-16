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

from.addEventListener("mouseover", changeColor);
from.addEventListener("mouseout", returnColor);

to.addEventListener("mouseover", changeColor);
to.addEventListener("mouseout", returnColor);

from.addEventListener("click", openBox1);


function openBox1 () {
  document.getElementById('from').style.backgroundColor = "#222";
  var y = 150;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == -300) {
      clearInterval(id);
    }
    else {
      y = y - 10;
      document.getElementById('hiding-box1').style.top = y + 'px';
    }
  };
};

close1.addEventListener("click", closeBox1);

function closeBox1 () {
  var y = -300;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == 150) {
      clearInterval(id);
      document.getElementById('from').style.backgroundColor = "#cccccc";
    }
    else {
      y = y + 10;
      document.getElementById('hiding-box1').style.top = y + 'px';
    }
  };
};

to.addEventListener("click", openBox2);

function openBox2 () {
  document.getElementById('to').style.backgroundColor = "#222";
  var y = 150;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == -300) {
      clearInterval(id);
    }
    else {
      y = y - 10;
      document.getElementById('hiding-box2').style.top = y + 'px';
    }
  };
};

close2.addEventListener("click", closeBox2);

function closeBox2 () {

  var y = -300;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == 150) {
      clearInterval(id);
      document.getElementById('to').style.backgroundColor = "#cccccc";
    }
    else {
      y = y + 10;
      document.getElementById('hiding-box2').style.top = y + 'px';
    }
  };
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

function changeColor () {
  this.style.backgroundColor = "#222";
  this.style.color = "#FFF";
}

function returnColor () {
  this.style.backgroundColor = "#cccccc";
  this.style.color = "#000";
}

var date1 = document.getElementById("choose-date-from").getElementsByTagName("li");

for (i = 0; i < date1.length; i++) {
  var dateFrom = date1[i];
  dateFrom.addEventListener("click", chooseDateFrom);
}

function chooseDateFrom () {
  for (i = 0; i < date1.length; i++) {
    var dateFrom = date1[i];
    dateFrom.classList.remove("active");
  }
  this.classList.add("active");
  document.getElementById('to').style.backgroundColor = "#222";
  var y = 150;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == -300) {
      clearInterval(id);
    }
    else {
      y = y - 10;
      document.getElementById('hiding-box2').style.top = y + 'px';
    }
  };
}

var date2 = document.getElementById("choose-date-to").getElementsByTagName("li");

for (i = 0; i < date2.length; i++) {
  var dateTo = date2[i];
  dateTo.addEventListener("click", chooseDateTo);
}

function chooseDateTo () {
  for (i = 0; i < date2.length; i++) {
    var dateTo = date2[i];
    dateTo.classList.remove("active");
  }
  this.classList.add("active");
  document.getElementById('car').style.backgroundColor = "#222";
  document.getElementById('hiding-box3').style.visibility = "visible";
}
