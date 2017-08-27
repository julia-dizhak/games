var Car = function(x,y) {
  this.x = x;
  this.y = y;
  this.speed = 150;
  this.draw();
}

Car.prototype.draw = function() {
  // var carHtml = '<img src="https://nostarch.com/images/car.png">';
  var carHtml = '<img src="https://www.tesla.com/sites/default/files/configurator/MODELS_20170817090013/1440/STUD_3QTR/ms_mi01_stud_3qtr_pbsb.png">';

  this.carElement = $(carHtml);

  this.carElement.css({
    position: 'absolute',
    width: '200',
    left: this.x,
    top: this.y
  });

  $('body').append(this.carElement);
};

Car.prototype.moveRight = function(distance) {
  this.x += distance;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

Car.prototype.moveLeft = function(distance) {
  this.x -= distance;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

Car.prototype.moveUp = function(distance) {
  this.x -= distance;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

Car.prototype.moveDown = function(distance) {
  this.x += distance;

  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

var tesla = new Car(150, 150);
var nissan = new Car(250, 250);

setInterval(function () {
  tesla.moveRight(Math.random() * 5);
  nissan.moveRight(Math.random() * 5);
}, 30);
