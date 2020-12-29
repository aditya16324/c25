class bird{

    constructor(p,q,l,m)
    {

        this.box=Bodies.rectangle(p,q,l,m);
        World.add(world,this.box);
        this.width=l
        this.height=m
    }
display(){
    this.box.position.x=mouseX
    this.box.position.y=mouseY
    stroke ("blue")
    strokeWeight(2)
    fill ("red")

    rect(this.box.position.x,this.box.position.y,this.width,this.height)
}

}