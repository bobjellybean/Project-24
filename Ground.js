 class Ground {

    constructor(x,y,height,angle) {
        var options ={
            isStatic:true,
            'friction': 0.8,
            'density':5
        }
    var body= this.Bodies.rectangle(x,y,20,height,angle);
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.body,angle);

    World.add(World,this.body);
    }
display () {
    var pos= this.body.position;
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("red");
}
}