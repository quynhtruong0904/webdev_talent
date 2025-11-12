function getCareActions() {
  return [
    {
      stage: "Post-purchase",
      action: "Send thank-you email with 10% voucher for next order.",
    },
    {
      stage: "Inactive >30 days",
      action: "Send reactivation message offering free shipping.",
    },
    {
      stage: "High-value customer",
      action: "Send loyalty reward and request for feedback.",
    },
  ];
}

module.exports = { getCareActions };
