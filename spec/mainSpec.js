
describe("calculate", function() {
  it("it determines the chosen operation and gets the corresponding result", function() {
    document.getElementById("n1").value = -3;
    document.getElementById("n2").value = 2;
    document.getElementById("operationSelector").value = '*';
    calculate();
    result = parseInt(document.getElementById("output").value);
    expect(result).toEqual(-6);

  })
});
