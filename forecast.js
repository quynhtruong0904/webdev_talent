// Simple moving average and exponential weighted moving average (EWMA)

const { evaluateModel } = require("./evaluation");

function movingAverage(data, windowSize = 3) {
  let result = [];
  for (let i = 0; i < data.length - windowSize + 1; i++) {
    const subset = data.slice(i, i + windowSize);
    const avg = subset.reduce((a, b) => a + b, 0) / windowSize;
    result.push(avg);
  }
  return result;
}

function ewma(data, alpha = 0.3) {
  let result = [data[0]];
  for (let i = 1; i < data.length; i++) {
    result.push(alpha * data[i] + (1 - alpha) * result[i - 1]);
  }
  return result;
}

function generateForecast(orders) {
  const sales = orders.map(o => o.sales);
  const ma = movingAverage(sales, 3);
  const exp = ewma(sales, 0.4);

  return {
    labels: orders.map(o => o.date),
    movingAverage: ma,
    exponentialSmoothing: exp,
  };
}
const metrics = evaluateModel(sales.slice(-ma.length), ma.slice(-sales.length));
return {
  labels: orders.map(o => o.date),
  movingAverage: ma,
  exponentialSmoothing: exp,
  metrics
};

module.exports = { generateForecast };
