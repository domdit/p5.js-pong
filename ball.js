function Ball(){
    this.x = width / 2;
    this.y = height / 2;

    this.speed = 5;

    this.rad = 5;

    this.rand1 = random(255);
    this.rand2 = random(255);
    this.rand3 = random(255);

    this.xdir = 0;
    this.ydir = 0;

    this.serve_status = true;

    this.show = function() {
        fill(this.rand1, this.rand2, this.rand3);
        ellipse(this.x, this.y, this.rad*2, this.rad*2);
    };

    this.move = function(leftX, leftY, leftHeight, rightX, rightY, rightHeight) {

        this.x += this.speed * this.xdir;
        this.y += this.speed * this.ydir;

        if (this.x > rightX - this.rad && this.y > rightY - this.rad && this.y < (rightY+rightHeight) - this.rad ||
            this.x <= leftX + 30 - this.rad && this.y > leftY - this.rad && this.y < (leftY+leftHeight) - this.rad) {
            this.xdir *= -1;
            this.speed += random(0,0.005);
        } else if (this.y > height - this.rad || this.y < this.rad) {
            this.ydir *= -1;}
            this.speed += random(0,0.005);

    };

    this.serve = function() {

        randx = floor(random(0, 2));
        randy = random(-1, 1);

        if (randx === 0){
            randx = -1;
        } else {
            randx === 1;
        }

        console.log(randx, randy);

        this.xdir = randx;
        this.ydir = randy * 1.5;

        this.serve_status = false;
    };

    this.newBall = function(){
        this.x = width / 2;
        this.y = height / 2;

        this.rand1 = random(255);
        this.rand2 = random(255);
        this.rand3 = random(255);

        this.xdir = 0;
        this.ydir = 0;
        this.serve_status = true;

        this.speed = 5;

    }
}