const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8;

function setup()
{
    var canvas = createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;
  

    
    box1 = new Box(300,0,50,50);
    box2 = new Box(300,0,50,100);
    box3 = new Box(300,0,70,60);
    box4 = new Box(300,0,100,40,80);
    box5 = new Box(300,0,70,20);
    box6 = new Box(300,0,25,78);
    box7 = new Box(300,0,30,30);
    box8 = new Box(300,0,100,10);
    box9 = new Box(300,0,67,35);
    box10 = new Box(300,0,80,80);
    box11 = new Box(300,0,34,86);
    box12 = new Box(300,0,67,34);
    box13 = new Box(300,0,10,80);
    box14 = new Box(300,0,30,34);
    box15 = new Box(300,0,89,65);
    box16 = new Box(300,0,40,25);
    box17 = new Box(300,0,24,77);
    box18 = new Box(300,0,50,50);
    box19 = new Box(300,0,73,46);
    box20 = new Box(300,0,89,67);
    

    ground1 = new Ground(500,420,100,20);
    ground2 = new Ground(100,490,200,20);
    ground3 = new Ground(550,540,300,20);
    ground4 = new Ground(300,590,380,20);
    ground5 = new Ground(50,380,400,20);
    ground6 = new Ground(300,260,200,20);
    ground7 = new Ground(550,180,300,20); 
    ground8 = new Ground(20,100,300,20); 
    
    
}

function draw()
{
    background(0);

    Engine.update(engine);
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();


}