var express = require("express");
const donut_controller = require("../controllers/donut");
var router = express.Router();

/* GET */
router.get("/", donut_controller.donut_view_all_Page);

module.exports = router;
