class ground{

    constructor(p,q,l,m)
    {
var order={
isStatic:true

}
        this.box=Bodies.rectangle(p,q,l,m,order);
        World.add(world,this.box);
        this.width=l
        this.height=m
    }
display(){
    stroke("lightgreen")
    strokeWeight(4)
    fill ("brown")
    rectMode(CENTER)
    rect(this.box.position.x,this.box.position.y,this.width,this.height)
}

}