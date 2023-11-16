var express = require("express");
var router = express.Router();
// Require controller modules.
var api_controller = require("../controllers/api");
var donut_controller = require("../controllers/donut");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.apli);
/// TABLE ROUTES ///
// POST request for creating a Table
router.post("/donut", donut_controller.donut_create_post);
// DELETE request to delete Table.
router.delete("/donut/:id", donut_controller.donut_delete);
// PUT request to update Table.
router.put("/donut/:id", donut_controller.donut_update_put);
// GET request for one Table.
router.get("/donut/:id", table_controller.table_detail);
// GET request for list of all Table items.
router.get("/donut", donut_controller.donut_list);
module.exports = router;
