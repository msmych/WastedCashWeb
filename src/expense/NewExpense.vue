<template>
  <div>
    <h3>New expense</h3>
    <label>
      <input v-model="amount" type="number" step="0.01" placeholder="Amount">
      <select v-model="currency">
        <option v-for="userCurrency in userCurrencies"
                :value="userCurrency"
        >{{ userCurrency }}</option>
      </select>
      <app-expense-category-picker @categorySelected="category = $event">
      </app-expense-category-picker>
    </label>
    <button
      :disabled="amount < 1"
      @click="createExpense"
    >Add</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import AppExpenseCategoryPicker from "../expense/ExpenseCategoryPicker"

  export default {
    name: 'app-new-expense',
    components: {AppExpenseCategoryPicker},
    data() {
      return {
        amount: 0,
        currency: "USD",
        category: undefined
      }
    },
    computed: {
      ...mapGetters({
        userId: 'userId',
        userCurrencies: 'userCurrencies',
        axiosConfig: 'axiosConfig'
      })
    },
    mounted() {
      this.updateCurrencies();
    },
    methods: {
      updateCurrencies() {
        axios.get(`/user/${this.userId}/currencies`, this.axiosConfig)
          .then(currencies => this.$store.commit('setUserCurrencies', currencies.data))
      },
      createExpense() {
        axios.post("/expense", {
          userId: this.userId,
          groupId: this.userId,
          amount: this.amount,
          currency: this.currency,
          category: this.category
        }, this.axiosConfig)
          .then(() => this.onExpenseCreated())
          .then(() => this.amount = 0)
      },
      onExpenseCreated() {
        this.$emit('created')
      }
    }
  }
</script>
