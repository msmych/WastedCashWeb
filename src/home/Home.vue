<template>
  <div>
    <h3>My total</h3>
    <input type="radio" id="month" value="MONTH" v-model="type">
    <label for="month">Month</label>
    <input type="radio" id="all" value="ALL" v-model="type">
    <label for="month">All</label>
    <div v-for="userTotal in userTotals">
      <h3>{{ userTotal.amount }} {{ userTotal.currency }}</h3>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios';

  export default {
    data() {
      return {
        type: "MONTH"
      }
    },
    computed: {
      ...mapGetters({
        apiToken: 'apiToken',
        userId: 'userId',
        userTotals: 'userTotals'
      })
    },
    mounted() {
      axios.get(`/total/in/${this.userId}/type/${this.type}`, {
        headers: {
          'user-id': this.userId,
          'api-token': this.apiToken
        }
      }).then(totals => this.$store.commit('setUserTotal', totals.data))
    }
  }
</script>
