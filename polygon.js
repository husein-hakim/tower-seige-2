class polygon{
    constructor(x, y, width, height){
        var options={
            density:10
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;

        this.image = loadImage("polygon.png")

        World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y)

        rotate(this.body.angle)
        imageMode(CENTER)
        scale(0.15)
        image(this.image, 0, 0, this.r)
        pop();
    }
}