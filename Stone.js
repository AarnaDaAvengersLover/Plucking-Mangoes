class Stone{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2,
        }
        this.body=Bodies.circle(x,y,r)
        this.image=loadImage("Plucking mangoes/stone.png")
        
    }
display(){

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40);
}
}