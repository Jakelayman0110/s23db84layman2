var Donut = require("../models/donut");

//List of all Donuts
exports.donut_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Donut list");
};

// for a specific Donut
exports.donut_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Donut.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle Donut create on POST.
exports.donut_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Donut();
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

// Handle Donut delete on DELETE.
exports.donut_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Costume.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle Costume update form on PUT.
exports.donut_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Donut.findById(req.params.id);
    // Do updates of properties
    if (req.body.donut_type) toUpdate.donut_type = req.body.donut_type;
    if (req.body.cost) toUpdate.cost = req.body.cost;
    if (req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
  }
};

// List of all Donuts
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
// Handle a show one view with id specified by query
exports.costume_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
    result = await Costume.findById(req.query.id);
    res.render("costumedetail", { title: "Costume Detail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
