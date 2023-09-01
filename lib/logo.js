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

Logo.prototype.createFileText = function () {
    var fileText = `<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${this.shape.createShape()}
    <text x="60" y="70" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>`
    return fileText;
}

//export the class
module.exports = Logo;