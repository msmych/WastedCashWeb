<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Wasted cash'
    }
  }
}
</script>

<style lang="scss">

</style>
