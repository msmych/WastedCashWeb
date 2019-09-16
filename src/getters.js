export const getters = {
  apiToken(state) {
    return state.apiToken;
  },
  userId(state) {
    return state.user.id;
  },
  userCurrencies(state) {
    return Object.keys(state.user.currencies)
  },
  userTotals(state) {
    const totals = [];
    Object.keys(state.user.totals).forEach(currency => {
      totals.push({
        amount: state.user.totals[currency] / 100,
        currency: currency
      });
    });
    return totals;
  }
};
