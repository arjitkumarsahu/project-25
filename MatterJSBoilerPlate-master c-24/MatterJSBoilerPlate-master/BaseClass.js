class BaseClass{
    constructor(x,y,height,width){
      var options={  
        isStatic: true          
      }     
  
        this.body=Bodies.rectangle(x,y,height,width,options)
        this.height=height;
        this.width=width;
        World.add(world,this.body);
          }
       display(){
          var pos=this.body.position;
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          fill("green");
          rect(0,0,this.width,this.height);
          pop()
       }
    }
