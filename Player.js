class Player {

constructor(x,y,width,height); {

var options = {

    isStatic: false
};



this.body - Bodies.rectangle(x,y,width,height, options);
this.width = width;
this.height = height;
this.image - loadImage("/.assests/player.png");






World.add(world,body);

}