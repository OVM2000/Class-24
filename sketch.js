const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var ground;
var pig1, pig2;
var log1, log2;
var bird1;

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,330,70,70);
    box2 = new Box(920,330,70,70);
    box3 = new Box(700,260,70,70);
    box4 = new Box(925,260,70,70);
    ground = new Ground(700,height,1400,30);
    pig1 = new pig(810,350);
    pig2 = new pig(810,250);
    log1 = new log(810,265,300,PI/2);
    log2 = new log(810,205,300,PI/2);
    bird1 = new bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
}