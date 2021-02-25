const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13;
var box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;
var ground1, ground2, ground3;

function setup() {
    var canvas = createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400, height, 800, 20);
    ground2 = new Ground(320, 300, 230, 20);
    ground3 = new Ground(630,230,220,20);
    box1 = new Box(320, 290);
    box2 = new Box(290, 290);
    box3 = new Box(260, 290);
    box4 = new Box(230, 290);
    box5 = new Box(350, 290);
    box6 = new Box(380, 290);
    box7 = new Box(410, 290);
    box8 = new Box(320, 200);
    box9 = new Box(290, 200);
    box10 = new Box(260, 200);
    box11 = new Box(350, 200);
    box12 = new Box(380, 200);
    box13 = new Box(320, 110);
    box14 = new Box(290, 110);
    box15 = new Box(350, 110);
    box16 = new Box(320, 20);
    box17 = new Box(630, 190);
    box18 = new Box(600, 190);
    box19 = new Box(570, 190);
    box20 = new Box(660, 190);
    box21 = new Box(690, 190);
    box22 = new Box(630, 100);
    box23 = new Box(600, 100);
    box24 = new Box(660, 100);
    box25 = new Box(630, 10);
}

function draw() {
    background("black");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    fill ("lightBlue");
    box1.display();
    box2.display();  
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill ("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill ("cyan")
    box13.display();
    box14.display();
    box15.display();
    fill ("grey");
    box16.display();
    fill ("lightBlue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill ("cyan");
    box22.display();
    box23.display();
    box24.display();
    fill ("pink");
    box25.display();
}