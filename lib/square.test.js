const Square = require("./square.js")

describe('Square', () => {

  describe('Square Shape ', () => {
    it('should return a green square', () => {
      const validate = new Square("green");
      const result = validate.createShape();

      expect(result).toEqual('<rect x="10" y="10" width="90" height="90" fill="green"/>');
    });
  });
});