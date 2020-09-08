 class Dustbins {
    constructor (x,y,height,angle,) {
        var options = {
            isStatic:true,
            'friction':0.8,
            'density':5,
        }
    
    this.body=Bodies.rectangle(x,y,20,height,angle);
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.body,angle);

    World.add(world,this.body); 
    }
display () {
    var pos=this.body.position;
    var angle=this.body.angle;
    translate(pos.x,pos.y);
    push();
    rectMode(CENTER);
    rotate(angle);
    strokeWeight(4);
    stroke("blue");
    fill("yellow");
}
}
