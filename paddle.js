function Paddle(side) {
    this.x = 0;
    this.y = (height - 100) / 2;

    this.height = 100;
    this.width = 20;

    this.ydir = 0;
    this.speed = 5;

    this.xbound = 20;
    this.ybound = 0;

    this.point = 0;

    if (side === 'left'){
        this.x = this.xbound;
    } else if (side === 'right') {
        this.x = width - this.xbound * 2;
    }

    this.move = function() {
        this.y += this.ydir * this.speed;
    };

    this.show = function() {
        fill(255);

        if (this.y <= this.ybound) {
            this.y = this.ybound;
        } else if (this.y >= height - (this.ybound + this.height)){
            this.y = height - (this.ybound + this.height);
        }

        rect(this.x, this.y, this.width, this.height)
    }

}