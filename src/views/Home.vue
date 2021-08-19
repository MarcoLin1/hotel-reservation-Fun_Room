<template>
  <div class="home__page">
    <Navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>

</style>
