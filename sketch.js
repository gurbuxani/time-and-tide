function setup() {
 createCanvas(800, 800);
 angleMode(DEGREES);
}

 function draw() {
   clear();
   background('rgba(0,0,0,0)');
   translate(400, 400);
   rotate(-90);

   let currentHour = hour();
   let currentMinute = minute();
   let currentSecond = second();

// seconds arc
   strokeWeight(2);
   stroke(255);
   noFill();
   let secondAngle = map(currentSecond, 0, 60, 0, 360);
   arc(0, 0, 350, 350, 0, secondAngle);

// minutes arc
   strokeWeight(4);
   stroke(255);
   let minuteAngle = map(currentMinute, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);

// hours arc
    strokeWeight(8);
    stroke(255);
    let hourAngle = map(currentHour % 12, 0, 12, 0, 360);
    arc(0, 0, 150, 150, 0, hourAngle);

// center point
    strokeWeight(2);
    stroke(255);
    point(0, 0);

// time in text
    rotate(90);
    fill(255);
    noStroke();
    let time = doubleDigits(currentHour) + ' : ' + doubleDigits(currentMinute) + ' : ' + doubleDigits(currentSecond);
    timeWidth = textWidth(time);
    text(time, 0 - timeWidth/2, 300);
}

// convert time to two digits
function doubleDigits(n) {
  if (n < 10) {
  return '0' + n;
  } else return n;
}
