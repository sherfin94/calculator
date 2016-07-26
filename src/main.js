
function alertUser() {
  alert("You have to enter values in input boxes");
}

function calculate() {
  var operation = document.getElementById('operationSelector').value;
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;

  if(n1 == "" || n2 == "") {
    alertUser();
  }

  var result = calculator[operation](n1, n2);
  document.getElementById('output').value = result;
}
