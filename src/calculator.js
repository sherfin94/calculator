var calculator = {
  '+' : function add(a ,b) {
    a = parseFloat(a);
    b = parseFloat(b);

    return a + b;
  },

  '-' : function(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    return a - b;
  },

  '*' : function(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    return a * b;
  },

  '/' : function(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    return a / b;
  }
}
