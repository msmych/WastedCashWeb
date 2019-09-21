<template>
  <div>
    <app-totals ref="totals"></app-totals>
    <app-new-expense @created="onNewExpense"></app-new-expense>
    <app-expenses ref="expenses" @expenseDeleted="updateTotals"></app-expenses>
  </div>
</template>

<script>
  import AppExpenses from "../expense/Expenses"
  import AppNewExpense from "../expense/NewExpense"
  import AppTotals from "../total/Totals";

  export default {
    components: {AppTotals, AppExpenses, AppNewExpense},
    methods: {
      onNewExpense() {
        this.updateTotals();
        this.$refs.expenses.loadExpenses()
      },
      updateTotals() {
        this.$refs.totals.updateTotals()
      }
    }
  }
</script>
