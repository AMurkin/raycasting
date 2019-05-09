class Particle {
    constructor() {
        this.pos = createVector(0, 0);
        this.rays = [];
        for(let a=0; a<360; a+=2) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    setPos(pos) {
        this.pos = pos;
        for(let ray of this.rays) {
            ray.setPos(this.pos);
        }
    }

    look(walls) {
        stroke(255, 100);
        for(let ray of this.rays) {
            let rel_dist = Infinity;
            let closest = null;
            for(let wall of walls) {
                const pt = ray.cast(wall);
                if(pt) {
                    if(pt.u < rel_dist) {
                        closest = createVector(pt.x, pt.y);
                        rel_dist = pt.u;
                    }
                }
            }
            if(closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    show() {
        noFill();
        stroke(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, 10);
    }
}