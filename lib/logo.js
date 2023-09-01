//import all shape classes.
const Shapes = require("./shapes.js");
const Triangle = require("./triangle.js");
const Square = require("./square.js");
const Circle = require("./circle.js");

//create logo class
class Logo {
    //give it a constructor.
    constructor(text, color, shape, ) {
        this.text = text;
        this.color = color;
        this.shape = shape;
      }
}

//export the class
module.exports = Logo;