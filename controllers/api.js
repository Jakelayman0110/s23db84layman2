//API
exports.apli = function (req, res) {
  res.write("[");
  res.write('{"resource":"Donut", ');
  res.write(' "verbs":["GET","PUT", "DELETE"] ');
  res.write("}");
  res.write("]");
  res.send();
};
