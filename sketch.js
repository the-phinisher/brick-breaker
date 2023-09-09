let NBLOCKS = 65;
let blocks = [];
let controller, ball;
let gameend = false;

function setup() {
    stroke(255);
    console.log("Setup invoked")
  createCanvas(window.innerWidth, window.innerHeight);
  // Create object
  blocks = [];
  for(let i = 0; i < NBLOCKS; i++) {
    blocks[i] = new Block(width*(i%13)/13, height*(int(i / 13)) / 26, width/13, height/26);
  }
  controller = new Controller(3 * window.innerWidth/8, 39 * window.innerHeight/40, window.innerWidth/4, window.innerWidth/40);
  ball = new Ball(window.innerWidth/2, window.innerHeight/2, 5, 10);
  gameend = false;
}

let colors = ["red", "orange", "yellow", "green", "blue"]

function draw() {
    if (gameend) {
        document.getElementsByClassName("game-end")[0].style.visibility = "visible";
        if (keyIsDown(32)) setup();
        return 0;
    }
  background(54);
  document.getElementsByClassName("game-end")[0].style.visibility = "hidden";
  if (keyIsDown(LEFT_ARROW)) controller.left();
  if (keyIsDown(RIGHT_ARROW)) controller.right();
  blocks.forEach((block, i) => {
    fill(colors[int(i/13)]);
    block.display();
  })
  fill(255);
  controller.display();
  ball.show();
  ball.update();
}