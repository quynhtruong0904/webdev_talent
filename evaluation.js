/**
 * evaluation.js
 * Module to calculate model performance metrics:
 * - MAPE (Mean Absolute Percentage Error)
 * - MAE  (Mean Absolute Error)
 * - RMSE (Root Mean Squared Error)
 * Used to evaluate forecasting accuracy in business analytics.
 */

function mape(actual, forecast) {
  if (!actual.length || !forecast.length || actual.length !== forecast.length) return 0;
  const errors = actual.map((a, i) => Math.abs((a - forecast[i]) / a));
  return (errors.reduce((a, b) => a + b, 0) / actual.length) * 100;
}

function mae(actual, forecast) {
  if (!actual.length || !forecast.length || actual.length !== forecast.length) return 0;
  const errors = actual.map((a, i) => Math.abs(a - forecast[i]));
  return errors.reduce((a, b) => a + b, 0) / actual.length;
}

function rmse(actual, forecast) {
  if (!actual.length || !forecast.length || actual.length !== forecast.length) return 0;
  const errors = actual.map((a, i) => Math.pow(a - forecast[i], 2));
  return Math.sqrt(errors.reduce((a, b) => a + b, 0) / actual.length);
}

function evaluateModel(actual, forecast) {
  return {
    mape: parseFloat(mape(actual, forecast).toFixed(2)),
    mae: parseFloat(mae(actual, forecast).toFixed(2)),
    rmse: parseFloat(rmse(actual, forecast).toFixed(2)),
  };
}

module.exports = { evaluateModel };
