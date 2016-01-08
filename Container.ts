class Container {
  static circles:Circle[]=[];
  enter(circle:Circle) {
     Container.circles.push(circle);
     this.guideCircle(circle);
  }
  guideCircle(circle:Circle) {

  }
}



class Circle {
  private _direction:number;
  private _cordinates:{x: number; y: number;};

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
}

class Scalar {
  constructor(private cordinates: {x: number; y: number;}) {

  }
}

var scalar = new Scalar(1,1);
