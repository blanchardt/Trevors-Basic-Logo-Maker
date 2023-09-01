const Circle = require("./circle.js")

describe('Circle', () => {

  describe('Circle Shape ', () => {
    it('should return a red circle', () => {
      const validate = new Circle("red");
      const result = validate.createShape();

      expect(result).toEqual('<circle cx="60" cy="60" r="50" fill="red"/>');
    });
  });
});