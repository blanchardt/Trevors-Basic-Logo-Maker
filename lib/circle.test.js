const Circle = require("../lib/circle.js")

describe('Circle', () => {

  describe('Circle Shape ', () => {
    it('should return a red circle', () => {
      const validate = new Circle("red");
      const result = validate.createShape();

      expect(result).toEqual('<circle cx="25" cy="75" r="20" fill="red"/>');
    });
  });
});