const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;



function setup(){
createCanvas(1200,600)
engine=Engine.create()
world=engine.world
ground1=new ground(600,580,1200,20);
box1=new AdityaBox(730,500,100,100)
box2=new AdityaBox(730,350,100,100)
box3=new AdityaBox(950,500,100,100)
box4=new AdityaBox(950,350,100,100)
log1=new log(840,430,400)
log2=new log(840,300,400)
pig1=new pig(830,520,80,80)
pig2=new pig(830,350,80,80)
pig3=new pig(830,290,50,50)
bird1=new bird(90,240,90,90)
}
function draw(){
background("lightblue")
Engine.update(engine)
text(mouseX+"   "+mouseY,mouseX,mouseY)
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
log1.display();
log2.display();
pig1.display();
pig2.display();
pig3.display();
bird1.display();
}