class Controller {
  constructor(x, y, l, h) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.h = h;
    this.vel = 7;
  }
  display() {
    rect(this.x, this.y, this.l, this.h);
  }
  
  right() {
    this.x += this.vel;
    if (this.x + this.l > width) this.x = width - this.l;
  }
  left() {
    this.x -= this.vel;
    if (this.x < 0) this.x = 0;
  }
  inside(x, y) {
    let dx = x - this.x
    let dy = y - this.y
    
    if (0 < dx && dx < this.l && 0 < dy && dy < this.h) return true;
    
    return false;
  }
}