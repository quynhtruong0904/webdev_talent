function segmentCustomers(orders) {
  const customers = {};

  // Aggregate orders by customer
  orders.forEach(order => {
    if (!customers[order.customer]) {
      customers[order.customer] = { recency: 0, frequency: 0, monetary: 0, lastDate: order.date };
    }
    customers[order.customer].frequency += 1;
    customers[order.customer].monetary += order.sales;
    customers[order.customer].lastDate = order.date;
  });

  // Compute recency and score
  const now = new Date();
  const data = Object.keys(customers).map(cust => {
    const diff = Math.floor((now - new Date(customers[cust].lastDate)) / (1000 * 3600 * 24));
    return {
      customer: cust,
      recency: diff,
      frequency: customers[cust].frequency,
      monetary: customers[cust].monetary,
    };
  });

  // Classify segments
  data.forEach(d => {
    d.segment =
      d.monetary > 500 && d.frequency > 3
        ? "Loyal"
        : d.monetary < 200
        ? "Low-value"
        : "Potential";
  });

  return data;
}

module.exports = { segmentCustomers };
