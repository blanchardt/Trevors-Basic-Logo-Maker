const Square = require("../lib/square.js")

describe('Square', () => {

  describe('Square Shape ', () => {
    it('should return a green square', () => {
      const validate = new Square("green");
      const result = validate.createShape();

      expect(result).toEqual('<rect x="10" y="10" width="30" height="30" fill="green"/>');
    });
  });
});