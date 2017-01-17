
// 움직이는 좌표 초기값 설정
var moveX = 0;
var moveY = 0;

//사분면 그리기
var centerX = 300;
var centerY = 200;

//i, 각도 초기값 설정
var i = 0;
var angle = 0;

//html에서 이 부분의 값을 바꿔보세요.
var init_angle;
var lenthX
var lenthY;
var changeAngleX;
var changeAngleY;
var submit;
var run;

function setup() {
  submit = select("#submit");
  submit.mousePressed(newData);
  run = select("#run");
  run.mousePressed(runData);
}

function runData() {
  createCanvas(600, 400);
  background(51);

  stroke(255);
  line(0, 200, 600, 200);
  line(300, 0, 300, 400);

  noStroke();
  fill(255, 100, 10);
  drawF(lenthX, 200, 1, 1);
}

function newData() {
  init_angle = select("#init_angle");
  lenthX = select("#lenthX");
  lenthY = select("#lenthY");
  changeAngleX = select("#changeAngleX");
  changeAngleY = select("#changeAngleY");

  console.log(init_angle.value());
  console.log(lenthX.value());
  console.log(lenthY.value());
  console.log(changeAngleX.value());
  console.log(changeAngleY.value());
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      pointB(lenthX, lenthY, changeAngleX, changeAngleY);
      drawF(lenthX, lenthY, changeAngleX, changeAngleY);
    }
  if (keyCode === RIGHT_ARROW) {
      pointB(lenthX, lenthY, changeAngleX, changeAngleY);
      drawB(lenthX, lenthY, changeAngleX, changeAngleY);
  }
}

function drawGraphB(moveX, moveY) {
  moveX = centerX + moveX;
  moveY = centerY + moveY;
  ellipse(moveX, moveY, 6, 6);
}

function drawGraphF(moveX, moveY) {
  moveX = centerX + moveX;
  moveY = centerY + moveY;
  ellipse(moveX, moveY, 5, 5);
}

function pointB(lenthX, lenthY, changeAngleX, changeAngleY) {
  for (var i = 0; i < init_angle; i++) {
    var angle = i*3.141592 / 180;

    fill(255, 100, 10);
    moveX = lenthX*cos(angle*changeAngleX);
    moveY = lenthY*sin(angle*changeAngleY);
    drawGraphB(moveX, moveY);
    console.log(moveX + "  " + moveY);
  }
}

function drawF(lenthX, lenthY, changeAngleX, changeAngleY) {
  angle = i*3.141592 / 180;
  fill(255);
  noStroke();
  moveX = lenthX*cos(angle*changeAngleX);
  moveY = lenthY*sin(angle*changeAngleY);
  drawGraphF(moveX, moveY);
  i -= 5;
  console.log(moveX + "  " + moveY);
}

function drawB(lenthX, lenthY, changeAngleX, changeAngleY) {
  angle = i*3.141592 / 180;
  fill(255);
  noStroke();
  moveX = lenthX*cos(angle*changeAngleX);
  moveY = lenthY*sin(angle*changeAngleY);
  drawGraphF(moveX, moveY);
  i += 5;
  console.log(moveX + "  " + moveY);
}
