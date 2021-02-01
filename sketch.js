const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var b1, s2, s1;
var polygon, score = 0;
function preload() {
    polygonI = loadImage("polygon.png");
}
function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    //hexagon
    var wall_options = {
        isStatic: false,
        density: 0.15
    }
    polygon = Bodies.circle(220, 390, 30, wall_options);
    World.add(world, polygon);
    //constraint
    rope = new Sling(polygon, { x: 200, y: 300 });
    //supporters
    s1 = new support(600, 400);
    s2 = new support(1000, 300);
    //first layer pyramid1
    a1 = new brick1(450, 300);
    a2 = new brick1(500, 300);
    a3 = new brick1(550, 300);
    a4 = new brick1(600, 300);
    a5 = new brick1(650, 300);
    a6 = new brick1(700, 300);
    a7 = new brick1(750, 300);
    //second layer pyramid1
    aa = new brick2(550, 225);
    ab = new brick2(600, 225);
    ac = new brick2(650, 225);
    ad = new brick2(700, 225);
    ae = new brick2(500, 225);
    //third layer pyramid1
    ax = new brick3(550, 150);
    ay = new brick3(600, 150);
    az = new brick3(650, 150);
    //last layer pyramid1
    a = new brick4(600, 75);
    //first layer pyramid2
    za = new brick1(900, 225);
    zb = new brick1(950, 225);
    zc = new brick1(1000, 225);
    zd = new brick1(1050, 225);
    ze = new brick1(1100, 225);
    //second layer pyramid2
    zx = new brick3(950, 150);
    zy = new brick3(1000, 150);
    zz = new brick3(1050, 150);
    //last layer pyramid2
    z = new brick2(1000, 75);
    
}
function draw() {
    
    console.log(score);
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    
    imageMode(CENTER);
    image(polygonI, polygon.position.x, polygon.position.y, 60, 60);
    drawSprites();
    rope.display();

    s1.display();
    s2.display();

    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
    a6.display();
    a7.display();
    a1.score();
    a2.score();
    a3.score();
    a4.score();
    a5.score();
    a6.score();
    a7.score();

    aa.display();
    ab.display();
    ac.display();
    ad.display();
    ae.display();
    aa.score();
    ab.score();
    ac.score();
    ad.score();
    ae.score();

    ax.display();
    ay.display();
    az.display();
    ax.score();
    ay.score();
    az.score();

    a.display();
    a.score();

    za.display();
    zb.display();
    zc.display();
    zd.display();
    ze.display();
    za.score();
    zb.score();
    zc.score();
    zd.score();
    ze.score();

    zx.display();
    zy.display();
    zz.display();
    zx.score();
    zy.score();
    zz.score();

    z.display();
    z.score();
    text("score: ", + score, 200, 100);
}
function mouseDragged() {
    Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
    rope.fly();
}
function keyPressed() {
    if (keyCode == 32) {
        rope.attach(polygon);
    }
}