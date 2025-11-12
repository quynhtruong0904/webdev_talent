const express = require("express");
const router = express.Router();

const forecast = require("../modules/forecast");
const rfm = require("../modules/rfm");
const promotion = require("../modules/promotion");
const customerCare = require("../modules/customerCare");
const { readJSON } = require("../modules/utils");

router.get("/forecast", (req, res) => {
  const data = readJSON("./data/sample_orders.json");
  res.json(forecast.generateForecast(data));
});

router.get("/rfm", (req, res) => {
  const data = readJSON("./data/sample_orders.json");
  res.json(rfm.segmentCustomers(data));
});

router.get("/promotions", (req, res) => {
  const data = readJSON("./data/sample_orders.json");
  res.json(promotion.generatePromotions(data));
});

router.get("/customer-care", (req, res) => {
  res.json(customerCare.getCareActions());
});

module.exports = router;
