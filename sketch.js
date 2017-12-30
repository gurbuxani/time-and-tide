// var cnv;

function setup() {
  createCanvas(800, 800);
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // cnv.position(x, y);
  angleMode(DEGREES);
 }

 function draw() {
   background('rgba(0%,0%,0%,0)');

   // rotate(secondAngle);
   // image(watch, 0, 0);
   translate(400, 400);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();

   strokeWeight(2);
   stroke(255);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 350, 350, 0, secondAngle);
     // if (sc === 60) {
     //   pop();
     // }

   strokeWeight(4);
   stroke(255);
   let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);

   strokeWeight(8);
   stroke(255);
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   arc(0, 0, 150, 150, 0, hourAngle);

   // push();
   // rotate(secondAngle);
   // stroke(255, 100, 150);
   // //line(0, 0, 155, 0);
   // pop();
   //
   // push();
   // rotate(minuteAngle);
   // stroke(150, 100, 255);
   // //line(0, 0, 140, 0);
   // pop();
   //
   // push();
   // rotate(hourAngle);
   // stroke(150, 255, 100);
   // //line(0, 0, 125, 0);
   // pop();

   stroke(255);
   point(0, 0);

   // push();
   // // translate(watch / 2, watch / 2);
   // rotate(secondAngle);
   // image(watch, 0, 0);
   // pop();

   //  fill(255);
   //  noStroke();
   //  text(hr + ':' + mn + ':' + sc, 10, 200);


}
