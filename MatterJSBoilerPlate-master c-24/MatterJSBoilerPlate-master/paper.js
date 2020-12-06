class paper{
  constructor(x,y,r){
   
    var options={  
      'restituion':0.5,
      'friction':0.7,
      'density':0.3
    }
    this.body=Bodies.circle(x,y,r,options)
    this.r=r;
    World.add(world,this.body);
   }
   display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(0,0,this.r,this.r);
    pop()
  
  
  

   }
  }
 
