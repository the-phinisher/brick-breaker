class Block {
  constructor(x, y, l, w) {
    this.exists = true;
    this.x = x
    this.y = y
    this.l = l;
    this.w = w;
    this.speed = 20;
  }

  display() {
    if (this.exists) rect(this.x, this.y, this.l, this.w);
  }
  
  delete() {
    this.exists = false;
  }
  
  inside(x, y) {
    if (!this.exists) return false;
    let dx = x - this.x
    let dy = y - this.y
    if (0 < dx && dx < this.l && 0 < dy && dy < this.w) return true;
    
    return false;
  }
}