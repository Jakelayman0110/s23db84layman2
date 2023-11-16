var Donut = require("../models/donut");

//List of all Tables
exports.donut_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Table list");
};

//for a specific Table
exports.donut_detail = function (req, res) {
  res.send("NOTIMPLEMENTED: Donut detail: " + req.params.id);
};

// Handle Table create on POST.
exports.donut_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Table();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document.cakeFlavor = req.body.cakeFlavor;
  document.iceFlavor = req.body.iceFlavor;
  document.sprinkleAmount = req.body.sprinkleAmount;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Table delete form on DELETE.
exports.donut_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Donut delete DELETE " + req.params.id);
};
// Handle Table update form on PUT.
exports.donut_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Donut update PUT" + req.params.id);
};

// List of all Tables
exports.donut_list = async function (req, res) {
  try {
    theDonut = await Donut.find();
    res.send(theDonut);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

//VIEWS
// Handle a show all view
exports.donut_view_all_Page = async function (req, res) {
  try {
    theDonut = await Donute.find();
    res.render("donut", { title: "Donut Search Results", results: theDonut });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
