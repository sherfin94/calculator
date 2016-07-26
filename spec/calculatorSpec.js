
  describe("Calculator", function() {
    describe("addition", function() {
    it(" returns 5 when 3 is added to 2", function() {
      expect(calculator['+'](3, 2)).toEqual(5);
    });



    it(" returns -1 when -3 is added to 2", function() {
      expect(calculator['+'](-3, 2)).toEqual(-1);
    });
  });

    describe("subtraction", function() {
    it("returns 5 when 10 is subtracted from 15", function() {
      expect(calculator['-'](15, 10)).toEqual(5);
    });});

    describe("multiplication", function() {
    it("returns 10 when 5 is multiplied with 2", function() {
      expect(calculator['*'](5, 2)).toEqual(10);
    });
    });

    describe("division", function() {
    it("returns 5 when 10 is divided by 2", function() {
      expect(calculator['/'](10, 2)).toEqual(5);
    });});
  });
