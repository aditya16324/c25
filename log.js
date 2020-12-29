class log{

    constructor(p,q,l)
    {

        this.box=Bodies.rectangle(p,q,l,20);
        World.add(world,this.box);
        this.width=l
        
    }
display(){
    stroke ("black")
    strokeWeight(2)
    fill ("yellow")

    rect(this.box.position.x,this.box.position.y,this.width,20)
}

}