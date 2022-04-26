"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var geolocation_1 = require("../controllers/geolocation");
exports.router = express_1.Router();
exports.router.get('', function (req, res) {
    res.status(200).json({ status: "running" });
});
exports.router.get('/location', geolocation_1.getLocation);
exports.router.get('/current/:city?', geolocation_1.getCurrentLocationOrCity);
exports.router.get('/forecast/:city?', geolocation_1.getForecastCurrentLocationOrCity);
exports.default = exports.router;
//# sourceMappingURL=geolocation.js.map