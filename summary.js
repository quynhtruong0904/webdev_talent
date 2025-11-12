/**
 * summary.js
 * AI-powered Recommendation Engine (simulated)
 * Generates text-based business insights for SME e-commerce operations
 */

function generateSummary(forecast, rfmData, promotion) {
  // Basic statistics
  const avgForecast = forecast.movingAverage.reduce((a, b) => a + b, 0) / forecast.movingAverage.length;
  const loyalCount = rfmData.filter(c => c.segment === "Loyal").length;
  const potentialCount = rfmData.filter(c => c.segment === "Potential").length;
  const lowCount = rfmData.filter(c => c.segment === "Low-value").length;

  let insight = `
 **AI Summary Report for SME E-commerce Platform**

**Sales Forecast Insight**
- The short-term predicted sales average is approximately ${avgForecast.toFixed(2)} units/day.
- ${forecast.metrics.mape < 10 ? "Forecast accuracy is high" : "Forecast deviation suggests model refinement is needed"} (MAPE = ${forecast.metrics.mape}%).

**Customer Behavior (RFM Segmentation)**
- Loyal customers: ${loyalCount}
- Potential customers: ${potentialCount}
- Low-value customers: ${lowCount}
- Suggestion: Focus on nurturing “Potential” customers with email and loyalty programs.

**Promotion Strategy**
- Current Recommendation: ${promotion.recommendation.type} offering ${promotion.recommendation.discount}.
- ${promotion.recommendation.type === "Flash Sale"
    ? "Plan flash sales during low-demand periods to stimulate purchase intention."
    : "Reward loyal customers via recurring discount codes or personalized vouchers."
  }

**AI-driven Recommendations**
1. Implement automated flash-sale scheduling based on daily demand thresholds.
2. Introduce RFM-based personalized offers.
3. Apply feedback loops: collect post-sale satisfaction scores to fine-tune AI promotions.
4. Integrate predictive analytics into your inventory and supply chain planning.

🧠 *Generated automatically by AI Recommendation Engine (Module: summary.js)*
`;

  return insight;
}

module.exports = { generateSummary };
