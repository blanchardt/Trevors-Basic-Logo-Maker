//import all shape classes.
const Shapes = require("../lib/shapes.js");
const Triangle = require("../lib/triangle.js");
const Square = require("../lib/square.js");
const Circle = require("../lib/circle.js");

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