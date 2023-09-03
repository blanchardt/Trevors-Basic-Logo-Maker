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
      const result = validate.shape;

      expect(result).toBeInstanceOf(Triangle);
    });
    it('should return a orange circle', () => {
        const circle = new Circle("orange");
      const validate = new Logo("svg", "blue", circle);
      const result = validate.shape;

      expect(result).toBeInstanceOf(Circle);
    });
    it('should return a green square', () => {
        const square = new Square("green");
      const validate = new Logo("svg", "blue", square);
      const result = validate.shape;

      expect(result).toBeInstanceOf(Square);
    });
  });
  describe('Logo creation', () => {
    it('should return the text that will appear in the svg file.', () => {
        const triangle = new Square("orange");
        const validate = new Logo("SVG", "blue", triangle);
        const result = validate.createFileText('<text x="60" y="70" font-size="40"');
        const expectedResult = `<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="100" fill="orange"/>
    <text x="60" y="70" font-size="40" text-anchor="middle" fill="blue">SVG</text>
</svg>`

        expect(result).toEqual(expectedResult);
    });
  });
});