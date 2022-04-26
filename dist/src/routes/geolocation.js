"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var geolocation_1 = require("../controllers/geolocation");
var router = express_1.Router();
router.get('/location', geolocation_1.getLocation);
router.get('/current/:city?', geolocation_1.getCurrentLocationOrCity);
router.get('/forecast/:city?', geolocation_1.getForecastCurrentLocationOrCity);
exports.default = router;
//# sourceMappingURL=geolocation.js.map