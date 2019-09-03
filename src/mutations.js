export const mutations = {
  setApiToken(state, payload) {
    state.apiToken = payload.apiToken;
    state.user.id = payload.userId;
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
