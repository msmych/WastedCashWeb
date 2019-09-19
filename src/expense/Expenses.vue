<template>
  <div>
    <div v-for="expense in expenses">
      <app-expense :expense="expense"
                   @deleted="loadExpenses"
      ></app-expense>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import AppExpense from "./Expense";

  export default {
    name: 'app-expenses',
    components: {AppExpense},
    data() {
      return {
        expenses: []
      }
    },
    computed: {
      ...mapGetters({
        userId: 'userId',
        axiosConfig: 'axiosConfig'
      })
    },
    mounted() {
      this.loadExpenses()
    },
    methods: {
      loadExpenses() {
        axios.get(`/expenses/by/${this.userId}`, this.axiosConfig)
          .then(response => {
            const expenses = [];
            let data = response.data;
            for (let i = data.length - 1; i >= 0; i--) {
              expenses.push(data[i]);
            }
            this.expenses = expenses
          })
      }
    }
  }
</script>
