var Container = (function () {
    function Container() {
    }
    Container.prototype.enter = function (circle) {
        Container.circles.push(circle);
        this.guideCircle(circle);
    };
    Container.prototype.guideCircle = function (circle) {
        circle.direction = this.getRandomNumber(180);
        circle.cordinates = { x: 0, y: 50 };
    };
    Container.prototype.getRandomNumber = function (maxNumber) {
        return Math.ceil(Math.random() * maxNumber);
    };
    Container.prototype.drawCircles = function () {
        for (var i = 0; i < Container.circles.length; i++) {
            var cordinates = Container.circles[i].cordinates;
        }
    };
    Container.circles = [];
    return Container;
}());
var Circle = (function () {
    function Circle() {
    }
    Object.defineProperty(Circle.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "cordinates", {
        get: function () {
            return this._cordinates;
        },
        set: function (cordinates) {
            this._cordinates = cordinates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            this._speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.updateCordinates = function () {
    };
    return Circle;
}());
var container = new Container();
var circle = new Circle();
container.enter(circle);
