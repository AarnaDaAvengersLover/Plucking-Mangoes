class Tree{
    constructor(){
        this.image=loadImage("Plucking mangoes/tree.png")
    }
display(){
    imageMode(CENTER);
    image(this.image,600,450,300,500);

}
}