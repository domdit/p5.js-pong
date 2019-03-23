var start = false;

let left;
let right;
let ball;
let font;
let song;

var winCon = 5;

var fontsize = 50;

var won = false;
var rightWin = 0;
var leftWin = 0;

function preload() {
    font = loadFont("assets/ARCADE_I.TTF");
    song = loadSound("assets/wilted_polygon.mp3")
}

function setup() {
    createCanvas(700, 400);

    frameRate(120);

    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);

    left = new Paddle('left');
    right = new Paddle('right');
    ball = new Ball(0, 0)
}

function draw() {
    background(0);

    if (start === false){
        fill(255);

        textSize(fontsize);
        text("PONG", width / 2, 75);

        textSize(fontsize/2);
        text("player 1:", width / 4, 150);
        text("W = UP", width / 4 - 25, 190);
        text("S = DOWN", width / 4, 220);

        if (won === true) {
            textSize(fontsize/3);
            text(rightWin + "/" + leftWin, width / 2, 190);
        }

        textSize(fontsize/2);
        text("player 2:", width / 4 + width / 2, 150);
        text("I = UP", width / 4 + width / 2 - 25, 190);
        text("K = DOWN", width / 4 + width / 2, 220);

        textSize(fontsize/3);
        text("Press `[` and `]` to change winning score.", width / 2, 270);
        text("Points needed to win:" + winCon, width / 2, 300);

        fill(255, 255, 153);
        textSize(fontsize/2);
        text("Press ENTER to start!", width / 2, 350);

        if (keyIsDown(13)){
            start = true;
        } else if (keyIsDown(219)) {
            winCon += -1;
        } else if (keyIsDown(221)) {
            winCon += 1;
        }

        if ( winCon < 1){
            winCon = 1;
        }

    }

    if (start === true) {
        fill(255);
        textSize(fontsize);
        text(left.point, width / 2 - 50, 30);
        text(right.point, width / 2 + 50, 30);

        song.play();

        if (key === 'm' && song.isPlaying()) {
            song.stop();
        } else if (key === 'm'){
            song.start();
        }

        if (ball.serve_status === true){

            textSize(fontsize/4);
            text("Press SPACE to serve!", width / 2, height/4 + height/2);
        }

        if (keyIsDown(87)) {
            left.y -= 1 + left.speed;
        }
        if (keyIsDown(83)) {
            left.y += 1 + left.speed;
        }
        if (keyIsDown(73)) {
            right.y -= 1 + right.speed;
        }
        if (keyIsDown(75)) {
            right.y += 1 + right.speed;
        }

        left.show();
        left.move();

        right.show();
        right.move();

        ball.show();
        ball.move(left.x, left.y, left.height, right.x, right.y, right.height);

        if (right.point === winCon) {
            clear();
            background(0);
            fill(255, 255, 153);
            textSize(25);
            text("Player 2 Wins!", width / 2, height / 4);
            textSize(15);
            text("Press R to reset and play again.", width / 2, height / 4 + 50);
            if (key === 'r') {
                won = true;
                rightWin = rightWin + 1;
                start = false;
            }
        } else if (left.point === winCon) {
            clear();
            background(0);
            fill(255, 255, 153);
            textSize(25);
            text("Player 1 Wins", width / 2, height / 4);
            textSize(15);
            text("Press R to reset and play again", width / 2, height / 4 + 50);
            if (key === 'r') {
                won = true;
                leftWin = leftWin + 1;
                start = false;
            }
        }
        if (ball.x < 0) {
            right.point += 1;
            ball.newBall();
        } else if (ball.x > width) {
            left.point += 1;
            ball.newBall();
        }
    }
}

function keyPressed(){
 if (ball.serve_status === true && key === ' '){
        ball.serve();}
}

// main page press start
// rules