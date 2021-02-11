class Cup{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.01,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y,25,35, options);
        this.width = 25
        this.height = 40
        this.image=loadImage("cu.png")
        this.visibility = 255;
        World.add(world, this.body);

      }
      display(){
        
        if(this.body.speed<7){
          var angle = this.body.angle;
        var pos= this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop()
        }
          else{
            
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5
            tint(255,this.visibility)
            pop()
          }
        
      }

      
    
}