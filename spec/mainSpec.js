
describe("calculate", function() {

  beforeEach(function() {

    $form = affix('form[name="myform"]');
    $form.affix('input[id="n1"]');
    $form.affix('input[id="n2"]');
    $select = $form.affix('select[id="operationSelector"]');
    $select.affix('option[value="+"]');
    $select.affix('option[value="-"]');
    $select.affix('option[value="*"]');
    $form.affix('button[id="mybutton"][type="button"][onClick=calculate()]');
    $form.affix('input[id="output"][type="number"]');
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
});
