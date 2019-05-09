// 2D visibility
// Ray casting

let walls = [];
const walls_count = 5;
let ray;

function setup() {
    createCanvas(400, 400);
    let wall_start_x = random(width);
    let wall_start_y = random(height);
    for(let i=0; i<walls_count; i++) {
        const wall_end_x = random(width);
        const wall_end_y = random(height);
        
        walls[i] = new Boundary(wall_start_x, wall_start_y, wall_end_x, wall_end_y);
        
        wall_start_x = wall_end_x;
        wall_start_y = wall_end_y;
    }
    ray = new Ray( 100, 200, 1, 0);
}

function draw() {
    background(0);

    ray.lookAt(mouseX, mouseY);
    ray.show();

    for(let wall of walls) {
        wall.show();
        let pt = ray.cast(wall);
        if(pt) {
            stroke(255);
            noFill();
            ellipse(pt.x, pt.y, 8, 8);
        }
    }
}
