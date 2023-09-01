//import Shapes class.
const Shapes = require("../lib/shapes.js");

//create Square class that extends the Shapes class.
class Triangle extends Shapes{
    //give it a constructor.
    constructor(color) {
        super(color);
      }
}

Triangle.prototype.createShape = function () {
    return `<polygon points="10, 10 10, 40 25, 36 " fill="${this.color}"/>`
}

//export the class
module.exports = Triangle;