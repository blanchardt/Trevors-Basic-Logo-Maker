//import Shapes class.
const Shapes = require("./shapes.js");

//create Circle class that extends the Shapes class.
class Circle extends Shapes{
    //give it a constructor.
    constructor(color) {
        super(color);
      }
}

//create a method that returns a tag that creates the shape.
Circle.prototype.createShape = function () {
    return `<circle cx="55" cy="55" r="45" fill="${this.color}"/>`
}

//export the class
module.exports = Circle;