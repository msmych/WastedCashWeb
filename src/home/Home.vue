<template>
  <div>
    <div v-for="userTotal in userTotals">
      <h3>{{ userTotal.amount }} {{ userTotal.currency }}</h3>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios';

  export default {
    computed: {
      ...mapGetters({
        apiToken: 'apiToken',
        userId: 'userId',
        userTotals: 'userTotals'
      })
    },
    mounted() {
      axios.get(`/total/in/${this.userId}/type/MONTH`, {
        headers: {
          'user-id': this.userId,
          'api-token': this.apiToken
        }
      }).then(totals => this.$store.commit('setUserTotal', totals.data))
    }
  }
</script>
