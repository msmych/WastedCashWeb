<template>
  <div>
    <h3>My totals</h3>
    <input type="radio" id="month" value="MONTH" v-model="type" @change="updateTotals">
    <label for="month">Month</label>
    <input type="radio" id="all" value="ALL" v-model="type" @change="updateTotals">
    <label for="all">All</label>
    <h3 v-for="userTotal in userTotals">
      {{ userTotal.amount | amount }} {{ userTotal.currency }}
    </h3>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app-totals',
    data() {
      return {
        type: 'MONTH'
      }
    },
    computed: {
      ...mapGetters({
        userId: 'userId',
        userTotals: 'userTotals',
        axiosConfig: 'axiosConfig'
      })
    },
    mounted() {
      this.updateTotals()
    },
    methods: {
      updateTotals() {
        axios.get(`/total/in/${this.userId}/type/${this.type}`, this.axiosConfig)
          .then(totals => this.$store.commit('setUserTotals', totals.data))
      }
    }
  }
</script>
