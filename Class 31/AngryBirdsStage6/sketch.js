var a = 10
console.log(a)

var b = "Shivaan"
var c = "1"
console.log(b)
console.log(c)

var d = true;
console.log(d)

var e
console.log(e)

e = null;
console.log(e)

var f = [1,2,3,4]
var g = ["hello","bye","Shivaan"]
var h = [true,false]
var i = [1,2,3,"hello","a",true]
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(f.length)
console.log(g.length)
console.log(h.length)
console.log(i.length)
console.log(i[3])

var j = [[1,2,3,4],[10,20,30,"hello","a",true],[true,false]]
console.log(j)
console.log(j.length)
console.log(j[1].length)
console.log(j[1][3])

j.push("hi")
console.log(j)

j.pop()
console.log(j)

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = "onSling"

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState != "Launch"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "Launch"
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}