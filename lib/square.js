//import Shapes class.
const Shapes = require("./shapes.js");

//create Square class that extends the Shapes class.
class Square extends Shapes{
    //give it a constructor.
    constructor(color) {
        super(color);
      }
}

//create a method that returns a tag that creates the shape.
Square.prototype.createShape = function () {
    return `<rect x="10" y="10" width="100" height="100" fill="${this.color}"/>`
}

//export the class
module.exports = Square;