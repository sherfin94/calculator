
function calculate() {
  var operation = document.getElementById('operationSelector').value;
  var formData = new FormData(document.querySelector('form'));
  var result = calculator[operation](formData.get('number1'), formData.get('number2'));
  document.getElementById('output').value = result;
}
