class Log{
constructor(x,y,width,height,angle){
    var options = {
        isStatic:false
    }
    this.body= Bodies.rectangle(x,y,width,height,angle,options)
    this.width=width;
    this.height=height;
    world.add(world,this.body);
    Matter.Body.setAngle(this.body, angle);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
}
};