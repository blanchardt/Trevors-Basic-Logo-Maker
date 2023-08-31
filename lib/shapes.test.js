//import with require method the shapes class
const Shapes = require("../lib/shapes.js")

describe('Shapes', () => {

  describe('Shape Color', () => {
    it('should return blue when the shape\'s color is inputted to be blue', () => {
      const validate = new Shapes("blue");
      const result = validate.color;

      expect(result).toEqual("blue");
    });
  });
});