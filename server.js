
const summary = require("./modules/summary");
app.get("/api/summary", (req, res) => {
  const forecastData = forecast.generateForecast(orders);
  const rfmData = rfm.segmentCustomers(orders);
  const promo = promotion.generatePromotions(orders);
  const text = summary.generateSummary(forecastData, rfmData, promo);
  res.json({ summary: text });
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// Modules
const forecast = require("./modules/forecast");
const rfm = require("./modules/rfm");
const promotion = require("./modules/promotion");
const customerCare = require("./modules/customerCare");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Load sample data
const orders = JSON.parse(fs.readFileSync("./data/sample_orders.json", "utf-8"));

// API: Forecast
app.get("/api/forecast", (req, res) => {
  const result = forecast.generateForecast(orders);
  res.json(result);
});

// API: RFM segmentation
app.get("/api/rfm", (req, res) => {
  const result = rfm.segmentCustomers(orders);
  res.json(result);
});

// API: Promotions
app.get("/api/promotions", (req, res) => {
  const result = promotion.generatePromotions(orders);
  res.json(result);
});

// API: Customer care suggestions
app.get("/api/customer-care", (req, res) => {
  const result = customerCare.getCareActions();
  res.json(result);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
