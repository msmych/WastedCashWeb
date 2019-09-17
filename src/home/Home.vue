<template>
  <div>
    <h3>My total</h3>
    <input type="radio" id="month" value="MONTH" v-model="type" @change="updateTotals">
    <label for="month">Month</label>
    <input type="radio" id="all" value="ALL" v-model="type" @change="updateTotals">
    <label for="all">All</label>
    <h3 v-for="userTotal in userTotals">
      {{ userTotal.amount }} {{ userTotal.currency }}
    </h3>
    <div>
      <label>
        New expense:
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
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios';
  import AppExpenseCategoryPicker from "./expense/ExpenseCategoryPicker";

  export default {
    components: {AppExpenseCategoryPicker},
    data() {
      return {
        type: "MONTH",
        amount: 0,
        currency: "USD",
        category: undefined
      }
    },
    computed: {
      ...mapGetters({
        apiToken: 'apiToken',
        userId: 'userId',
        userCurrencies: 'userCurrencies',
        userTotals: 'userTotals'
      }),
      axiosConfig() {
        return {
          headers: {
            'user-id': this.userId,
            'api-token': this.apiToken
          }
        }
      }
    },
    mounted() {
      this.updateCurrencies();
      this.updateTotals()
    },
    methods: {
      updateCurrencies() {
        axios.get(`/user/${this.userId}/currencies`, this.axiosConfig)
          .then(currencies => this.$store.commit('setUserCurrencies', currencies.data))
      },
      updateTotals() {
        axios.get(`/total/in/${this.userId}/type/${this.type}`, this.axiosConfig)
          .then(totals => this.$store.commit('setUserTotal', totals.data))
      },
      createExpense() {
        axios.post("/expense", {
          userId: this.userId,
          groupId: this.userId,
          amount: this.amount * 100,
          currency: this.currency,
          category: this.category
        }, this.axiosConfig)
          .then(() => this.updateTotals())
          .then(() => this.amount = 0)
      }
    }
  }
</script>
