<template>
  <div>
    <ul>
      <li>
        <router-link to="/expenses/my">My expenses</router-link>
      </li>
      <li>
        <router-link to="/expenses/new">New expense</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app-navigation'
  }
</script>
