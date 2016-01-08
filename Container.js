var Container = (function () {
    function Container() {
    }
    Container.prototype.enter = function (circle) {
        Container.circles.push(circle);
        this.guideCircle(circle);
    };
    Container.prototype.guideCircle = function (circle) {
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
    return Circle;
}());
var Scalar = (function () {
    function Scalar(cordinates) {
        this.cordinates = cordinates;
    }
    return Scalar;
}());
var scalar = new Scalar(1, 1);
