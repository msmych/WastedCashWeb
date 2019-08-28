<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div v-if="apiToken">
      <router-view></router-view>
    </div>
    <div v-else>
      <auth></auth>
    </div>
  </div>
</template>

<script>
import Auth from "./auth/Auth";

export default {
  name: 'app',
  components: {Auth},
  data () {
    return {
      title: 'Wasted cash'
    }
  },
  computed: {
    apiToken() {
      return this.$route.query.apiToken;
    }
  },
  created() {
    const apiToken = this.$route.query.apiToken;
    if (apiToken) {
      this.$store.commit({
        type: 'setApiToken',
        apiToken: apiToken
      });
    }
  }
}
</script>

<style lang="scss">

</style>
