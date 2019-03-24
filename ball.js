PI = Math.PI;

function Ball(){
    this.x = width / 2;
    this.y = height / 2;

    this.speed = 5;
    this.bSpeed = 1.3;

    this.rad = 5;

    this.rand1 = random(255);
    this.rand2 = random(255);
    this.rand3 = random(255);

    this.relIntersect = 0;
    this.normalize = 0;
    this.maxBounce = (5 * PI / 15); //60 degrees
    this.bounce = 0;
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

        if (this.x > rightX - this.rad && this.y > rightY - this.rad && this.y < (rightY+rightHeight) - this.rad) {

            if (this.y <= 0) {
                this.ydir = 0.4384695699875518;
            }

            this.relIntersect = rightY + (rightHeight / 2) - this.y;
            this.normalizeRelIntersect = this.relIntersect / (rightHeight/2);
            this.bounce = this.normalizeRelIntersect * this.maxBounce;


            this.xdir = this.bSpeed * -Math.cos(this.bounce);
            this.ydir = this.bSpeed * -Math.sin(this.bounce);

        } else if (this.x <= leftX + 30 - this.rad && this.y > leftY - this.rad && this.y < (leftY+leftHeight) - this.rad) {

            this.relIntersect = leftY + (leftHeight / 2) - this.y;
            this.normalizeRelIntersect = this.relIntersect / (leftHeight/2);
            this.bounce = this.normalizeRelIntersect * this.maxBounce;


            this.xdir = this.bSpeed * Math.cos(this.bounce);
            this.ydir = this.bSpeed * -Math.sin(this.bounce);

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
            randx = 1;
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