class Plinko{
    constructor(x, y, radius, options){
    var options = {
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
        'density' : 1.2,
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        radius = 10;
        this.body = Bodies.circle(x,y,radius,options);
    
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        ellipse(this.x, this.y, this.radius, this.height);
        pop();
          
    
      }
    };