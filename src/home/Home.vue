<template>
  <div>
    <h1>API token: {{ apiToken }}</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        apiToken: 'apiToken'
      })
    }
  }
</script>
