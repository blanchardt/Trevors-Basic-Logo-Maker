const Triangle = require("./triangle.js")

describe('Triangle', () => {

  describe('Triangle Shape ', () => {
    it('should return a orange triangle', () => {
      const validate = new Triangle("orange");
      const result = validate.createShape();

      expect(result).toEqual('<polygon points="10, 100 100, 100 55, 32 " fill="orange"/>');
    });
  });
});