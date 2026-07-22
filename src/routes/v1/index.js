const express = require("express");

const {InfoController} = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const {cityMiddlewares} = require("../../middlewares");
const airportRoutes = require("./airport-routes");
const router = express.Router();
const flightRoutes = require("./flight-routes");

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes);

router.get('/info', InfoController.info);

module.exports = router;