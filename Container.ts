// TODO pattern for draw

class Container {
  static circles:Circle[]=[];
  enter(circle:Circle) {
     Container.circles.push(circle);
     this.guideCircle(circle);
  }
  guideCircle(circle:Circle) :void{
    circle.direction =this.getRandomNumber(180);
    circle.cordinates={x:0,y:50};
  }

  getRandomNumber(maxNumber:number) :number{
    return Math.ceil(Math.random()*maxNumber);
  }

  drawCircles() :void{
    for (let i = 0; i < Container.circles.length; i++) {
        var cordinates = Container.circles[i].cordinates;
        // del old circle? or clear background?
        // paint new circle?
    }
  }
}

class Circle {
  private _direction:number;
  private _cordinates:{x: number; y: number;};
  private _speed:number;

  get direction():number {
    return this._direction;
  }

  set direction(direction:number) {
    this._direction = direction;
  }

  get cordinates():{x: number; y: number;} {
    return this._cordinates;
  }

  set cordinates(cordinates:{x: number; y: number;}) {
    this._cordinates = cordinates;
  }

  get speed():number {
    return this._speed;
  }

  set speed(speed:number) {
    this._speed = speed;
  }

  private updateCordinates():void {

  }
}

var container = new Container();
var circle = new Circle();
container.enter(circle);
