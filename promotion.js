function generatePromotions(orders) {
  // Simple rule: low sales in last 7 days → trigger flash sale
  const today = new Date();
  const lastWeek = orders.slice(-7);
  const avgSales = lastWeek.reduce((a, b) => a + b.sales, 0) / lastWeek.length;

  const rule = avgSales < 200
    ? { type: "Flash Sale", discount: "20%", duration: "48h" }
    : { type: "Voucher", discount: "10%", code: "LOYAL10" };

  return {
    currentAvg: avgSales,
    recommendation: rule,
  };
}

module.exports = { generatePromotions };
