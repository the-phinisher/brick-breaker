class Ball {
  constructor(x, y, v, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.v = v;
    this.dy = 1;
    this.dx = 0;
  }
  
  show() {
    circle(this.x, this.y, this.d);
  }
  
  update() {
    this.x += this.v * this.dx;
    this.y += this.v * this.dy;
    if (controller.inside((this.x + this.d/2), this.y + this.d) && this.dy > 0) {
      let theta = PI * (this.x - controller.x - (controller.l/2)) / (controller.l);
      this.dy = -cos(theta);
      this.dx = sin(theta);
    }
    
    if (this.x - this.d/2 < 0 || (this.x + this.d/2) > width) {
        this.dx *= -1;
    }
    if (this.y < 0) {
        this.dy *= -1;
    }

    blocks.forEach((block) => {
        if (block.inside(this.x, this.y-this.d/2) && this.dy < 0) {
            this.dy *= -1;
            block.delete();
        } else if (block.inside(this.x-this.d/2, this.y) && this.dx < 0) {
            this.dx *= -1;
            block.delete();
        } else if (block.inside(this.x+this.d/2, this.y) && this.dx > 0) {
            this.dx *= -1;
            block.delete();
        }
    })

    if (this.y + this.d/2 > height) gameend = true;

    this.dx = this.dx / sqrt(this.dx ** 2 + this.dy ** 2);
    this.dy = this.dy / sqrt(this.dx ** 2 + this.dy ** 2);
  }
}