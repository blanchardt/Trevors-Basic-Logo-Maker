const Shapes = require("../lib/shapes.js");

//create Square class that extends the Shapes class.
class Square extends Shapes{
    //give it a constructor.
    constructor(color) {
        super(color);
      }
}

Square.prototype.createShape = function () {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
}

//export the class
module.exports = Square;