
describe("calculate", function() {

  beforeEach(function() {
    loadFixtures('../../../index.html');
  });


  it("it determines the chosen operation and gets the corresponding result", function() {
    console.log(document.getElementById("operationSelector"));
    document.getElementById("n1").value = -3;
    document.getElementById("n2").value = 2;
    document.getElementById("operationSelector").value = '*';
    //calculate();
    document.getElementById('mybutton').click();
    result = parseInt(document.getElementById("output").value);
    console.log(document.getElementById("output"));
    expect(result).toEqual(-6);

  })

  it("alerts the user if values are not entered", function() {
    spyOn(window, "alertUser");
    document.getElementById('mybutton').click();
    expect(window.alertUser).toHaveBeenCalled();
  })
});
