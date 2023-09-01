//import Shapes class.
const Shapes = require("./shapes.js");

//create Triangle class that extends the Shapes class.
class Triangle extends Shapes{
    //give it a constructor.
    constructor(color) {
        super(color);
      }
}

//create a method that returns a tag that creates the shape.
Triangle.prototype.createShape = function () {
    return `<polygon points="10, 100 100, 100 55, 32 " fill="${this.color}"/>`
}

//export the class
module.exports = Triangle;