export const mutations = {
  setApiToken(state, payload) {
    state.apiToken = payload.apiToken;
    state.user.id = payload.userId;
  },
  setUserCurrencies(state, currencies) {
    const currenciesObj = {};
    for (let i = 0; i < currencies.length; i++) {
      currenciesObj[currencies[i]] = i;
    }
    state.user.currencies = currenciesObj;
  },
  setUserTotal(state, totals) {
    const userTotals = {};
    totals.forEach(total => {
      if (userTotals[total.currency]) {
        userTotals[total.currency] += total.amount;
      } else {
        userTotals[total.currency] = total.amount;
      }
    });
    state.user.totals = userTotals;
  }
};
