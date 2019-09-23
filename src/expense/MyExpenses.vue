<template>
  <div>
    <app-totals ref="totals"></app-totals>
    <app-expenses ref="expenses" @expenseDeleted="updateTotals"></app-expenses>
  </div>
</template>

<script>
  import AppTotals from "../total/Totals";
  import AppExpenses from "./Expenses";
  export default {
    name: 'app-my-expenses',
    components: {AppExpenses, AppTotals},
    methods: {
      updateTotals() {
        this.$refs.totals.updateTotals()
      }
    }
  }
</script>
