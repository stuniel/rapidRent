// Date variables
var d = new Date();
var month = ["0", "January", "February", "March", "April", "May", "June", "July", "August", "October", "November", "December"]

var currentDateFrom = document.getElementById('current-date-from');
var currentDateTo = document.getElementById('current-date-to');
currentDateFrom.innerHTML = month[d.getMonth()];
currentDateTo.innerHTML = month[d.getMonth()];


var clickedDaysFrom = [];
var clickedDaysTo = [];
var clickedCars = [];

var menuItems = document.getElementById("footer-text").getElementsByTagName("div");
var x = document.getElementById("car").innerHTML;
var hiddenBox1 = document.getElementById('hidden-box1');
var hiddenBox2 = document.getElementById('hidden-box2');
var hiddenBox3 = document.getElementById('hidden-box3');
var hiddenBox = [hiddenBox1, hiddenBox2, hiddenBox3];

var menuList = document.getElementById('menu-ul').getElementsByTagName('li');

var from = document.getElementById('from');
var to = document.getElementById('to');
var car = document.getElementById('car');
var rent = document.getElementById('rent');

var close1 = document.getElementById('close-box1');
var close2 = document.getElementById('close-box2');
var close3 = document.getElementById('close-box3');

from.addEventListener("mouseover", changeColor);
from.addEventListener("mouseout", returnColor);

to.addEventListener("mouseover", changeColor);
to.addEventListener("mouseout", returnColor);

car.addEventListener("mouseover", changeColor);
car.addEventListener("mouseout", returnColor);

// Open the box FROM

from.addEventListener("click", openBox1);

function openBox1 () {
  document.getElementById('from').style.backgroundColor = "#222";
  animateBox (150, -300, -10, 'hiding-box1');
};

// Close the box FROM

close1.addEventListener("click", closeBox1);

function closeBox1 () {
  animateBox (-300, 150, 10, 'hiding-box1')
};

// Open the box TO

to.addEventListener("click", openBox2);

function openBox2 () {
  document.getElementById('to').style.backgroundColor = "#222";
  animateBox (150, -300, -10, 'hiding-box2');
};

// Close the box TO

close2.addEventListener("click", closeBox2);

function closeBox2 () {
  animateBox (-300, 150, 10, 'hiding-box2');
  document.getElementById('to').style.backgroundColor = "#cccccc";
};

// Open the box CAR

car.addEventListener("click", openBox3);

function openBox3 () {
  document.getElementById('car').style.backgroundColor = "#222";
  animateBox (150, -300, -10, 'hiding-box3');
};

// Close the box CAR

close3.addEventListener("click", closeBox3);

function closeBox3 () {
  animateBox (-300, 150, 10, 'hiding-box3')
  document.getElementById('car').style.backgroundColor = "#cccccc";
};

// Change the color of the Tab when the mouse is over

function changeColor () {
  this.style.backgroundColor = "#222";
  this.style.color = "#FFF";
}

function returnColor () {
  this.style.backgroundColor = "#cccccc";
  this.style.color = "#000";
}

// Choose the date in the calendar

var date1 = document.getElementById("choose-date-from").getElementsByTagName("li");
var date2 = document.getElementById("choose-date-to").getElementsByTagName("li");
var car1 = document.getElementById("choose-car").getElementsByTagName("li");

// Enables to click the date in the calendar

for (i = 0; i < date1.length; i++) {
  var dateFrom = date1[i];
  dateFrom.addEventListener("click", chooseDateFrom);
}

function chooseDateFrom () {
  // Removes active from other dates
  for (i = 0; i < date1.length; i++) {
    var dateFrom = date1[i];
    dateFrom.classList.remove("active");
  }
  this.classList.add("active");
  // Adds active element to the clickedDaysFrom array
  clickedDaysFrom.push(this.innerHTML);
  document.getElementById('to').style.backgroundColor = "#222";
  animateBox (150, -300, -10, 'hiding-box2');
};

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
  // Adds active element to the clickedDaysTo array
  clickedDaysTo.push(this.innerHTML);
  document.getElementById('car').style.backgroundColor = "#222";
  animateBox (150, -300, -10, 'hiding-box3');

};

// Enables to click the car

for (i = 0; i < car1.length; i++) {
  var carType = car1[i];
  carType.addEventListener("click", chooseCarType);
}

function chooseCarType () {
  // Removes active from other dates
  for (i = 0; i < car1.length; i++) {
    var carType = car1[i];
    carType.classList.remove("active");
  }
  this.classList.add("active");
  // Adds active element to the clickedCars array
  clickedCars.push(this.innerHTML);
  document.getElementById('rent').style.backgroundColor = "#222";
  //animateBox (150, -300, -10, 'hiding-box2');
};

// Returns clickedDaysFrom, clickedDaysTo and clickedCars

rent.addEventListener("click", showForm);

function showForm () {
  alert("From: " + clickedDaysFrom[clickedDaysFrom.length - 1] +
  ". To: " + clickedDaysTo[clickedDaysTo.length - 1] +
  ". Car: " + clickedCars[clickedCars.length - 1]) + ".";
};

// Start animations

document.getElementById('header').style.top = -200 + 'px';

//setTimeout(animateBox(-200, 0, 2, 'header'), 1000);

setTimeout(function animateBox (start, stop, step, element) {
  var y = -200;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == 0) {
      clearInterval(id);
    }
    else {
      y = y + 2;
      document.getElementById('header').style.top = y + 'px';
    }
  };
}, 1000);

// Functions

// Animates the box opening

function animateBox (start, stop, step, element) {
  var y = start;
  var id = setInterval(frame, 5);
  function frame() {
    if (y == stop) {
      clearInterval(id);
    }
    else {
      y = y + step;
      document.getElementById(element).style.top = y + 'px';
    }
  };
};
