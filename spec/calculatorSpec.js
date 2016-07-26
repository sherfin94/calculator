
describe("Calculator", function() {
  calculator = new Calculator();
  it(" returns 5 when provided 3 and 2", function() {
    expect(calculator.add(3, 2)).toEqual(5);
  });

  it(" returns -1 when provided -3 and 2", function() {
    expect(calculator.add(-3, 2)).toEqual(-1);
  });
});
