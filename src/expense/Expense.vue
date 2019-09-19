<template>
  <div>
    {{ expense.date }} {{ expense.amount }} {{ expense.currency }}
    <button @click="removeExpense">❌</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'

  export default {
    name: 'app-expense',
    props: ['expense'],
    computed: {
      ...mapGetters({
        axiosConfig: 'axiosConfig'
      })
    },
    methods: {
      onRemoved() {
        this.$emit('deleted')
      },
      removeExpense() {
        axios.delete(`/expense/${this.expense.id}`, this.axiosConfig)
          .then(() => this.onRemoved())
      }
    }
  }
</script>
