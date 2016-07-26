
function calculate() {
  var operation = document.getElementById('operationSelector').value;

  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var result = calculator[operation](n1, n2);
  document.getElementById('output').value = result;
}
