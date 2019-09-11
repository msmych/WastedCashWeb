<template>
  <div>
    <h3>My total</h3>
    <input type="radio" id="month" value="MONTH" v-model="type">
    <label for="month">Month</label>
    <input type="radio" id="all" value="ALL" v-model="type">
    <label for="month">All</label>
    <div v-for="userTotal in userTotals">
      <h3>{{ userTotal.amount }} {{ userTotal.currency }}</h3>
      <div>
        <label>
          New expense:
          <input type="number" placeholder="Amount" v-model="amount">
        </label>
        <button
          :disabled="amount < 1"
          @click="createExpense(userTotal.currency)"
        >Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios';

  export default {
    data() {
      return {
        type: "MONTH",
        amount: 0
      }
    },
    computed: {
      ...mapGetters({
        apiToken: 'apiToken',
        userId: 'userId',
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
      this.updateTotals()
    },
    methods: {
      updateTotals() {
        axios.get(`/total/in/${this.userId}/type/${this.type}`, this.axiosConfig)
          .then(totals => this.$store.commit('setUserTotal', totals.data))
      },
      createExpense(currency) {
        axios.post("/expense", {
          userId: this.userId,
          groupId: this.userId,
          amount: this.amount,
          currency: currency
        }, this.axiosConfig)
          .then(() => this.updateTotals())
          .then(() => this.amount = 0)
      }
    }
  }
</script>
