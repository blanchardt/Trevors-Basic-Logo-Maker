const Square = require("../lib/square.js")

describe('Square', () => {

  describe('Square Shape ', () => {
    it('should return a green square', () => {
      const validate = new Square("green");
      const result = validate.createShape();

      expect(result).toEqual('<circle cx="25" cy="75" r="20" fill="green"/>');
    });
  });
});