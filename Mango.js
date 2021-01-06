class Mango{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body=Bodies.circle(x,y,r);
        this.image=loadImage("Plucking mangoes/mango.png");
        

    }

display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,20,20);

}
}