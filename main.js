// 2D visibility
// Ray casting

let walls = [];
const walls_count = 5;
let particle;
let noise_off;

function setup() {
    createCanvas(400, 400);

    noise_off = createVector(random()*1000, random()*1000);

    let wall_start_x = random(width);
    let wall_start_y = random(height);
    for(let i=0; i<walls_count; i++) {
        const wall_end_x = random(width);
        const wall_end_y = random(height);
        
        walls[i] = new Boundary(wall_start_x, wall_start_y, wall_end_x, wall_end_y);
        
        wall_start_x = wall_end_x;
        wall_start_y = wall_end_y;
    }
    particle = new Particle();
}

function draw() {
    background(0);

    particle.setPos(createVector(noise(noise_off.x)*width, noise(noise_off.y)*height));
    particle.show();
    particle.look(walls);

    for(let wall of walls) {
        wall.show();
    }

    noise_off.add(0.01, 0.01);
}
