<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div v-if="apiTokenPresent">
      <app-navigation></app-navigation>
      <router-view></router-view>
    </div>
    <div v-else>
      <auth></auth>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Auth from "./auth/Auth";
  import AppNavigation from "./navigation/Navigation";

  export default {
    name: 'app',
    components: {AppNavigation, Auth},
    data() {
      return {
        title: 'Wasted cash'
      }
    },
    computed: {
      ...mapGetters({
        apiToken: 'apiToken'
      }),
      apiTokenPresent() {
        return this.$route.query.apiToken || this.apiToken;
      }
    },
    created() {
      const apiToken = this.$route.query.apiToken;
      const userId = this.$route.query.userId;
      if (apiToken && userId) {
        this.$store.commit({
          type: 'setApiToken',
          apiToken: apiToken,
          userId: userId
        });
      }
    }
  }
</script>

<style lang="scss">
  @import "scss/style";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-left: 5%;
  }
</style>
