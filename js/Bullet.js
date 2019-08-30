class Bullet {
     constructor(x, y, w, h) {
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
     }

     draw() {
          this.x += 7;
          pen.drawImage(media.bullet, this.x, this.y, this.w, this.h);
     }

     enemyBullet() {
          this.x -= 7;
          pen.drawImage(media.bullet, this.x, this.y, this.w, this.h);
     }
}