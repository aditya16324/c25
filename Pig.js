class pig{

    constructor(p,q,l,m)
    {

        this.box=Bodies.rectangle(p,q,l,m);
        World.add(world,this.box);
        this.width=l
        this.height=m
    }
display(){
    stroke ("pink")
    strokeWeight(2)
    fill ("green")

    rect(this.box.position.x,this.box.position.y,this.width,this.height)
}

}