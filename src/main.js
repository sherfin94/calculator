
var calculator = new Calculator();

function getSum() {
  var formData = new FormData(document.querySelector('form'));
  var result = calculator.add(formData.get('number1'), formData.get('number2'));
  document.getElementById('output').value = result;
}
