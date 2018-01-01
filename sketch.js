function setup() {
 createCanvas(800, 800);
 angleMode(DEGREES);
 }

 function draw() {
   clear();
   background('rgba(0,0,0,0)');
   translate(400, 400);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();

// seconds arc
   strokeWeight(2);
   stroke(255);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 350, 350, 0, secondAngle);

// minutes arc
   strokeWeight(4);
   stroke(255);
   let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);

// hours arc
    strokeWeight(8);
    stroke(255);
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 150, 150, 0, hourAngle);

// center point
    strokeWeight(2);
    stroke(255);
    point(0, 0);

// time in text
    rotate(90);
    fill(255);
    noStroke();
    if (hr > 9 && mn > 9 && sc > 9) {
      text(hr + ' : ' + mn + ' : ' + sc, 5, 400);
    } else if (hr < 10) {
      text('0' + hr + ' : ' + mn + ' : ' + sc, 5, 400);
    } else if (mn < 10) {
      text(hr + ' : ' + '0' + mn + ' : ' + sc, 5, 400);
    } else if (sc < 10) {
      text(hr + ' : ' + mn + ' : ' + '0' + sc, 5, 400);
    }
}
