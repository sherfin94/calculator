
describe("output box", function() {
  it("will contain the value -1 when -3 is added with 2", function() {
    document.getElementById("n1").value = -3;
    document.getElementById("n2").value = 2;
    getSum();
    result = parseInt(document.getElementById("output").value);
    expect(result).toEqual(-1);
  });
});
