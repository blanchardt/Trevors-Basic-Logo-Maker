const Triangle = require("../lib/triangle.js")

describe('Triangle', () => {

  describe('Triangle Shape ', () => {
    it('should return a orange triangle', () => {
      const validate = new Triangle("orange");
      const result = validate.createShape();

      expect(result).toEqual('<polygon points="10, 10 10, 40 25, 36 " fill="orange"/>');
    });
  });
});