//grab the required extensions.
const Logo = require("./logo.js")
const Triangle = require("./triangle.js")
const Square = require("./square.js")
const Circle = require("./circle.js")

describe('Logo', () => {

  //validate the text.
  describe('Logo Text', () => {
    it('should return the provided text', () => {
        const triangle = new Triangle("red");
      const validate = new Logo("svg", "blue", triangle);
      const result = validate.text;

      expect(result).toEqual('svg');
    });
  });

  //validate the text color.
  describe('Logo color', () => {
    it('should return the provided color', () => {
        const triangle = new Triangle("red");
      const validate = new Logo("svg", "blue", triangle);
      const result = validate.color;

      expect(result).toEqual('blue');
    });
  });

  //validate the shapes and shape colors.
  describe('Logo Shapes', () => {
    it('should return a red triangle', () => {
        const triangle = new Triangle("red");
      const validate = new Logo("svg", "blue", triangle);
      const result = validate.shape.createShape();

      expect(result).toEqual('<polygon points="10, 100 100, 100 55, 32 " fill="red"/>');
    });
    it('should return a orange circle', () => {
        const circle = new Circle("orange");
      const validate = new Logo("svg", "blue", circle);
      const result = validate.shape.createShape();

      expect(result).toEqual('<circle cx="55" cy="55" r="45" fill="orange"/>');
    });
    it('should return a green square', () => {
        const square = new Square("green");
      const validate = new Logo("svg", "blue", square);
      const result = validate.shape.createShape();

      expect(result).toEqual('<rect x="10" y="10" width="90" height="90" fill="green"/>');
    });
  });
});