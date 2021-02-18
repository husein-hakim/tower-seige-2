const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
     createCanvas(800, 600)
     engine = Engine.create();
     world = engine.world;

     ground1 = new ground(290, 525, 240, 10)

     ground2 = new ground(600, 300, 170, 10)

     block1 = new block(200, 500, 30, 40)

     block2 = new block(230, 500, 30, 40)

     block3 = new block(260, 500, 30, 40)

     block4 = new block(290, 500, 30, 40)

     block5 = new block(320, 500, 30, 40)

     block6 = new block(350, 500, 30, 40)

     block7 = new block(380, 500, 30, 40)

     pink1 = new pink(230, 460, 30, 40)

     pink2 = new pink(260, 460, 30, 40)

     pink3 = new pink(290, 460, 30, 40)

     pink4 = new pink(320, 460, 30, 40)

     pink5 = new pink(350, 460, 30, 40)

     neon1 = new neon(260, 420, 30, 40)

     neon2 = new neon(290, 420, 30, 40)

     neon3 = new neon(320, 420, 30, 40)

     grey1 = new grey(290, 380, 30, 40)

     block8 = new block(540, 275, 30, 40)

     block9 = new block(570, 275, 30, 40)

     block10 = new block(600, 275, 30, 40)

     block11 = new block(630, 275, 30, 40)

     block12 = new block(660, 275, 30, 40)

     pink6 = new pink(570, 235, 30, 40)

     pink7 = new pink(600, 235, 30, 40)

     pink8 = new pink(630, 235, 30, 40)

     neon4 = new neon(600, 195, 30, 40)

     polygon1 = new polygon(60, 300, 40, 50)

     sling = new constraint(polygon1.body, {x:60, y:300})

}

function draw(){
    background(60, 46, 46)
    Engine.update(engine)

    ground1.display();

    ground2.display()

    block1.display();

    block2.display();

    block3.display();

    block4.display();

    block5.display()

    block6.display();

    block7.display();

    block8.display();

    block9.display();

    block10.display();

    block11.display();

    block12.display()

    pink1.display();

    pink2.display();

    pink3.display();

    pink4.display();

    pink5.display();

    pink6.display();

    pink7.display();

    pink8.display();

    neon1.display();

    neon2.display();

    neon3.display();

    neon4.display();

    grey1.display();

    polygon1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    if (keyCode === 32){
        sling.attach(polygon1.body)
    }
}
